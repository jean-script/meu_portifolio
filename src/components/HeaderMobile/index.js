import { useState } from 'react'
import { IoMdMenu } from 'react-icons/io';
import { FaGithubAlt, FaLinkedin, FaUserAlt, FaTabletAlt } from 'react-icons/fa'
import MyPhoto from '../../asserts/myphoto.jpg'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function HeaderMobile(){
    const [openMenu, setOpenMenu] = useState(false)

    let tamanhoIcon = 35;

    function handleMenu(){
        setOpenMenu(!openMenu);
    }

    return(
        <header className={openMenu ? styles.headerActive : styles.header}>
            <button onClick={handleMenu}>
                <IoMdMenu size={35} color='#fff'/>
            </button>
            <div className={styles.headerContent}>
                <Link to='/'>
                    <h2>Jean Carlos</h2>
                </Link>
            </div>
            <div className={styles.headerInfos}>
                    <div className={styles.content}>
                        <img 
                            src={MyPhoto}
                            alt='Foto de perfil'
                        />
                    </div>
                    <div className={styles.headerIcons}>
                        <a href='https://github.com/jean-script' target='_blank' rel="noreferrer">
                            <FaGithubAlt size={tamanhoIcon} color='#54B689' />
                        </a>
                        <a href='https://www.linkedin.com/in/jean-carlos-aires/' target='_blank' rel="noreferrer">
                            <FaLinkedin size={tamanhoIcon} color='#54B689' />
                        </a>
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
