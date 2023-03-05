import React from 'react';
import { getPost, getPosts, Post as PostType } from "@/app/services/posts"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import readingTime from 'reading-time';


interface Props {
  params: {
    slug: string,
  }
}

export async function generateMetadata({params}: Props) {
  const post = await getPost(params.slug);

  return {
    title: post.title,
  }
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: PostType) => ({
    slug: post.slug
  }))
}

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);

  const time = readingTime(documentToPlainTextString(post.content as any))

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((x: any) => x.type === "code")
        ) {
          return <pre>{children}</pre>;
        }
        return <p>{children}</p>;
      },
    },
    renderMark: {
      [MARKS.CODE]: (text: any) => {
        return (
          <code>{text}</code>
        );
      },
    },
  };

  return <main>
    <div className="relative px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <div className="flex gap-4  items-center mb-1 mt-7">
                  <img src="https://serrexlabs.com/content/images/2023/01/SERrex-labs.--1--1.png" alt="SERrex Labs" className="w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-xl">SERrex Labs</h3>
                    <span className='text-gray-400 text-sm mt-0'>Nov 15, 2022 . {time.text}</span>
                  </div>
                </div>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">{post.title}</h1>
              </header>
              <div className="prose dark:prose-invert mt-8">
                {documentToReactComponents(post.content as any, options)}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </main>
} 
