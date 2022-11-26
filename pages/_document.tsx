import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body className="bg-light-100 dark:bg-dark-900 text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
