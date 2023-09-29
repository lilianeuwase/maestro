import React from "react";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='mainHome'>
      <div className='containerHome'>
        <div className='rowHome'>
          <h2>
            <div className='lineHome mt-16'>
              <span>Welcome to Maestro Mind Lab</span>
            </div>
            <div className='lineHome'>
              <span>We are here to help.</span>
            </div>
          </h2>
          <div className='btn-rowHome mt-4'>
            <a href='/aboutus'>
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
