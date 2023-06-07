import { useContext } from 'react';
import { useParams } from 'react-router-dom'

import { ProjetosContext } from '../../contexts/Projects'

import styles from './styles.module.css';

export default function ProjetosPage(){

    const { data } = useContext(ProjetosContext);


    const { id } = useParams();
    
    const projeto = data.filter(prop => (prop.id === Number(id)));


    return(
        <main className={styles.main}>
            <div className={styles.center}>
                {projeto.map((projeto)=>{
                    return (
                        <div className={styles.center}>
                            <div>
                                <img src={projeto.image} alt={projeto.nome} className={styles.img}/>
                            </div>                         

                            <div className={styles.info}>
                                <hr className={styles.linhaTitle}/>
                                <h1 className={styles.title}>{projeto.nome}</h1>

                                <article className={styles.descricao}>
                                    <p className={styles.paragrafo}>{projeto.descricao}</p>

                                    <span>
                                        <a href={projeto.git} target='_blank' rel='noreferrer' className={styles.link}>Acessar git</a>
                                        {projeto.link && (
                                            <a href={projeto.link} target='_blank' rel='noreferrer' className={styles.link}>Acessar site</a>
                                        )}
                                    </span>

                                </article>
                            </div>
                            <hr/>
                        </div>
                    )
                })}

            </div>
        </main>
    )
}