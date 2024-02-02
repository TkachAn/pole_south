import React, {useState} from "react";
import s from "./header.module.css";

export const Header = () => {
	const [isOpen, setOpen] = useState(false);
  return (
    <header className={s.wrapper}>
      <div className="container">
        <div className={s.flex}>
          <section className={s.section_logo}>
            <div className={s.logo}>polus yug</div>
          </section>
          <section className={s.section}>
						<button className={s.burger} onClick={() => setOpen(!isOpen)}>
							<div className={s.bar2}></div>
							<div className={s.bar1}></div>
							<div className={s.bar3}></div>
						</button>
            <nav className={s.navigation}>
              <ul className={isOpen ? s.burger_nav : s.flexNav}>
                <li className={s.nav_item}>
                  <a href="/">home</a>
                </li>
                <li className={s.nav_item}>
                  <a href="/products">products</a>
                </li>
                <li className={s.nav_item}>
                  <a href="/downloads">downloads</a>
                </li>
                <li className={s.nav_item}>
                  <a href="/about">abuot us</a>
                </li>
                <li className={s.nav_item}>
                  <a href="/contacts">contacts</a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </header>
  );
};

