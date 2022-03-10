import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import Link from 'next/link'
import Accordion from '../components/Accordion/accodion'
import Document from '../pages/_document'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>De novo - Dairy</title>
        <meta name="description" content="De Novo Dairy produces nature identical, animal free proteins for optimum human nutrition." />
     <Document />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero_container}>
          <div className={styles.hero_content}>

            <h1 className={styles.title}>
              Creating
              the future
              of <Link href="/about"><a href="/">nutrition.</a></Link>
            </h1>

            <p className={styles.description}>
              De Novo Dairy produces nature identical, animal free proteins for optimum human nutrition.

            </p>
          </div>
          <div className={styles.headerImg}>
          <Link href="/about">
           <a href="">
            <Image
              src="/header-img-01.svg"
              width={700}
              height={700}
              alt='de novo illustration'
            />
           </a>
           </Link>
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
            <Link href="/about">
             <a href="">

              <Image
                src="/Jean.jpeg"
                width={300}
                height={300}
                alt='Jean'
              />
             </a>
             </Link>
            </div>
            <h2>Jean Louwrens </h2>
            <p
              style={{
                textAlign: "center"
              }}>CEO</p>
            <Accordion title="+" content=" With a background in global trade, Jean is the guy conducting the businessey side of De Novo Dairy. When he's not working on his excel spreadsheets building his vision of using these tiny little organisms to make a big huge impact on the food system, he can be found in his natural habitat, the swimming pool." />
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
            <Accordion title="+" content=" Our resident engineer, Richard keeps De Novo Dairy's millions of micro factories running at full capacity. He's a DIY enthusiast and is probably the last man on earth that still reads a physical newspaper. He was last seen trying to instruct yeast cells on the benefits of matrix management." />

          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
            <Link href="/about">
             <a href="">

              <Image
                src="/Joni Symon.jpeg"
                width={300}
                height={300}
                alt='Joni Symon'
              />
             </a>
             </Link>
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
              content=" Joni is our biochemist and protein enthusiast. Favourite pastimes include cooking up milk proteins in the lab, suspending herself from climbing walls, and desperately seeking out some decent vegan pizza." />

          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
            <Link href="/about">
            <a href="">

              <Image
                src="/Leah.jpeg"
                width={300}
                height={300}
                alt='JDr Leah Bessa'
              />
            </a>
            </Link>
            </div>
            <h2>Dr Leah Bessa</h2>
            <p style={{
              textAlign: "center"
            }}>CSO</p>
            <Accordion title="+" content=" Leah, our very own mad food scientist, began her food journey dabbling in plant and insect protein. She is now on a mission to turn our proteins into new and exciting products. She's often got Frankie at her side, and is best known for fueling the team with delicious vegan cheesecake." />

          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
            <Link href="/about">
              <a href="">
              <Image
                src="/Hendrik.jpeg"
                width={300}
                height={300}
                alt='Hendrik Els'
              />
              </a>
              </Link>
            </div>
            <h2>Hendrik Els</h2>
            <p style={{
              textAlign: "center"
            }}>Senior Research Scientist</p>
            <Accordion title="+" content=" Hendrik, our molecular biologist and yeast micro-manager is working tirelessly in the lab constantly searching for new ways to manipulate tiny life forms through coffee-fueled brainstorming sessions to find the most efficient way of getting our hosts to produce the very best animal-free proteins." />

          </div>
          <div
            className={styles.card}>
            <div className={styles.avatar}>
            <Link href="/about">
              <a href="">
              <Image
                src="/Frankie.jpeg"
                width={300}
                height={300}
                alt='Frankie'
              />
              </a>
              </Link>
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
                passHref>
                <a href="">

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
                  passHref
                >
                  <a href="">

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
                  passHref
                >
                  <a href="">

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
                  <a href="">
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
