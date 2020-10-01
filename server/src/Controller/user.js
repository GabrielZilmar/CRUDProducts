import UserService from "../Service/user.js";

import { generateUuid } from "../utils.js";

const controller = {
	store: async (req, res) => {
		const user = {
			id: generateUuid(),
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		};

		const newUser = await UserService.store(user, res);

		return newUser.Errors
			? res.status(400).json(newUser)
			: res.status(201).json(newUser);
	},
};

export default controller;
