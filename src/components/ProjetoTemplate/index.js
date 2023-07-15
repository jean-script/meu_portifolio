import { FaGithubAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function ProjetosTemplate({ nome, image, id, git, tecnologias }){
    return(
        <div className={styles.template}>

            <div className={styles.templateInfo}>
                <div className={styles.templateContainerImg}>
                    <img src={image} alt="imagem do projeto" className={styles.img}/>
                    {/* <p className={styles.descricao}>{descricao}</p> */}
                </div>

                <div className={styles.NameAndBtn}>
                    <h3 className={styles.title}>{nome}</h3>

                    <span className={styles.tecnologias}>{tecnologias.join(", ")}</span>

                    <div className={styles.btns}>
                        <a 
                            href={git} 
                            rel="noreferrer" target='_blank'>
                                <FaGithubAlt color='#1b4934'/>
                                Acessar Git
                        </a>

                        <Link to={`projeto/${id}`}>Detalhes</Link>
                    </div>
                </div>

            </div>
        

        </div>
    )
}
