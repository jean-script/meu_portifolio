import { useState, useContext } from "react";

import Sobre from "../../components/Sobre";
import Projetos from '../../components/Projetos';
import Competencia from "../../components/Competencias";

import { ProjetosContext } from '../../contexts/Projects'

import styles from './styles.module.css';
import OqueFaco from "../../components/OqueFaco";
import Footer from "../../components/Footer";

function Home(){


    const { userInfo } = useContext(ProjetosContext);

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

            <Projetos/>

            <Footer/>

            
        </main>
    )
}

export default Home;