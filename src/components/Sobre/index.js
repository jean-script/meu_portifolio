import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import Photo from '../../asserts/myphoto.jpg'
import styles from './styles.module.css';

function Sobre({ name, faculdade, cargo, universidade, sobre }){
  
    return(
        <section className={styles.sobreContainer}>
            <article>

                <div className={styles.sobreInfos}>
                    <h1>{name}</h1>
                    <h3>{cargo}</h3>

                    <p>
                        Sou um desenvolvedor <strong>front-end</strong> para aplicações web complexas e escaláveis. Quer saber como posso ajudar seu projeto? Confira meu <strong>portfólio</strong> de projetos e currículo online.

                    </p>

                    <div>
                        <Link to="/portifolio">
                            <HiArrowCircleRight size={24} />
                            Exibir portifólio
                        </Link>
                    </div>

                </div>

                <div className={styles.containerFoto}>
                    <img
                        src={Photo}
                        alt='Foto de perfil'
                    />
                </div>
            </article>

            
        </section>
    )
}

export default Sobre;