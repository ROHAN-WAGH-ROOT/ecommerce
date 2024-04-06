import React, { Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { axiosFetch } from "./Apis/api";
import style from "./info.module.css";
import { Rating } from "@mui/material";

export function Info(props) {
  const location = useLocation();
  let a = location.search.split("?")[1];
  const [data, setData] = useState();

  useEffect(() => {
    handlegetDetails();
  }, [location]);

  const handlegetDetails = async () => {
    try {
      await axiosFetch.get(`/products/${a}`).then((res) => {
        setData(res?.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>

      <div className={style.container}>
        <div className={style.images}>
          {data?.images &&
            data.images.map((ele) => {
              return (
                <Suspense fallback={"...Loading"}>
                  <img width={250} src={ele} alt={""} />;
                </Suspense>
              );
            })}
        </div>
        <div className="ml-4">
          <div className={style.title}>{data?.title}</div>
          <div className={style.description}>{data?.description}</div>
          <div className={style.price}>Price: ₹{data?.price}</div>
          <div className={style.discountPercentage}>
            Discount: {data?.discountPercentage}%
          </div>
          <div className={style.rating}>
            Rating: {data?.rating}
            <Rating
              name="half-rating"
              defaultValue={Number(data?.rating)}
              value={Number(data?.rating)}
              precision={0.5}
            />
          </div>
          <div className={style.brand}>Brand: {data?.brand}</div>
          <div className={style.category}>Category: {data?.category}</div>
        </div>
      </div>
    </div>
  );
}
