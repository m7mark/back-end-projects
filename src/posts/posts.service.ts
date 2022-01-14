import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Posts) private postRepository: typeof Posts,
    private filesService: FilesService) { }

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image)
    try {
      const post = await this.postRepository.create({ ...dto, image: fileName })
      return post
    } catch {
      throw new HttpException('Title must be unique', HttpStatus.PRECONDITION_FAILED)
    }
  }
}
