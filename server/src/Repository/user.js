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
};

export default repository;
