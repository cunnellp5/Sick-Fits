import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.png" />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://kit.fontawesome.com/4d5b9c9f9d.js" crossOrigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}