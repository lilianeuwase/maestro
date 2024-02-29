import React from "react";
import { items } from "./cardsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



function CardKinya({ id, title, subtitle, photo, category, theme }) {
  return (
    <li className={`cardCard ${theme}`}>
      <div className="card-content-containerCard">
        <motion.div className="card-contentCard" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-containerCard"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image"   src={require(`../../../assets/${id}.png`)} alt="" />
          </motion.div>
          <motion.div
            className="title-containerCard"
            layoutId={`title-container-${id}`}
          >
            <span className="categoryCard">{category}</span> <br/><br/>
            <span className="h2Card">{title}</span>
            <br/><br/>
            <span className="subtitleCard">{subtitle} </span>
          </motion.div>
        </motion.div>
      </div>
      <Link to={`mentalhealth/${id}`} className={`card-open-linkCard`} />
    </li>
  );
}

export function CardList({ selectedId }) {
  return (
    <ul className="card-listCard ulCard">
      {items.map(card => (
        <CardKinya key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
