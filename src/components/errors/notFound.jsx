import { useParams, useLocation } from 'react-router-dom';
import s from './nf.module.css';

export const NF404 = ({ error = 'Not Found' }) => {
  console.log('useParams: ', useParams());
  console.log('useLocation: ', useLocation());
  return (
    <>
      <div className="container">
        <article>
          <h1>ERRORS</h1>
          <section>
            <h2>{error}</h2>
						{/* <p>useParams: {useParams()}</p>
						<p>useLocation: {useLocation()}</p> */}
            <div className={s.thumb}></div>
          </section>
        </article>
      </div>
    </>
  );
};
