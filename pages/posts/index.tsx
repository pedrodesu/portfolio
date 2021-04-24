import { readdir } from 'fs/promises';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { join } from 'path';

interface PostsProps {
    posts: [string, string][];
}

const Posts: NextPage<PostsProps> = ({ posts }) => (
    <ul>
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
);

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
    const posts = (await readdir(join('pages', 'posts')))
        .filter((el) => el.endsWith('.mdx'))
        .map((el) => el.substring(0, el.lastIndexOf('.')))
        .map<[string, string]>((el) => [`/posts/${el}`, el.split('_').map((sub) => sub[0].toUpperCase() + sub.substring(1)).join(' ')]);

    return { props: { posts } };
}

export default Posts;