import Head from 'next/head'

export const siteTitle = "Ivan Koop / Full Stack Developer";

export default function Header() {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Full Stack Developer, Experienced with a wide range of frontend and backend technologies,
          specialized on Frontend development."
      />
      {/* TODO: find this */}
      {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
