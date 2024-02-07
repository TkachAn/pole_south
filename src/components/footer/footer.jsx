import { Link } from 'react-router-dom';
import s from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className="container">
        <div className={s.flex}>
          <div className={s.address}>
            <h2 className={s.title}>наші контакти</h2>
            <div className={s.content}>
              <p className={s.text_left}>наша адреса</p>
              <p className={s.text}>
                {' '}
                12<sup className={s.downIndex}>та</sup> Поздовжня, 63, Миколаїв
              </p>
              {/* <p className={s.text}>54028, м. Миколаїв.</p> */}
              {/* <p className={s.text}>абонентська скринька : 174</p> */}
              <hr />
              <p className={s.text_left}>наші засоби зв'язку</p>
              <p className={s.text}>тел.: +380(512)71-16-90</p>
              <p className={s.text}>e-mail: sales@polus-ug.mk.ua</p>
            </div>
          </div>
          <div className={s.socials}>
            <h2 className={s.title}>Приєднуйтесь до нас</h2>
            <div className={s.content}>
              <hr />
              <br />
              <ul className={s.flexSocial}>
                <li>
                  <Link className={s.socLink} to="https://about.instagram.com/">
                    <svg className={s.instagram}>
                      <use href='./icons/defs.svg#s-instagram'></use>
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link className={s.socLink} to="https://twitter.com/">
                    <svg className={s.twitter}>
                      <use href="./icons/defs.svg#s-twitter"></use>
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link className={s.socLink} to="https://www.facebook.com/">
                    <svg className={s.facebook}>
                      <use href="./icons/defs.svg#s-facebook"></use>
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link className={s.socLink} to="https://www.linkedin.com/">
                    <svg className={s.linkedin}>
                      <use href="./icons/defs.svg#s-linkedin"></use>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.subscription}>
            <h2 className={s.title}>subscription</h2>
            <form className={s.content}>
              <div className={s.flexSub}>
                <input
                  className={s.name}
                  type="text"
                  name="name"
                  placeholder="ваше имя"
                />
                <input
                  className={s.email}
                  type="email"
                  name="email"
                  placeholder="info@devstudio.com"
                />
                <button className={s.btnSubmit} type="submit">
                  подписаться
                </button>
              </div>
              <p></p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
