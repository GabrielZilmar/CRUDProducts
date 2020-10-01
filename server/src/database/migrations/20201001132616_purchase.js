exports.up = function (knex) {
	return knex.schema.createTable("purchases", function (table) {
		table.uuid("id").primary();
		table.integer("amount").notNullable();
		table.uuid("fk_id_user").notNullable();
		table
			.foreign("fk_id_user")
			.references("id")
			.inTable("users")
			.onDelete("cascade");

		table.uuid("fk_id_product").notNullable();
		table
			.foreign("fk_id_product")
			.references("id")
			.inTable("products")
			.onDelete("cascade");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("purchases");
};
