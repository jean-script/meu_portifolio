import styles from './styles.module.css'

import Competencia from '../Competencias'

export default function OqueFaco() {
    return (
        <section className={styles.Oquefaco}>
            <div className={styles.facoCabecalho}>
                <div className={styles.barraCor}></div>
                <h2>O que eu faço</h2>
            </div>

            <p>
                Tenho mais de 3 anos de experiência na área da programação
                <strong> Web</strong>, <strong> aplicativos</strong> e <strong>RPA</strong>. Abaixo está
                uma rápida visão geral dos meus principais conjuntos de
                habilidades técnicas e tecnologias que uso.
            </p>
            <div>
                <Competencia />
            </div>

        </section>
    )
}
