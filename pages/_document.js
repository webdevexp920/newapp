import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();

    return { html, head, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* <!-- set the encoding of your site --> */}
          <meta charset="UTF-8" />
          {/* set the viewport width and initial-scale on mobile devices */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Eclat Capital</title>
          {/* include the site google fonts */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300%7CMerriweather:300%7COxygen:300,400,700%7CRoboto:300,400,500,700&display=swap" />
          {/* include the site stylesheet */}
          <link rel="stylesheet" href="css/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}