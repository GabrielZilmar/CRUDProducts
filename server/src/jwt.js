import jwt from "jsonwebtoken";

export default {
	createAuth: (id) => {
		const token = jwt.sign({ id }, process.env.JWT_KEY, {
			expiresIn: 600,
		});

		return { auth: true, token: token };
	},

	isAuth: (token) => {
		const auth = jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
			if (err) {
				return {
					auth: false,
					token: null,
				};
			} else {
				return {
					auth: true,
					token: token,
					iat: decode.iat,
					exp: decode.exp,
				};
			}
		});

		return auth;
	},
};
