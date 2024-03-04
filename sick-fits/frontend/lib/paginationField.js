import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells Apollo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      if (items.length && items.length !== first && page === pages) {
        // if there are items, but not as many as we asked for, and we are on the last page
        return items;
      }

      if (items.length !== first) {
        // we don't have any items, we must go to the network to fetch them
        return false;
      }

      // if there are items, return them from the cache, and we don't need to go to the network
      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them to Apollo!`
        );
        return items;
      }

      return false; // fallback to network

      // AND there aren't enough items to satisfy how many were requested

      // first thing it does is ask the read function for those items
      // we can either do one of two things
      // first thing we can do is return the items because they are already in the cache
      // the other thing we can do is return undefined from here (network request)
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // this runs when the Apollo client comes back from the network with our product
      const merged = existing ? existing.slice(0) : [];
      // this is where we can say how we want to put the items in the cache
      for (let i = skip; i < skip + incoming.length; i += 1) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged);
      // finally we return the merged items from the cache
      return merged;
    },
  };
}
