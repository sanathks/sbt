import * as contentful from 'contentful'

export interface Post {
  title: string, 
  slug: string, 
  content: string
}

const client = contentful.createClient({
  space: process.env.CONTENT_SPACE || "",
  accessToken: process.env.CONTENT_API_KEY || ""
});

export async function getPosts(): Promise<Post[]> {
  const posts = await client.getEntries({
    content_type: 'post'
  }) as any;
  return posts.items.map((post: {fields: object}) => post.fields)
}

export async function getPost(slug: string): Promise<Post> {
  const posts = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug
  }) as any;
  return posts.items.map((post: {fields: object}) => post.fields)[0] as Post
}
