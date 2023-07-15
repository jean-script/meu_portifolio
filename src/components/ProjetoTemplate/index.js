import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import styles from './styles.module.css';

export default function ProjetosTemplate({ nome, image, id, git, tecnologias, descricao }){
    return(
        <div className={styles.template}>
            <div className={styles.templateImg}>
                <img
                    src={image}
                    alt={nome}
                />
            </div>

            <div className={styles.templateContext}>
                <h2>{nome}</h2>

                <p>{descricao}</p>
            </div>

            <div className={styles.viewProject}>
                <Link to={`/projeto/${id}`}>
                    <HiArrowCircleRight size={20} />
                    Ver projeto
                </Link>
            </div>
        </div>
    )
}
