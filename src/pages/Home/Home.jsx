import s from './Home.module.css';

export default function Home() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Welcome! Sign up or sign in, please!
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
