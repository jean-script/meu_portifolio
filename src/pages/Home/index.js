import { useState, useContext } from "react";

import Sobre from "../../components/Sobre";
import Projetos from '../../components/Projetos';
import Competencia from "../../components/Competencias";

import { ProjetosContext } from '../../contexts/Projects'

import styles from './styles.module.css';

function Home(){


    const { userInfo } = useContext(ProjetosContext);

    const [name] = useState(userInfo.nome);
    const [cargo] = useState(userInfo.cargo);
    const [empresa] = useState(userInfo.empresa);
    const [faculdade] = useState(userInfo.faculdade);
    const [universidade] = useState(userInfo.universidade);
    const [sobre] = useState(userInfo.sobre);
    const [id]= useState('');

    return(
        <main className={styles.main}>
            <div className={styles.center} id="sobre">
                <section className={styles.container}>
                    <Sobre name={name} empresa={empresa} faculdade={faculdade} cargo={cargo} universidade={universidade} sobre={sobre} id={id}/>
                </section>
            </div>

            <div className={styles.competencias}>
                <h2>Tecnologias</h2>
                <Competencia/>
            </div>

            <div className={styles.left} id="projetos" >
                <div className={styles.divH2}>
                    <h2>Projetos</h2>
                </div>

                <Projetos/>
            </div>

           
        </main>
    )
}

export default Home;