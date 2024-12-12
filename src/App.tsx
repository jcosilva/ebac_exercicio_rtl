import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn11.bigcommerce.com/s-cy4lua1xoh/images/stencil/1280x1280/products/16493/448680/52952d6b-0dbe-509b-a8bc-11259b0a445f__91637.1722462209.jpg?c=1">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
