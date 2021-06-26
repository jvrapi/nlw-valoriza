import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

interface IPayload {
	sub: string;
}

// middleware de verificação de token

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
	const authToken = request.headers.authorization;

	if (!authToken) {
		return response.status(401).end()
	}

	const [, token] = authToken.split(' ')

	try {
		const { sub } = verify(token, "29159c9a9815579c55712f569eb56ef0") as IPayload;

		request.user_id = sub;

		return next();
	} catch (error) {
		return response.status(401).end();
	}


}