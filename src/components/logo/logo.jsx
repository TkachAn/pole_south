import s from './logo.module.css';

export const Logo = ({ theme = 'light' }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.flex}>
      <span className={theme === 'light' ? s.h_light : s.h_dark}>Полюс</span>
			<a href="/" target="_blank"><img src="https://images2.imgbox.com/a5/10/Va53IWL6_o.png" alt="pinguin192"/></a>
        <span>Юг</span>
      </div>
    </div>
  );
};
