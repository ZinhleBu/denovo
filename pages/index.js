import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>De novo - Dairy</title>
        <meta name="description" content="De Novo Dairy produces nature identical, animal free proteins for optimum human nutrition." />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/monument-extended?styles=28544" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className={styles.main}>

        <div className={styles.hero_container}>
          <div className={styles.hero_content}>

            <h1 className={styles.title}>
              Creating
              the future
              of <a href="https://nextjs.org">nutrition.</a>
            </h1>

            <p className={styles.description}>
              De Novo Dairy produces nature identical, animal free proteins for optimum human nutrition.

            </p>
          </div>
          <div className={styles.headerImg}>
            <Image
              src="/header-img.svg"
              width={700}
              height={700}

            />
          </div>
        </div>
        <div className={styles.gridTitle}>
          <p>Meet the Team</p>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <div className={styles.avatar}></div>
            <h2>Name & Surname &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
          <div className={styles.avatar}></div>
            
            <h2>Name & Surname &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <div className={styles.avatar}></div>
            
            <h2>Name & Surname &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <div className={styles.avatar}></div>
          
            <h2>Name & Surname &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footer_content}>
            <div className={styles.footer_img}>

            <Link href="/" passHref>
            
              <Image className={styles.logo} src="/Asset 1.png" alt='de novo logo' width={170} height={80} />
            </Link>
            </div>
            <div className={styles.footer_form}>
              <Form />
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <ul>
              <li>
                <Link href="/">Twitter &rarr;</Link>
              </li>
              <li>
                <Link href="/">Linkedin &rarr;</Link>
              </li>
              <li>
                <Link href="/">Gmail &rarr;</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
