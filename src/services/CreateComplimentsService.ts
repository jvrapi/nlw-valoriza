import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IComplimentsRequest {
	user_sender: string;
	user_receiver: string;
	tag_id: string;
	message: string;
}

class CreateComplimentsService {
	async execute({
		user_sender,
		user_receiver,
		tag_id,
		message
	}: IComplimentsRequest) {
		const complimentsRepository = getCustomRepository(
			ComplimentsRepositories
		);

		const usersRepository = getCustomRepository(UsersRepositories);

		if (user_sender === user_receiver) {
			throw new Error('Incorrect user receiver');
		}

		const userReceiverExists = await usersRepository.findOne(user_receiver);

		if (!userReceiverExists) {
			throw new Error('User receiver does not exists!');
		}

		const compliments = complimentsRepository.create({
			user_sender,
			user_receiver,
			tag_id,
			message
		});

		await complimentsRepository.save(compliments);

		return compliments;
	}
}

export { CreateComplimentsService };
