import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-light-100 dark:bg-dark-900 text-dark-900 dark:text-light-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
