import {Component} from "react";
import Head from 'next/head';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    window.location.replace(this.props.props.new_url);
  }

  render() {
    return (
      <div>
        <Head>
          <meta property="og:title" content="Tiêu đề nè" />
          <meta property="og:description" content="Mô tả nè" />
          <meta property="og:image" content="https://i1-vnexpress.vnecdn.net/2023/12/12/2022-10-23t000000z-1397985151-3306-2777-1702314783.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=AZPQj6g6zlhPdPuxXLgfDQ" />
          <meta property="og:image:secure_url" content="https://i1-vnexpress.vnecdn.net/2023/12/12/2022-10-23t000000z-1397985151-3306-2777-1702314783.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=AZPQj6g6zlhPdPuxXLgfDQ" />
        </Head>
      </div>
    );
  }
}
export default App;

App.getInitialProps = async (context) => {
  let path_origin =context.router.asPath
  let replace_domain = process.env.url;
  let new_url = replace_domain+path_origin;
  return {
    props: {
      // parsedMetaTags,
      new_url
    },
  };
}
