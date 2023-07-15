import ProjetosTemplate from '../ProjetoTemplate';
import styles from './styles.module.css';
import { HiArrowCircleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Projetos = ({projetos}) =>{

    return(
        <article className={styles.container}>

            <div className={styles.ProjetoCabecalho}>
                <div className={styles.barraCor}></div>
                <h2>Projetos em destaque</h2>
            </div>

            <ul className={styles.projetos}>  

            {projetos.map((pro)=>{
                return(
                    <li key={pro.id}>
                        <ProjetosTemplate 
                            nome={pro.nome} 
                            image={pro.image}
                            id={pro.id}
                            git={pro.git}
                            link={pro.link}
                            tecnologias={pro.tecnologias}
                            descricao={pro.descricao}
                        />
                    </li>
                )
            })}
               
            </ul>
        </article>
    )
}

export default Projetos;
