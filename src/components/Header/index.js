import { Link } from 'react-router-dom';

import styles from './header.module.css';


export default function Header(){

    return(

        <header className={styles.Header}>

            <div className={styles.container}>
                <Link to='/' className={styles.headerLink}>
                    <h1>Portfólio</h1>
                </Link>
                
                <nav className={styles.nav}>
                    <a href='#sobre' target='_self' className={styles.link}>Sobre</a>
                    <a href='#tecnologia' target='_self' className={styles.link}>Tecnologia</a>
                    <a href='#projetos' target='_self' className={styles.link}>Projetos</a>
                </nav>
                
            </div>
        </header>
    )
}
