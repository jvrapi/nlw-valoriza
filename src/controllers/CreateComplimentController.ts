import { Request, Response } from 'express';
import { CreateComplimentsService } from '../services/CreateComplimentsService';

class CreateComplimentController {
	async handle(request: Request, response: Response) {
		const { user_receiver, tag_id, message } = request.body;
		const { user_id } = request;
		const createComplimentService = new CreateComplimentsService();

		const compliments = await createComplimentService.execute({
			user_sender: user_id,
			user_receiver,
			tag_id,
			message
		});

		return response.json(compliments);
	}
}

export { CreateComplimentController };
