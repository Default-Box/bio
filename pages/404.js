import Head from 'next/head';
import Link from 'next/link';
import Layout from '../styles/components/404layout';

export default function fourofour() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <h1>404 | Looks like this doesn't exist </h1>
      <h2>
      </h2>
    </Layout>
  );
}