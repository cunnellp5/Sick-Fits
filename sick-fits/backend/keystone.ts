import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";

const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://localhost/keystone-sick-fits-tutorial-main";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  lists: createSchema({
    // Schema items go in here
  }),
  db: {
    adapter: "knex",
    url: databaseURL,
  },
  ui: {
    // Show the UI only for people who pass this test
    isAccessAllowed: ({ session }) => {
      // console.log(session);
      // return !!session?.data;
      return true;
    },
  },
  // TODO: Add session values here
});
