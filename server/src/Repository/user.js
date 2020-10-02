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

	show: async (id, res) => {
		return await connection("users")
			.select("id", "name", "email", "admin")
			.where("id", id)
			.first()
			.catch((err) => {
				return res.status(500).json(err);
			});
	},
};

export default repository;
