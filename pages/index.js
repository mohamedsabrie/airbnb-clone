import Head from "next/head";
import Banner from "../components/Banner";
import CardMedium from "../components/CardMedium";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargCard from "../components/LargCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard
                key={item.img}
                location={item.location}
                img={item.img}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 ">
            {cardData.map(({ img, title }) => (
              <CardMedium key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description =  "Wishlists Curated by Airbnb"
        buttonText ="Get Inspired"
        />
      </main>

      <Footer />

    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
