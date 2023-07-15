
import { FaGithubAlt, FaLinkedin, FaUserAlt, FaTabletAlt } from 'react-icons/fa'
import MyPhoto from '../../asserts/myphoto.jpg'
import styles from './header.module.css';
import { Link } from 'react-router-dom';


export default function Header(){

    let tamanhoIcon = 35;

    return(

        <header className={styles.header}>
            <div className={styles.headerContext}>

                <div className={styles.headerInfo}>
                    <h2>
                        <Link to='/'>
                            Jean Carlos
                        </Link>
                    </h2>
                    <img 
                        src={MyPhoto}
                        alt='Minha foto de perfil'
                    />
                    <p>Olá, meu nome é Jean Carlos e sou desenvolvedor front end. Bem vindo ao meu site pessoal!</p>

                    <div className={styles.headerIcons}>
                        <a href='https://github.com/jean-script' target='_blank' rel="noreferrer">
                            <FaGithubAlt size={tamanhoIcon} color='#54B689' />
                        </a>
                        <a href='https://www.linkedin.com/in/jean-carlos-aires/' target='_blank' rel="noreferrer">
                            <FaLinkedin size={tamanhoIcon} color='#54B689' />
                        </a>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <Link to='/' className={styles.active}>
                        <FaUserAlt size={16} color='#1b4934' />
                        <span>Sobre mim</span>
                    </Link>
                    <Link to='/portfolio'>
                        <FaTabletAlt size={16} color='#fff' />
                        <span>Portfólio</span>
                    </Link>
                </nav>

            </div>
        </header>
    )
}
