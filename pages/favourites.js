import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards/Cards";
import Navbar from "../components/Navbar/Navbar";

export default function Favourites() {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <Head>
        <title>Moony-app Favourites</title>
        <meta name="description" content="Moony-app Favourites" />
        <link rel="icon" href="/moony.jpg" />
      </Head>
      <main>
        <Navbar />
        {favourites.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>No tienes favoritos aun.</h1>
        ) : (
          <Cards elements={favourites} />
        )}
      </main>
    </div>
  );
}
