import jwt from "jsonwebtoken";

export default {
	createAuth: (id, admin) => {
		console.log(admin);
		const token = jwt.sign({ id: id, admin: admin }, process.env.JWT_KEY, {
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
					id: decode.id,
					admin: decode.admin,
					iat: decode.iat,
					exp: decode.exp,
				};
			}
		});

		return auth;
	},
};
