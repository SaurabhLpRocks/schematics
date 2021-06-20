import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import MyMdComp from './MyMdComp/MyMdComp';
import star from './star.svg';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to rs!</h1>
      </header>
      <main>
        <MyMdComp />
      </main>
    </div>
  );
}

export default App;
