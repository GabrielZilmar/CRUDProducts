import UserService from "../Service/user.js";

import { generateUuid } from "../utils.js";

const controller = {
	store: async (req, res) => {
		const user = {
			id: generateUuid(),
			name: req.body.name,
			email: req.body.email,
			admin: req.body.admin ? req.body.admin : false,
			password: req.body.password,
		};

		const newUser = await UserService.store(user, res);

		return newUser.Errors
			? res.status(400).json(newUser)
			: res.status(201).json(newUser);
	},

	show: async (req, res) => {
		const user = await UserService.show(req, res);

		return user.Errors
			? res.status(400).json(user)
			: res.status(200).json(user);
	},

	list: async (req, res) => {
		const users = await UserService.list(req.headers.authorization, res);

		return users.Errors
			? res.status(400).json(users)
			: res.status(200).json(users);
	},

	listAdmin: async (req, res) => {
		const users = await UserService.listAdmin(
			req.headers.authorization,
			res
		);

		return users.Errors
			? res.status(400).json(users)
			: res.status(200).json(users);
	},

	listNoAdmin: async (req, res) => {
		const users = await UserService.listNoAdmin(
			req.headers.authorization,
			res
		);

		return users.Errors
			? res.status(400).json(users)
			: res.status(200).json(users);
	},
};

export default controller;
