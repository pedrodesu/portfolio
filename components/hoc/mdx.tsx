import { NextPage } from 'next';
import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import PostProgress from '../post-progress';

const MDX: NextPage = ({ children }) => (
    <MDXProvider components={{
        wrapper: (props) => {
            const { route } = useRouter();
            const name = route.substring(route.lastIndexOf('/') + 1);
            const fmtName = name.substring(name.indexOf('.') + 1).split('_').join(' ');

            return (
                <>
                    <Head>
                        <title>{fmtName} / pedrodesu</title>
                    </Head>
                    <PostProgress />
                    <div id="blog" className="container my-20 xl:px-60">
                        <h1 className="mt-7 font-semibold text-blogH1">{fmtName}</h1>
                        <Fragment {...props} />
                    </div>
                </>
            );
        },
        h1: (props) => <h1 className="mt-7 font-semibold text-blogH1" {...props} />,
        h2: (props) => <h2 className="mt-6 font-medium text-blogH2" {...props} />,
        h3: (props) => <h3 className="mt-5 font-medium text-blogH3" {...props} />,
        p: (props) => <p className="mt-4 text-blogP" {...props} />,
    }}>
        {children}
    </MDXProvider>
);

export default MDX;
