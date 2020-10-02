import jwt from "jsonwebtoken";

export default {
	createAuth: (id, email, name, admin) => {
		const token = jwt.sign(
			{ id, admin, email, name },
			process.env.JWT_KEY,
			{
				expiresIn: 600,
			}
		);

		return { auth: true, token: token };
	},

	decodeToken: (token) => {
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
					name: decode.name,
					email: decode.email,
					admin: decode.admin,
					iat: decode.iat,
					exp: decode.exp,
				};
			}
		});

		return auth;
	},
};
