import React from "react";
import { NavLink } from "react-router-dom";
// import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
// import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Intego",
    title: "Bike ku Ntego Yacu",
    img: "Colorflag",
    link: "/kinyamotive",
  },
  {
    id: 2,
    subtitle: "Umwanya Wisanzuye",
    title: "Kurwanya Agahinda Gakabije",
    img: "howareyou",
    link: "/kinyaspace",
  },
  {
    id: 3,
    subtitle: "Kuruhuka",
    title: "Kugabanya Umuhangayiko",
    img: "Relaxation",
    link: "/kinyarelax",
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
