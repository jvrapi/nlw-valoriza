import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


class CreateTagService {
	async execute(name: string) {
		const tagsRepositories = getCustomRepository(TagsRepositories);

		if (!name) {
			throw new Error('Incorrect name');
		}

		const tagsAlreadyExists = await tagsRepositories.findOne({ name: name });

		if (tagsAlreadyExists) {
			throw new Error('Tags already exists');
		}

		const tag = await tagsRepositories.create({ name: name });

		await tagsRepositories.save(tag);

		return tag;
	}
}

export { CreateTagService }