import { useState, useContext } from "react";

import Sobre from "../../components/Sobre";
import Projetos from '../../components/Projetos';
import Competencia from "../../components/Competencias";

import { ProjetosContext } from '../../contexts/Projects'

import styles from './styles.module.css';
import OqueFaco from "../../components/OqueFaco";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";

function Home(){


    const { userInfo } = useContext(ProjetosContext);
    const { data } = useContext(ProjetosContext);
    let projetosDestaque = data.filter((pro)=> pro.destaque === true);

    const [name] = useState(userInfo.nome);
    const [cargo] = useState(userInfo.cargo);
    const [faculdade] = useState(userInfo.faculdade);
    const [universidade] = useState(userInfo.universidade);
    const [sobre] = useState(userInfo.sobre);

    return(

        <main className={styles.main}>
        
            <Sobre 
                name={name} 
                cargo={cargo} 
                faculdade={faculdade} 
                universidade={universidade}
                sobre={sobre}
            />

            <OqueFaco/>

            <section className={styles.Container}>
                <Projetos projetos={projetosDestaque}/>

                <div className={styles.ViewProjects}>
                    <Link to='/portfolio' >
                        <HiArrowCircleRight size={20} />
                        ver todos projetos
                    </Link>
                </div>
            </section>

            <Footer/>

            
        </main>
    )
}

export default Home;