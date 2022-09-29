import { Client as FaunaClient } from "faunadb";

export const fauna = new FaunaClient({
  secret: process.env.FAUNA_SECRET_KEY!,
  domain: "db.us.fauna.com",
});
