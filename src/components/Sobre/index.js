import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import Photo from '../../asserts/myphoto.jpg'
import styles from './styles.module.css';

function Sobre({ name, faculdade, cargo, universidade, sobre }) {

    return (
        <section className={styles.sobreContainer}>
            <article>

                <div className={styles.sobreInfos}>
                    <h1>{name}</h1>
                    <h3>{cargo}</h3>

                    <p>
                        Sou um desenvolvedor <strong>full stack</strong> para desenvolvimento de Aplicativos,
                        Sistemas WEB e software escaláveis. Quer saber como posso ajudar seu projeto?
                        Confira meu <Link to="/portfolio"><strong>portfólio</strong></Link> de projetos e currículo online.
                    </p>

                    <div>
                        <Link to="/portfolio">
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