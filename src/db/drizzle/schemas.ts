import { InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const postTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('id').notNull().unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excert: text('excert').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  published: integer('published').notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export type PostsTableSelectMode = InferSelectModel<typeof postTable>;
