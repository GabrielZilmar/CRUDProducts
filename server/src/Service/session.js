import SessionRepository from "../Repository/session";

import { encryptPassword, validEmail } from "../utils.js";

const service = {
	store: async (req, res) => {
		let errors = [];
		if (!req.body.email && !validEmail(req.body.email)) {
			errors.push("The email is mandatory, insert a valid e-mail.");
		}
		if (!req.body.password) {
			errors.push("The password is mandatory.");
		}

		if (errors.length > 0) {
			return {
				Errors: errors,
			};
		}

		const user = await SessionRepository.store(
			req.body.email,
			encryptPassword(req.body.password),
			res
		);

		return user ? user : { Failed: "Invalid e-mail or password." };
	},
};

export default service;
