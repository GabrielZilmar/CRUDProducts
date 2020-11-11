exports.up = function (knex) {
	return knex.schema.createTable("users", function (table) {
		table.uuid("id").primary();
		table.string("name").notNullable();
		table.string("email").notNullable().unique();
		table.string("password").notNullable();
		table.boolean("admin").defaultTo(false).notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
