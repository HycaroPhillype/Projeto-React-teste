import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

  

  export function App() {
    return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          
          <Sidebar />
          <main>
            <Post  
              author="Edimara Lopes" 
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eaque ducimus soluta atque? Laboriosam saepe porro praesentium minus nihil consectetur amet consequatur, quidem reprehenderit cum quis iste tenetur hic harum!"
            />
            <Post
              author="Satoro Gojo"
              content="O animal é apelão de mais!"
            />
          </main>
        </div>

      </div>
    )
  }

