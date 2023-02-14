import React from 'react';
import css from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/*Upper element*/}
        <div className={css.upperElements}>
          <span className="primaryText">
            Hey There,
            <br />
            I'm Duc Anh.
          </span>
          <span className="secondaryText">
            I design beautiful simple
            <br />
            things, And I love what i do{' '}
          </span>
        </div>

        <div className={css.person}>
          <img scr="./person.png" alt="" />
        </div>

        <a className={css.email} href="mailto:leleduc@gmail.com">
          leleduc@gmail.com
        </a>

        {/*Lower element*/}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">10</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
