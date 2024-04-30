import React from "react";
import { ReactComponent as RightArrow } from "../../../assets/arrow-right.svg";

const BannerKinya = () => {
  return (
    <section className='mainHome'>
      <div className='containerHome'>
        <div className='rowHome'>
          <h2>
            <div className='lineHome mt-16'>
              <span>Ikaze Kuri Maestro Mind Lab </span>
            </div>
            <div className='lineHome'>
              <span>Turi Hano Ngo Tugufashe</span>
            </div>
          </h2>
          <div className='btn-rowHome mt-4'>
            <a href='/'>
              English <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerKinya;
