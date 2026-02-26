import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "better-sqlite3",
  database: "./data/db.sqlite",
  entities: [__dirname + "/entities/**/*.{js,ts}"],
  logging: true,
  synchronize: true,
});

export default datasource;
