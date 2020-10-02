import SessionRepository from "../Repository/session";

import jwt from "../jwt.js";
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

		if (user) {
			const token = jwt.createAuth(user.id);
			return { User: user, Token: token };
		} else {
			return {
				Failed: "Invalid e-mail or password.",
				Token: { auth: false, token: null },
			};
		}
	},
};

export default service;
