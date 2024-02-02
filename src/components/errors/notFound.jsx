import { useLocation } from 'react-router-dom';
import s from './nf.module.css';

export const NF404 = ({ error = 'Page Not Found' }) => {
  console.log('useLocation: ', useLocation());
  const location = useLocation();
  return (
    <article className={s.article}>
      <div className="container">
        <h1>ERRORS</h1>
        {/* <div className={s.container}> */}
				<div className={s.stub}>

				</div>
        <section className={s.section}>
          <p className={s.info}>Сторінка: {location.pathname}</p>
          <h1>{error}</h1>
          <div className={s.thumb}></div>
        </section>
      </div>
    </article>
  );
};
