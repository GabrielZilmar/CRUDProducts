import jwt from "jsonwebtoken";

export default {
	createAuth: (id) => {
		const token = jwt.sign({ id }, process.env.JWT_KEY, {
			expiresIn: 600,
		});

		return { auth: true, token: token };
	},

	isAuth: (token) => {
		const auth = jwt.verify(token, process.env.JWT_KEY);
		console.log(auth);
	},

	test: () => {
		console.log("Teste");
	},
};
