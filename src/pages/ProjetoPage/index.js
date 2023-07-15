import { useContext } from 'react';
import { useParams } from 'react-router-dom'

import { ProjetosContext } from '../../contexts/Projects'

import styles from './styles.module.css';
import Footer from '../../components/Footer';

export default function ProjetosPage(){

    const { data } = useContext(ProjetosContext);
    const { id } = useParams();
    
    const projeto = data.filter(prop => (prop.id === Number(id)));


    return(
        <main className={styles.main}>
            <div className={styles.center}>
                {projeto.map((projeto)=>{
                    return (
                        <div className={styles.center} key={projeto.id}>
                                            
                            <div className={styles.info} id='sobre'>
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
                            
                            {projeto.tecnologias &&(
                                <>
                                    <div id='tecnologia'>
                                        <h1 className={styles.titleTecnologias}>Tecnologias</h1>
                                        {projeto.tecnologias.join(', ')}
                                    </div>
                                    <hr/>  
                                </>
                            )}
                            <div id='projetos'>
                                <img src={projeto.image} alt={projeto.nome} className={styles.img}/>
                            </div> 
                        </div>
                    )
                })}

            </div>

            <Footer/>
        </main>
    )
}
