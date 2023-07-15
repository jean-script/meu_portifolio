import { useContext } from 'react';
import Projetos from '../../components/Projetos';
import styles from './styles.module.css';

import { ProjetosContext } from '../../contexts/Projects'

export default function Portifolio(){

    const { data } = useContext(ProjetosContext);
    return(
        <main className={styles.main}>
            <section className={styles.PortfolioContainer}>
                <h2>Portfólio</h2>
                <p>Bem-vindo ao meu portfólio on-line.</p>
            </section>

            <div>
                <Projetos projetos={data} />
            </div>
        </main>
    )
}
