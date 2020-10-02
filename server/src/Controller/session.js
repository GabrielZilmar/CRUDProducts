import SessionService from "../Service/session.js";

const controller = {
	store: async (req, res) => {
		const newSession = await SessionService.store(req, res);

		if (newSession.Errors) {
			return res.status(400).json(newSession);
		} else if (newSession.Failed) {
			return res.status(200).json(newSession);
		} else {
			return res.status(201).json(newSession);
		}
	},
};

export default controller;
