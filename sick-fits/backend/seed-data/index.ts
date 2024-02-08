import { products } from './data';

export async function insertSeedData(ks: any) {
  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  const { knex } = adapter;
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    const [id] = await knex('ProductImage')
      .insert({ image: product.photo, altText: product.description })
      .returning('id');
    product.photo = id;
    await knex('Product').insert(product);
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``
  );
  process.exit();
}
