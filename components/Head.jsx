import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Wahab Sharif is an avid web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Wahab Sharif, wahab, sharif, web developer portfolio, wahab web developer, wahab developer, mern stack, Wahab Sharif portfolio, vscode-portfolio, front end developer"
      />
      <meta property="og:title" content="Wahab Sharif's Portfolio" />
      <meta
        property="og:description"
        content="A Web developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Wahab Sharif",
};
