module.exports = {
	client: "pg",
	connection: {
		host: "localhost",
		database: "CrudProducts",
		user: "postgres",
		password: "gabriel123",
	},
	migrations: {
		directory: "./src/database/migrations",
	},
	useNullAsDefault: true,
};
