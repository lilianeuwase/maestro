import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import "./datesStyles.css";
import { CardHeader } from "../cards/cardsHeader";

function Content({ day, disabled }) {
  return (
    <motion.h1
      className="titleDates"
      layoutId="title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      {day}
    </motion.h1>
  );
}

function ExpandedCard({ children, onCollapse }) {
  return (
    <>
      <motion.div
        className="cardDates expandedDates"
        layoutId="expandable-card"
        onClick={onCollapse}
      >
        {children}
      </motion.div>
      <motion.p
        className="cardDates expandedDates secondaryDates"
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: "6rem" }}
        animate={{ opacity: 1, top: "3rem" }}
      >
        This step is clear
      </motion.p>
    </>
  );
}

function CompactCard({ children, onExpand, disabled }) {
  return (
    <motion.div
      className="cardDates compactDates"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
    </motion.div>
  );
}

function DateButton({ day, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <div className="card-containerDates">
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseDate} day={day}>
            <Content day={day} disabled={disabled} />
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
            <Content day={day} disabled={disabled} />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default function Dates() {
  const [expandedDay, setCollapsedDay] = useState();
  const days = [1, 2, 3, 4, "n"];

  return (
    <div className="container">
      <CardHeader/>
      <div className="datesDates">
        {days.map(day => (
          <DateButton
            key={day}
            day={day}
            disabled={expandedDay !== day && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(day)}
            onCollapse={() => setCollapsedDay()}
          />
        ))}
      </div>
    </div>
  );
}
