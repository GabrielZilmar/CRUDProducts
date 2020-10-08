exports.up = function (knex) {
	return knex.schema.createTable("users", function (table) {
		table.uuid("id").primary();
		table.string("name").notNullable();
		table.string("email").notNullable().unique();
		table.string("password").defaultTo(false).notNullable();
		table.boolean("admin").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
