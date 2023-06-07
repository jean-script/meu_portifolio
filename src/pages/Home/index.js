import { useState } from "react";

import Sobre from "../../components/Sobre";
import Projetos from '../../components/Projetos';
import Competencia from "../../components/Competencias";



import styles from './styles.module.css';

function Home(){

    let sobreTexto = 'Olá, meu nome é Jean Carlos, tenho 22 anos e tenho 2 anos de experiência na área da programação WEB e RPA. Atualmente me formei em Análise e Desenvolvimento de Sistemas pela Universidade Nove de Julho, e estou atuando como Desenvolvedor RPA na empresa Practia Brasil, onde desenvolvi projetos internos de média e alta complexidade, apliquei treinamentos para outras empresas, atuei em clientes externos no modelo Outsourcing e ajudei na criação, juntamente a uma equipe sinérgica e envolvida, de um Framework em Python. Hoje, tenho domínio das tecnologias HTML, CSS, JavaScript, Python, Reactjs e algumas plataformas de RPA, nas quais desenvolvi alguns projetos. Meu próximo objetivo é atuar como desenvolvedor front end com intuito de adquirir novos conhecimentos e vivencias além de torná-los sólidos. Entre minhas características pessoais estão a competência em resolução de problemas, dedicação, boa comunicação, facilidade no aprendizado, proativo, excelente relacionamento interpessoal, bom humor e responsabilidade.'

    const [name] = useState('Jean Carlos Aires');
    const [cargo] = useState('Desenvolvedor RPA');
    const [empresa] = useState('Practia Brasil');
    const [faculdade] = useState('Analise e desenvolvimento de sistemas');
    const [universidade] = useState('Uninove');
    const [sobre] = useState(sobreTexto);
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