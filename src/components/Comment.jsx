import { ThumbsUp, Trash} from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/HycaroPhillype.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commente.Content}>
                    <head>
                        <div className={styles.athorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='23 de Novembro as 11:18' dateTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </head>
                    <p>Muito bom Devon, parabéns!! </p>
                </div>

                <footer>
                    <button>
                       <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
