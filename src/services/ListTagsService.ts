import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from 'class-transformer'

class ListTagsService {

	async execute() {
		const tagsRepositories = getCustomRepository(TagsRepositories);

		const tags = await tagsRepositories.find();

		// campo customizado
		return classToPlain(tags);
	}


}

export { ListTagsService }