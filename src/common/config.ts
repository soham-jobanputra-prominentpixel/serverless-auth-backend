import { Sequelize } from "sequelize";
import process from "node:process";

export const sequelize = new Sequelize(
  "testdb",
  "postgres",
  process.env["DATABASE_PASSWORD"],
  {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
  },
);
