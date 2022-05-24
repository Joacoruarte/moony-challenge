import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import style from "./OneProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import {
  oneProduct,
  clearProduct,
  addFavourite,
  deleteFavourite,
} from "../../redux/actions";
import { AiFillHeart } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

function OneProduct() {
  const router = useRouter();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.oneProduct);
  const favourites = useSelector((state) => state.favourites);
  const [favourite, setFavourite] = useState(false);

  const handleAddFavourites = () => {
    let findProduct = favourites.find(
      (element) => element.id === router.query.id
    );
    if (findProduct) {
      console.log(product);
      dispatch(deleteFavourite(product));
      setFavourite(false);
      toast.success("Se quito de favoritos");
    } else {
      console.log(product);
      dispatch(addFavourite(product));
      setFavourite(true);
      toast.success("Se agrego a favoritos");
    }
  };

  useEffect(() => {
    dispatch(oneProduct(router.query.id));

    return function borrar() {
      dispatch(clearProduct());
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Toaster position="top" />
      {product && (
        <div className={style.container}>
          <div className={style.containerCenter}>
            <h1>{product.title}</h1>
            <img
              src={`${product.image}?random=${Math.floor(Math.random() * 10)}`}
            />
            <div className={style.divHeart}>
              <button
                onClick={handleAddFavourites}
                className={`${favourite ? style.heartActive : style.heart}`}
              >
                <AiFillHeart />
              </button>
            </div>
            <p>{product.article}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OneProduct;
