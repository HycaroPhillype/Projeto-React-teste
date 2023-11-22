import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';
  

  export function App() {
    return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          
          <Sidebar />
          <main>
            <Post  
              author="Hycaro Phillype" 
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

