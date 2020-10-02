import UserRepository from "../Repository/user";

import { encryptPassword, validEmail, validUuid } from "../utils.js";

import jwt from "../jwt.js";

const service = {
	store: async (req, token, res) => {
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
		if (req.admin) {
			const decodeToken = jwt.decodeToken(token);

			if (!decodeToken.auth || !decodeToken.admin) {
				errors.push("You need to be an admin to create an admin user.");
			}
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
			auth = jwt.decodeToken(req.headers.authorization);
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

	delete: async (req, res) => {
		const token = jwt.decodeToken(req);

		if (!token.auth) {
			return {
				Errors: ["You don't have access to this area."],
			};
		}

		const deleted = await UserRepository.delete(token.id, res);
		return deleted;
	},

	list: async (req, res) => {
		const token = jwt.decodeToken(req);

		if (!token.admin || !token.auth) {
			return {
				Errors: ["You don't have access to this area."],
			};
		}

		const users = await UserRepository.list(res);
		return users;
	},

	listAdmin: async (req, res) => {
		const token = jwt.decodeToken(req);

		if (!token.admin || !token.auth) {
			return {
				Errors: ["You don't have access to this area."],
			};
		}

		const users = await UserRepository.listAdmin(res);
		return users;
	},

	listNoAdmin: async (req, res) => {
		const token = jwt.decodeToken(req);

		if (!token.admin || !token.auth) {
			return {
				Errors: ["You don't have access to this area."],
			};
		}

		const users = await UserRepository.listNoAdmin(res);
		return users;
	},
};

export default service;
