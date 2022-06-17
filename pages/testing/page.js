import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../styles/components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Testing</title>
      </Head>
      <h1>Testing</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}