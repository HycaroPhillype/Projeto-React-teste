import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/wandersonDeve.png',
      name: 'Wanderson Santos',
      role: 'CTO @ Rocekeseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-11-27 20:57:00'),

  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/icaromourao.png',
      name: 'Icaro Mourão',
      role: 'Educator  @Rocekeseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'},

      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-11-15 20:57:00'),
    
  },
];

  export function App() {
    return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
               <Post
               key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>

      </div>
    )
  }

