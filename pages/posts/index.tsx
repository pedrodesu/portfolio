import { readdir } from 'fs/promises';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { join } from 'path';

interface PostsProps {
    posts: [string, string][];
}

const Posts: NextPage<PostsProps> = ({ posts }) => (
    <>
        <Head>
            <title>Posts / pedrodesu</title>
        </Head>
        <ul className="my-20">
            {
                posts.map(([link, title], i) => (
                    <li className="py-4 odd:bg-gray-100" key={i}>
                        <div className="container">
                            <Link href={link}>
                                <a>{title}</a>
                            </Link>
                        </div>
                    </li>
                ))
            }
        </ul>
    </>
);

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
    const posts = (await readdir(join('pages', 'posts')))
        .filter((raw) => raw.endsWith('.mdx'))
        .map(
            (raw) => [Number.parseInt(raw.substring(0, raw.indexOf('.'))), raw.substring(0, raw.lastIndexOf('.'))] as const
        )
        .sort(([prev], [curr]) => curr - prev)
        .map<[string, string]>(
            ([_, id]) => [`/posts/${id}`, id.substring(id.indexOf('.') + 1).split('_').join(' ')]
        );

    return { props: { posts } };
}

export default Posts;
