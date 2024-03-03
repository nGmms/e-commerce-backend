module.exports = {
    development: {
      dialect: 'sqlite',
      storage: './database.sqlite' // Path to the SQLite file
    },
    test: {
      dialect: 'sqlite',
      storage: ':memory:' // Use in-memory database for testing
    },
    production: {
      dialect: 'sqlite',
      storage: './prod-database.sqlite' // Path for production SQLite file
    }
  };
  