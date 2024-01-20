import React from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
// import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Motive",
    title: "A Glimpse into Our Purpose",
    img: "Colorflag",
    link: "/motive",
  },
  {
    id: 2,
    subtitle: "Free Space",
    title: "Breaking the Chains of Depression",
    img: "howareyou",
    link: "/space",
  },
  {
    id: 3,
    subtitle: "Relaxation",
    title: "Easing Anxiety, Embracing Calm",
    img: "Relaxation",
    link: "/relax",
  },
];

const CasesKinya = () => {
  return (
    <section className="casesHome">
      <div className="container-fluidHome">
        {/* <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div> */}
        <div className="rowHome">
          {caseStudies.map((caseItem) => (
            <NavLink to={caseItem.link} style={{ textDecoration: "none" }}>
              <div className="caseHome" key={caseItem.id}>
                <div className="case-detailsHome">
                  <span>{caseItem.subtitle}</span>

                  <h2>{caseItem.title}</h2>
                </div>
                <div className="case-imageHome">
                  <img
                    src={require(`../../../assets/${caseItem.img}.jpeg`)}
                    alt={caseItem.title}
                  />{" "}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesKinya;
