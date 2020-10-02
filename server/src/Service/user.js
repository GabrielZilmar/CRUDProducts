import UserRepository from "../Repository/user";

import { encryptPassword, validEmail, validUuid } from "../utils.js";

import jwt from "../jwt.js";

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
		if (req.admin !== true && req.admin !== false) {
			errors.push("Admin need to be a boolean.");
		}

		if (errors.length > 0) {
			return {
				Errors: errors,
			};
		}

		const user = {
			id: req.id,
			name: req.name,
			email: req.email,
			admin: req.admin,
			password: encryptPassword(req.password),
		};

		await UserRepository.store(user, res);

		return user;
	},

	show: async (req, res) => {
		let errors = [];
		let auth;

		if (!req.headers.authorization) {
			errors.push("You don't have access to this area.");
		} else {
			auth = jwt.isAuth(req.headers.authorization);
			if (!auth.auth || !auth.id) {
				errors.push("You don't have access to this area.");
			}
		}

		if (errors.length > 0) {
			return {
				Errors: errors,
			};
		}

		const user = await UserRepository.show(auth.id, res);
		return user ? user : {};
	},
};

export default service;
