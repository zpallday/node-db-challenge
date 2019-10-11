module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/projects.sqlite3"
    },
    migrations: {
      directory: "./data/migrations/"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    useNullAsDefault: true
  }
};
