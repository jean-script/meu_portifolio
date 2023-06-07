import { useState } from "react";

import Sobre from "../../components/Sobre";
import Projetos from '../../components/Projetos';

import styles from './styles.module.css';

function Home(){

    let sobreTexto = 'Olá meu nome é Jean, tenho 22 anos e possuo quase 2 anos de experiência em programação, atualmente estou cursando a graduação de Analise e desenvolvimento de sistemas na Universidade nove de Julho e trabalhando como Desenvolvedor RPA na empresa Practia Brasil. Tenho domínio das tecnologias HTML, CSS, JavaScript e Reactjs nas quais desenvolvi alguns projetos. Meu objetivo atual é atuar como desenvolvedor Full Stack em uma empresa para torna solido meus conhecimentos e adquirir novos. Também competente em resolução de problemas, dedicação, boa comunicação, facilidade no aprendizado e proativo.'

    const [name, setName] = useState('Jean Carlos Aires');
    const [cargo, setcargo] = useState('Desenvolvedor RPA');
    const [empresa, setEmpresa] = useState('Practia Brasil');
    const [faculdade, setFaculdade] = useState('Analise e desenvolvimento de sistemas');
    const [universidade, setUniversidade] = useState('Uninove');
    const [sobre, setSobre] = useState(sobreTexto);
    const [id, setId]= useState('');

    return(
        <main className={styles.main}>
            <div className={styles.center} id="#sobre">
                <section className={styles.container}>
                    <Sobre name={name} empresa={empresa} faculdade={faculdade} cargo={cargo} universidade={universidade} sobre={sobre} id={id}/>
                </section>
            </div>

            <div className={styles.left} id="#projetos">
                <div>
                    <h2>Projetos</h2>
                </div>

                <Projetos/>
            </div>

            <div className={styles.left}>
                <h2>Compentencias</h2>
              
            </div>

        </main>
    )
}

export default Home;