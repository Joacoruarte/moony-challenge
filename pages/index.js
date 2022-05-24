import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../redux/actions";
import Cards from "../components/Cards/Cards";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const dispatch = useDispatch();
  const allInfo = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Moony-app Home</title>
        <meta name="description" content="Moony-app" />
        <link rel="icon" href="/moony.jpg" />
      </Head>
      <main>
        <Navbar />
        {allInfo && <Cards elements={allInfo} />}
      </main>
    </div>
  );
}
