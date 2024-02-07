import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './header.module.css';
import { Logo } from 'components/logo/logo';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={s.wrapper}>
      <div className="container">
        <div className={s.flex}>
          <div className={s.logo}>
            <Link to="/" end className={s.section_logo}>
              <Logo/>
            </Link>
          </div>
          <section className={s.section}>
            <button className={s.burger} onClick={() => setOpen(!isOpen)}>
              <div className={isOpen ? s.bar2O : s.bar2}></div>
              <div className={isOpen ? s.bar1O : s.bar1}></div>
              <div className={isOpen ? s.bar3O : s.bar3}></div>
            </button>
            <nav className={s.navigation}>
              <ul className={isOpen ? s.burger_nav : s.flexNav}  onClick={() => setOpen(false)}>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink} to="/">
                    home
                  </NavLink>
                </li>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink} to="/products">
                    products
                  </NavLink>
                </li>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink} to="/downloads">
                    downloads
                  </NavLink>
                </li>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink} to="/about">
                    abuot us
                  </NavLink>
                </li>
                <li className={s.nav_item}>
                  <NavLink className={s.NavLink} to="/contacts">
                    contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </header>
  );
};
