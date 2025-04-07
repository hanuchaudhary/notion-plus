import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({
  path: ".env",
});

const client = postgres(process.env.DB_URL!, {
  max: 1,
});

const db = drizzle(client, {
  schema,
  logger: true,
});

const migrateDb = async () => {
  try {
    console.log("Starting database migration...");
    await migrate(db, {
      migrationsFolder: "./migrations",
    });
    console.log("Database migrated successfully");
  } catch (error) {
    console.error("Error migrating database:", error);
  }
};
migrateDb();

export default db;
