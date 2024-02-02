import s from './aside.module.css';

export const Aside = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h1>Aside</h1>
        <div className={s.flex}>content</div>
      </div>
    </div>
  );
};
