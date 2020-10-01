exports.up = function (knex) {
	return knex.schema.createTable("products", function (table) {
		table.uuid("id").primary();
		table.string("name").notNullable();
		table.boolean("sold").defaultTo(false);
		table.float("price").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("products");
};
