import UserRepository from "../Repository/user";

import { validEmail, encryptPassword } from "../utils.js";

const service = {
	store: async (req, res) => {
		let errors = [];

		if (!req.name) {
			errors.push("The name is mandatory.");
		}
		if (!validEmail(req.email)) {
			errors.push("The email is mandatory, insert a valid e-mail.");
		}
		if (!req.password) {
			errors.push("The password is mandatory.");
		}

		if (errors.length > 0) {
			return {
				Errors: errors,
			};
		}

		const ong = {
			id: req.id,
			name: req.name,
			email: req.email,
			password: encryptPassword(req.password),
		};

		await UserRepository.store(ong, res);

		return ong;
	},
};

export default service;
