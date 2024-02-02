import s from './header.module.css';

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h1>Header</h1>
        <div className={s.flex}>content</div>
      </div>
    </div>
  );
};
