import React from "react";
import style from "./card.module.css";
export default function Card({ title, image, price }) {
  return (
    <div className={style.mainContainer}>
      <div className={style.imageContainer}>
        <img width={250} height={250} className={style.image} src={image} />
      </div>
      <hr className={style.line} />
      <div className={style.titlePriceConatiner}>
        <div className={style.title}>{title}</div>
        <div className={style.price}>₹{price}</div>
      </div>
    </div>
  );
}
