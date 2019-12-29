import React from 'react';
import readingTime from 'reading-time';
import Head from 'next/head';

import markedHighlight from '../../utils/markedHighlight';
import formatDate from '../../utils/formatDate';

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

export const unstable_getStaticPaths = async () => {
  const entries = await client.getEntries({
    content_type: 'post'
  });

  return entries.items.map(item => `/blog/${item.fields.slug}`);
};

export const unstable_getStaticProps = async ({ params }) => {
  const { slug } = params;

  const entries = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug
  });

  return {
    props: {
      post: entries.items[0]
    }
  };
};

const Post = ({ post }) => {
  if (!post) {
    return (
      <div className="error">
        Post Not Found
        <style jsx>
          {`
            .error {
              height: 100%;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </div>
    );
  }

  const timeToRead = readingTime(post.fields.body);

  return (
    <div className="post">
      <Head>
        <title>{post.fields.meta.fields.title || ''}</title>
        <meta
          name="description"
          content={post.fields.meta.fields.description}
        />
      </Head>
      <h1 className="post-title">{post.fields.title}</h1>
      <p className="post-meta">
        {formatDate(post.sys.createdAt)} · {timeToRead.text}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: markedHighlight(post.fields.body)
        }}
      ></div>

      <style jsx>
        {`
          .post-title {
            font-size: 2.8rem;
            line-height: initial;
            margin-bottom: 0;
            color: #f7ff1a;
          }

          .post-meta {
            color: #b3b2b2;
            margin-top: 0;
            font-size: 0.8rem;
            margin-bottom: 40px;
          }
        `}
      </style>
    </div>
  );
};

export default Post;
