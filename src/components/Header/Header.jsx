import React, { useState } from 'react';
import css from './Header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Duc Anh</div>

        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">EXPERIENCE</a>
          </li>
          <li>
            <a href="">PORTFOLIO</a>
          </li>
          <li>
            <a href="">TESTIMONIALS</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+84 (918) 983 869</p>
            <BiPhoneCall size={'40px'} />
          </li>
        </ul>

        {/* only for medium and small screen*/}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
