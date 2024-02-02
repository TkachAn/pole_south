import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./header.module.css";

export const Header = () => {
	const [isOpen, setOpen] = useState(false);
  return (
    <header className={s.wrapper}>
      <div className="container">
        <div className={s.flex}>
          <Link to="/" end className={s.section_logo}>
            {/* <div className={s.logo}> */}
						<h3>Полюс Юг</h3>
						{/* </div> */}
          </Link>
          <section className={s.section}>
						<button className={s.burger} onClick={() => setOpen(!isOpen)}>
							<div className={s.bar2}></div>
							<div className={s.bar1}></div>
							<div className={s.bar3}></div>
						</button>
            <nav className={s.navigation}>
              <ul className={isOpen ? s.burger_nav : s.flexNav}>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink} to="/">home</NavLink>
                </li>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink} to="/products">products</NavLink>
                </li>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink}  to="/downloads">downloads</NavLink>
                </li>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink}  to="/about">abuot us</NavLink>
                </li>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink}  to="/contacts">contacts</NavLink>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </header>
  );
};

