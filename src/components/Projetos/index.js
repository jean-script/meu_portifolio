import ProjetosTemplate from '../ProjetoTemplate';
import styles from './styles.module.css';
import { useContext } from 'react';

import { ProjetosContext } from '../../contexts/Projects';

const Projetos = () =>{

    const { data } = useContext(ProjetosContext);

    return(
        <article className={styles.container}>
            <ul className={styles.projetos}>  

            {data.map((pro)=>{
                return(
                    <li key={pro.id}>
                        <ProjetosTemplate 
                            nome={pro.nome} 
                            image={pro.image}
                            id={pro.id}
                            git={pro.git}
                            link={pro.link}
                        />
                    </li>
                )
            })}
               
            </ul>
        </article>
    )
}

export default Projetos;
