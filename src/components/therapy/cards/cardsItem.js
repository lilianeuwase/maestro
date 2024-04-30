import React from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./cardsData";

export function CardItem({ id }) {
  const { category, title, photo, subtitle } = items.find(
    (item) => item.id === id
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlayCard"
      >
        <Link to="/mentalhealth" />
      </motion.div>
      <div className="card-content-containerCard openCard">
        <motion.div
          className="card-contentCard"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="card-image-containerCard"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="card-imageCard"
              src={require(`../../../assets/${id}.png`)}
              alt=""
            />
          </motion.div>
          <motion.div
            className="title-containerCard"
            layoutId={`title-container-${id}`}
          >
            <span className="categoryCard">{category}</span><br/><br/>
            <span className="h2Card">{title}</span>
          </motion.div>
          <motion.div className="content-containerCard" animate>
            {/* <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            /> */}
            <span className="subtitleCard">{subtitle} </span>
            
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
