import connection from "../database/connection.js";

const repository = {
	store: async (email, password, res) => {
		const session = await connection("users")
			.select("id", "name", "email")
			.where({
				email: email,
				password: password,
			})
			.first()
			.catch((err) => {
				return res.status(500).json(err);
			});

		return session;
	},
};

export default repository;
