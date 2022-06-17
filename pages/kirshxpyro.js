import Head from 'next/head';
import Link from 'next/link';
import Layout from '../styles/components/layout';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Kirsh x Pyro ♡</title>
      </Head>
      <h1>Kirsh x Pyro</h1>
      <Image
      src="https://c.tenor.com/yH83KX3RjjEAAAAC/floating-hearts-heart.gif"
      alt="POV: Kirsh x Pyro"
      width={500}
      height={500}
    />
    <p>A great couple ♡</p>
    <p>Foxyfox#1961, why did you make me do this</p>
      <h2>
      </h2>
    </Layout>
  );
}