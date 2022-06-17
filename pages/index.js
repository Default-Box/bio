import Head from 'next/head';
import Layout, { siteTitle } from '../styles/components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>👋 Hey There! I'm Default Box, I'm a professional idiot and I don't know what I'm doing.</p>
        <p>
        <p>Check out <a href="https://twitter.com/DefaultBox_" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
        </p>
        <p>
        <p>Check out <a href="https://github.com/Default-Box/" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </p>
        <p>
        <p>Check out <a href="https://github.com/Default-Box/bio" target="_blank" rel="noopener noreferrer">My Code</a>.</p>
        </p>
      </section>

      <Link href="/ihavenoideawhatimdoing">
        <a>ihavenoideawhatimdoing</a>
      </Link>
      <footer>I actually have no idea what I'm doing</footer>
      <script src="https://default-box.instatus.com/widget/script.js">
</script>
    </Layout>
  );
}
