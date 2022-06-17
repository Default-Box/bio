import Head from 'next/head';
import Layout, { siteTitle } from '../styles/components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>👋 Hey There! I'm Default Box, I'm a professional idiot and I don't know what I'm doing.</p>
        <p>
        <a href="https://twitter.com/DefaultBox_" target="_blank">Twitter</a>
        </p>
        <p>
        <a href="https://github.com/Default-Box/" target="_blank">GitHub</a>
        </p>
        <p>
        <a href="https://github.com/Default-Box/bio" target="_blank">GitHub</a>
        </p>
      </section>
      <a href="/ihavenoideawhatimdoing">ihavenoideawhatimdoing</a>
    </Layout>
  );
}
