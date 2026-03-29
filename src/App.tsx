import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Service from "./service/service";

import MainBlock from "./components/main/MainBlock";
import Footer from "./components/footer/Footer";
import Favorite from "./components/favorite/Favorite";

import Product from "./components/main/main_headphones/product/product";

import Basket from "./components/basket/Basket";

// types
import { type IHeadphonesData } from "./types";

export const toggleContext = createContext<(id: string) => void>(() => {});

export function useToggleFavorite() {
  return useContext(toggleContext);
}

export default function App() {
  const [headphones, setHeadphones] = useState<IHeadphonesData[]>([]);

  const s = useMemo(() => new Service(), []);

  const toggleFavorite = (id: string) => {
    setHeadphones((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item,
      ),
    );
  };

  const toggleOnBasket = (id: string) => {
    setHeadphones((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, onBasket: !item.onBasket } : item;
      });
    });
  };
  useEffect(() => {
    s.getHeadphones().then((hd) => setHeadphones(hd));
  }, []);

  const onBasketCount = headphones.filter(
    (item) => item.onBasket === true,
  ).length;
  const favCount = headphones.filter((item) => item.isFavorite == true).length;
  console.log(onBasketCount, "qweqwerwrwet");
  return (
    <div className="container">
      <Header favCount={favCount} onBasketCount={onBasketCount} />
      <toggleContext.Provider value={toggleFavorite}>
        <Routes>
          <Route path="/" element={<MainBlock headphones={headphones} />} />

          <Route
            path="/favorite/"
            element={
              <Favorite
                headphones={headphones.filter(
                  (phone) => phone.isFavorite === true,
                )}
              />
            }
          />
          <Route
            path="/headphones/:headphonesId/"
            element={<Product toggleOnBasket={toggleOnBasket} />}
          />
          <Route
            path="/basket"
            element={
              <Basket
                product={headphones.filter((item) => item.onBasket === true)}
              />
            }
          />
        </Routes>
      </toggleContext.Provider>
      <Footer />
    </div>
  );
}
