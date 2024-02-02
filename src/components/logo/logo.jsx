import s from './logo.module.css';

export const Logo = ({theme="light"}) => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h1 className={theme === "light"? s.h_light:s.h_dark}>Logo</h1>
        <div className={s.flex}>Logo<span>type</span></div>
      </div>
    </div>
  );
};
