import React, { useState } from "react";
import style from "./Card.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, deleteFavourite } from "../../redux/actions";
import { AiFillHeart } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

function Card({ title, image, slug, id }) {
  const router = useRouter();
  const [favourite, setFavourite] = useState(false);
  const product = { title, image, slug, id };
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const handleAddFavourites = (id) => {
    let findProduct = favourites.filter((element) => element.id === id);
    console.log(findProduct);
    if (findProduct.length === 0) {
      dispatch(addFavourite(product));
      setFavourite(true)
      toast.success("Se agrego de favoritos");
    } else {
      dispatch(deleteFavourite(findProduct[0]));
      setFavourite(false)
      toast.success("Se quito de favoritos");
    }
  };

  return (
    <div className={style.divCardContainer}>
      <Toaster position="top-center" />
      <div>
        <h1 className={style.title}>{title}</h1>
        <img
          onClick={() => router.push(`/card/product/${id}`)}
          src={image}
          alt={title}
          className={style.img}
        />
      </div>
      <div className={style.spanDiv}>
        <div className={style.divHeart}>
          <button
            onClick={() => handleAddFavourites(id)}
            className={`${favourite ? style.heartActive : style.heart }`}
          >
            <AiFillHeart />
          </button>
        </div>
        <span>{slug}</span>
      </div>
    </div>
  );
}

export default Card;
