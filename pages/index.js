import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PopDishes from "../components/PopDishes";
import SpecOffer from "../components/SpecOffer";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home({ results, testimonial }) {
  return (
    <div>
      <Head>
        <title>Fudo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Nav />
        <Header />
        <SpecOffer />
        <PopDishes results={results} />
        <Testimonial testimonial={testimonial} />
        <NewsLetter />
        <Footer />
      </body>
    </div>
  );
}

// https://gunter-food-api.herokuapp.com/pizza?_limit=6

export async function getStaticProps() {
  const request = await fetch(
    ` https://gunter-food-api.herokuapp.com/pizza?_limit=6`
  ).then((res) => res.json());

  const testimonial = await fetch(
    `https://testimonialapi.toolcarton.com/api`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
      testimonial: testimonial,
    },
  };
}
