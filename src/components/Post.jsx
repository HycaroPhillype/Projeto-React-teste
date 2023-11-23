import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/HycaroPhillype.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernades</strong>
                        <span>Web Delevoper</span>
                    </div>
                </div>

                <time title='23 de Novembro as 11:18' dateTime="2023-05-11 08:13:30">Publicado há 1h</time>
                    
            </header>

            <dir className={styles.content}>
                <p>Fala galeraa </p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </dir>
        </article>
    )
}
