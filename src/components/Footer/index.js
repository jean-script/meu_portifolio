import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { TfiEmail } from 'react-icons/tfi'

import styles from './styles.module.css'

export default function Footer(){
    return (
        <footer className={styles.container}>
            
            <div className={styles.links}>
                {/* <a href='#'  rel='noreferrer' target='_blank'>
                    <AiOutlineInstagram size={50} color='#fff' />
                </a>
                <a href='https://www.linkedin.com/in/jean-carlos-aires/' rel='noreferrer' target='_blank'>
                    <AiFillLinkedin size={50} color='#fff' />
                </a>
                <a href='mailto:jean.aires21@gmail.com?subject=Sobre o portifolio' rel='noreferrer' target='_blank'>
                    <TfiEmail size={50} color='#fff' />
                </a> */}
            
            </div>
        </footer> 
    )
}
