import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
	async handle(request: Request, response: Response) {
		const { name, email, admin } = request.body;

		const userService = new CreateUserService();

		try {


			const user = await userService.execute({ name, email, admin });

			return response.json(user)
		} catch (error) {
			if (error instanceof Error) {

				response.status(500).json({ message: error.message });
			}
			return response.status(500);
		}

	}
}

export { CreateUserController }