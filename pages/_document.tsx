import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-dark-900 text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
