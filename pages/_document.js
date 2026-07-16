import { Html, Head, Main, NextScript } from 'next/document'

// Runs before first paint to set the theme from the system preference, so
// dark-mode visitors never see a flash of the light palette (the values live
// in styles/global.css keyed off [data-theme]).
const noFlashTheme = `(function(){try{var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
