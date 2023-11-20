import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';
  
  export function App() {
    return (
      <div>
        <Header />


        <Post  
          author="Hycaro Phillype" 
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eaque ducimus soluta atque? Laboriosam saepe porro praesentium minus nihil consectetur amet consequatur, quidem reprehenderit cum quis iste tenetur hic harum!"
        />
        <Post
          author="Satoro Gojo"
          content="O animal é apelão de mais!"
        />

      </div>
    )
  }

