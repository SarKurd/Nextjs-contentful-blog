import React from 'react';
import Link from 'next/link';
import readingTime from 'reading-time';
import formatDate from '../../utils/formatDate';
import Head from 'next/head';

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

export const unstable_getStaticProps = async () => {
  const entries = await client.getEntries({
    content_type: 'post'
  });

  return { props: { posts: entries.items } };
};

const index = ({ posts }) => {
  return (
    <div className="blog">
      <Head>
        <title>{'A blog by Grendizer'}</title>
        <meta name="description" content={'UFO Robot Grendizer'} />
      </Head>
      <h1>Blog</h1>
      {posts.length > 0 ? (
        posts.map(post => {
          const timeToRead = readingTime(post.fields.body);

          return (
            <div className="post" key={post.sys.id}>
              <Link href="/blog/[slug]" as={`/blog/${post.fields.slug}`}>
                <a>
                  <h2 className="post-title">{post.fields.title}</h2>
                </a>
              </Link>
              <div className="post-meta">
                {formatDate(post.sys.createdAt)} - {timeToRead.text}
              </div>
              <p className="post-description">
                {post.fields.meta.fields.description}
              </p>
            </div>
          );
        })
      ) : (
        <div>There are no posts</div>
      )}

      <style jsx>
        {`
          h1 {
            font-size: 3rem;
          }

          .post {
            margin-bottom: 40px;
          }
          .post-title {
            margin-bottom: 0;
            font-size: 2rem;
            line-height: initial;
            color: #f7ff1a;
          }
          .post-meta {
            color: #b3b2b2;
            font-size: 0.8rem;
            margin: 0;
          }

          .post-description {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  );
};

export default index;
