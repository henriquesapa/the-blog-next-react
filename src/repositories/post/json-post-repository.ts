import { resolve } from 'path';
import { PostRepository } from './post-repository';
import { readFile } from 'fs/promises';
import { PostModel } from '@/models/post/post-model';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'post.json',
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    return this.readFromDisk();
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);
    if (!post) throw new Error('Post não encontrado');
    return post;
  }
}
