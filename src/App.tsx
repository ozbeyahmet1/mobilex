import styles from './App.module.css';
import HomepageView from './views/homepage';

export function App() {
  return (
    <>
      <main className={styles.main}>
        <HomepageView />
      </main>
    </>
  );
}
