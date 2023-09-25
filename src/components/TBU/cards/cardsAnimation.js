import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { CardHeader } from "./cardsHeader";
import { CardItem } from "./cardsItem";
import { CardList } from "./cardsList";
import { useParams } from "react-router-dom";
import "./cardsStyles.css";

export default function CardsAnimation() {
  let { id } = useParams();
  const imageHasLoaded = true;

  return (
    <div className="container" id="howCBTworks">
      {/* <AnimateSharedLayout type="crossfade"> */}
        <CardHeader />
        <CardList selectedId={id} />
        <AnimatePresence>
          {id && imageHasLoaded && <CardItem id={id} key="item" />}
        </AnimatePresence>
      {/* </AnimateSharedLayout> */}
    </div>
  );
}
