// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* 在这里添加你的文档级别的头部元素 */}
                <meta charSet="UTF-8" />
              
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* 在这里添加你的文档级别的内容 */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;