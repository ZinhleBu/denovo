import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import Link from 'next/link'
import Accordion from '../components/Accordion/Accodion'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>De novo - Dairy</title>
        <meta name="description" content="De Novo Dairy produces nature identical, animal free proteins for optimum human nutrition." />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/monument-extended?styles=28544" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x62" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x36" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero_container}>
          <div className={styles.hero_content}>
            <h1 className={styles.title}>
              Creating
              the future
              of <Link href="/about">
                <a>nutrition.</a>
              </Link>
            </h1>
            <p className={styles.description}>
              De Novo Dairy produces nature identical, animal free proteins for optimum human nutrition.
            </p>
          </div>
          <div className={styles.headerImg}>
            <Image
              src="/header-img-01.svg"
              width={700}
              height={700}
              alt='de novo illustration'
            />
          </div>
        </div>
        <div className={styles.gridTitle}>
          <p style={{
            textAlign: "center"
          }}>Meet the Team</p>
        </div>
        <div className={styles.grid}>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src="/Jean.jpeg"
                width={300}
                height={300}
                alt='Jean'
              />
            </div>
            <h2>Jean Louwrens </h2>
            <p
              style={{
                textAlign: "center"
              }}>CEO</p>
            <Accordion
              style={{
                fontFamily: 'Monument Extended - light'
              }}
              title="+" content="<p>With a background in global trade, Jean is the guy conducting the businessey side of De Novo Dairy. When he's not working on his excel spreadsheets building his vision of using these tiny little organisms to make a big huge impact on the food system, he can be found in his natural habitat, the swimming pool.</p>" />
          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src="/Richard.jpeg"
                width={300}
                height={300}
                alt='Richard'
              />
            </div>
            <h2>Richard Grieves </h2>
            <p style={{
              textAlign: "center"
            }}>COO</p>
            <Accordion
              style={{
                fontFamily: 'Monument Extended - light'
              }}
              title="+" content="<p> Our resident engineer, Richard keeps De Novo Dairy's millions of micro factories running at full capacity. He's a DIY enthusiast and is probably the last man on earth that still reads a physical newspaper. He was last seen trying to instruct yeast cells on the benefits of matrix management.</p>" />
          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src="/Joni Symon.jpeg"
                width={300}
                height={300}
                alt='Joni Symon'
              />
            </div>
            <h2>Joni Symon</h2>
            <p
              style={{
                textAlign: "center"
              }}>
              Head of Protein R&D
            </p>
            <Accordion
              title="+"
              content=" <p>Joni is our biochemist and protein enthusiast. Favourite pastimes include cooking up milk proteins in the lab, suspending herself from climbing walls, and desperately seeking out some decent vegan pizza.</p>" />
          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src="/Leah.jpeg"
                width={300}
                height={300}
                alt='JDr Leah Bessa'
              />
            </div>
            <h2>Dr Leah Bessa</h2>
            <p style={{
              textAlign: "center"
            }}>CSO</p>
            <Accordion title="+" content="<p>Leah, our very own mad food scientist, began her food journey dabbling in plant and insect protein. She is now on a mission to turn our proteins into new and exciting products. She's often got Frankie at her side, and is best known for fueling the team with delicious vegan cheesecake.</p>" />
          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src="/Hendrik.jpeg"
                width={300}
                height={300}
                alt='Hendrik Els'
              />
            </div>
            <h2>Hendrik Els</h2>
            <p style={{
              textAlign: "center"
            }}>Senior Research Scientist</p>
            <Accordion title="+" content="<p>Hendrik, our molecular biologist and yeast micro-manager is working tirelessly in the lab constantly searching for new ways to manipulate tiny life forms through coffee-fueled brainstorming sessions to find the most efficient way of getting our hosts to produce the very best animal-free proteins.</p> " />
          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src="/Frankie.jpeg"
                width={300}
                height={300}
                alt='Frankie'
              />

            </div>
            <h2>Frankie</h2>
            <p style={{
              textAlign: "center"
            }}>CoS</p>
            <Accordion title="+" content=" <p>Our chief of staff is the pawfect employee. Key responsibilities include setting the nap time schedule and having the best haircut on the team.</p>" />

          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footer_content}>
            <div className={styles.footer_img}>

              <Link
                href="/"
              >
                <a>

                  <Image className={styles.logo} src="/Asset 1.png" alt='de novo logo' width={170} height={80} />
                </a>
              </Link>
            </div>
            <div className={styles.footer_form}>
              <Form />
            </div>
          </div>
          <div className={styles.footer_bottom}>
            <ul>
              <li>
                <Link
                  href="/"
                >
                  <a>
                    <Image
                      src="/twitter.png"
                      width={30}
                      height={30}
                      alt='twitter'
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                >
                  <a >
                    <Image
                      src="/instagram.png"
                      width={30}
                      height={30}
                      alt='instagram'
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                >
                  <a>
                    <Image
                      src="/mail.webp"
                      width={30}
                      height={30}
                      alt='mail'
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
