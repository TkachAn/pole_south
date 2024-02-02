import { Link } from 'react-router-dom';
import s from './map.module.css';

export const ContactMap = () => {
  return (
    <article className="container">
      <section className={s.advantages}>
        <h1 className={s.a}>Контактна інформація</h1>
        <br/>

        <ul className={s.list}>
          <li className={s.feature}>
            <h2 className={s.titleGrup}>Наши контакти</h2>
            <br />

            <ul className={s.p_flex}>
              <li className={s.p_start}>мобільний Марини:</li>
              <li itemprop="telephone" content="+380505032464">
                +380 50 503 2464
              </li>
            </ul>
            <ul className={s.p_flex}>
              <li className={s.p_start}>мобільний Романа :</li>
              <li itemprop="telephone" content="+380932718295">
                +380 93 271 8295
              </li>
            </ul>
            <ul className={s.p_flex}>
              <li className={s.p_start}>телефони в офісі:</li>
              <li itemprop="telephone">+380 51 271 1690</li>
            </ul>
            <ul className={s.p_flex}>
              <li className={s.p_start}></li>
              <li className={s.secraw}>телефони в офісі:</li>

              <li itemprop="telephone">+380 51 271 3084</li>
            </ul>
            <ul className={s.p_flex}>
              <li className={s.p_start}>факс:</li>
              <li itemprop="faxNumber">+380 51 276 5275</li>
            </ul>
            <ul className={s.p_flex}>
              <li className={s.p_start}>e-mail:</li>
              <Link to="mailto:sales@polus-ug.mk.ua" itemprop="email">
                sales@polus-ug.mk.ua
              </Link>
            </ul>
          </li>

          <li className={s.feature}>
            <h2 className={s.titleGrup}>Наша адреса</h2>
            <br />

            <ul className={s.p_flex}>
              <li itemprop="streetAddress">вулиця:</li>
              <li>12-та Поздовжня,  63</li>
            </ul>

            <ul className={s.p_flex}>
							<li>місто:</li>
              <li itemprop="addressLocality"> Миколаїв,</li>
							<li>індекс:</li>
              <li itemprop="postalCode">54028,</li>
            </ul>
            <ul className={s.p_flex}>
              <li itemprop="addressRegion">Миколаївська</li>
              <li>область</li>
              <li itemprop="addressCountry">Україна</li>
            </ul>
            <ul className={s.p_flex}>
              абонентська скринька :<li itemprop="postOfficeBoxNumber">174</li>
            </ul>
            <ul className={s.p_flex}>
              назва :<b itemprop="name"> Компанія Полюс-Юг</b>
            </ul>
          </li>
        </ul>
      </section>
      <section className={s.mapTitle}>
        <div className={s.invisible}>
          <br />
          <img
            className={s.invisible}
            itemprop="logo"
            src="https://images.prom.ua/461512790_w200_h100_tov-polyus-yug-kompani.jpg"
            alt="Логотип Компании Полюс-Юг"
          />
          <a
            className={s.invisible}
            itemprop="url"
            href="http://polus-ug.mk.ua"
          >
            polus-ug.mk.ua
          </a>
        </div>

        <div className={s.mapCont}>
          <h2>Наше місцезнаходження</h2>
          <br />
          <div className={s.wrapperMap}>
            <iframe
              className={s.map}
              title="contact_map"
              id="map"
              src="https://www.google.com/maps/d/embed?mid=1MGQRQdOwga_FRx8SXc18ZJquaMU"
            ></iframe>
          </div>
          <p>
            <small>
              Подивитись
              <a
                target="blank"
                href="https://www.google.com/maps/d/embed?mid=1MGQRQdOwga_FRx8SXc18ZJquaMU"
              >
                Компанія Полюс-Юг
              </a>
              на великий мапі
            </small>
          </p>
        </div>
      </section>
    </article>
  );
};
