import s from "./map.module.css";

export const ContactMap = () => {
  return (
    <article className="container">
      <section class={s.advantages}>
        <h1 class={s.a}>Контактна інформація</h1><br />

        <ul class={s.advantagesList}>
          <li class={s.advantagesFeature}>
            <div class={s.advantagesPos}>
              <h2 class={s.advantagesTitleGrup}>Наши контакти</h2><br />
              <div class={s.advantagesText}>
                <p>
                  мобільний Марини:
                  <span itemprop="telephone" content="+380505032464">
                    +380 50 503 2464
                  </span>
                </p>
                <p>
                  мобільний Романа :
                  <span itemprop="telephone" content="+380932718295">
                    +380 93 271 8295
                  </span>
                </p>
                <p>
                  телефони в офісі:
                  <span itemprop="telephone">+380(512)71-16-90</span>
                </p>
                <p>
                  <span className={s.secraw}>телефони в офісі:</span>

                  <span itemprop="telephone">+380(512)71-30-84</span>
                </p>
                <p>
                  факс:
                  <span itemprop="faxNumber">+380(512)76-52-75</span>
                </p>
                <p>
                  e-mail:
                  <a href="mailto:sales@polus-ug.mk.ua" itemprop="email">
                    sales(at)polus-ug.mk.ua<p></p>
                  </a>
                </p>
                <p className={s.invisible}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora quaerat illum excepturi odit doloremque, vitae quasi
                  corporis commodi nisi quae perspiciatis amet consectetur
                  reprehenderit inventore laborum facilis quia mollitia
                  exercitationem eaque rerum dignissimos maiores, quos iure
                  blanditiis. Dolorem, nam? Aliquid sequi molestias vel, tenetur
                  maxime pariatur? Molestiae libero cum quidem.
                </p>
              </div>
            </div>
          </li>

          <li class={s.advantagesFeature}>
            <div class={s.advantagesPos}>
              <h2 class={s.advantagesTitleGrup}>Наша адреса</h2><br />
              <div class={s.advantagesText}>
                <p>
                  <span itemprop="streetAddress">вулиця 12-та Поздовжня, 63</span>
                </p>

                <p>
                  <span itemprop="addressRegion">Миколаївська</span>&nbsp;обл.
                </p>
                <p>
                  <span itemprop="postalCode">54028</span>,&nbsp;
                  <span itemprop="addressLocality">місто  Миколаїв</span>,&nbsp;
                  <span itemprop="addressCountry">Україна</span>.
                </p>
                <p>
                  абонентська скринька :&nbsp;
                  <span itemprop="postOfficeBoxNumber">174</span>
                </p>
								<p>
                  назва :<b itemprop="name"> Компанія Полюс-Юг</b>
                </p>
                
                <p className={s.invisible}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora quaerat illum excepturi odit doloremque, vitae quasi
                  corporis commodi nisi quae perspiciatis amet consectetur
                  reprehenderit inventore laborum facilis quia mollitia
                  exercitationem eaque rerum dignissimos maiores, quos iure
                  blanditiis. Dolorem, nam? Aliquid sequi molestias vel, tenetur
                  maxime pariatur? Molestiae libero cum quidem.
                </p>
              </div>
            </div>
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
        <a className={s.invisible} itemprop="url" href="http://polus-ug.mk.ua">
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
