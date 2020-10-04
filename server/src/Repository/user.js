import connection from "../database/connection.js";

const repository = {
	store: async (req, res) => {
		await connection("users")
			.insert(req)
			.catch((err) => {
				return err.constraint.includes("email_unique")
					? res.status(400).json({
							Errors: ["The E-mail need to be unique."],
					  })
					: res.status(501).json(err);
			});
	},

	delete: async (id, res) => {
		return await connection("users")
			.where("id", id)
			.delete()
			.catch((err) => {
				return res.status(500).json(err);
			});
	},

	update: async (req, id, res) => {
		return await connection("users")
			.update(req)
			.where("id", id)
			.catch((err) => {
				return res.status(500).json(err);
			});
	},

	show: async (id, res) => {
		return await connection("users")
			.select("id", "name", "email", "admin")
			.where("id", id)
			.first()
			.catch((err) => {
				return res.status(500).json(err);
			});
	},

	list: async (res) => {
		return await connection("users")
			.select("id", "name", "email", "admin")
			.catch((err) => {
				return res.status(500).json(err);
			});
	},

	listAdmin: async (res) => {
		return await connection("users")
			.select("id", "name", "email", "admin")
			.where({ admin: true })
			.catch((err) => {
				return res.status(500).json(err);
			});
	},

	listNoAdmin: async (res) => {
		return await connection("users")
			.select("id", "name", "email", "admin")
			.where({ admin: false })
			.catch((err) => {
				return res.status(500).json(err);
			});
	},
};

export default repository;
