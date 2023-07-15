import { SiJavascript, SiNextdotjs, SiTypescript, SiFirebase } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiSass } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr'

import styles from './styles.module.css';

const Competencia = ()=>{

    let tamanhoIcon = 100;
    return(
        <article className={styles.container} >
            
            <div className={styles.tecnologia}>
                <AiFillHtml5 size={tamanhoIcon} color='#54B689' />
                <span>HTML5</span>
            </div>

            <div className={styles.tecnologia}>
                <IoLogoCss3 size={tamanhoIcon} color='#54B689' />
                <span>CSS3</span>
            </div>

            <div className={styles.tecnologia}>
                <SiSass size={tamanhoIcon} color='#54B689'/>
                <span>Firebase</span>
            </div>

            <div className={styles.tecnologia}>
                <SiJavascript size={tamanhoIcon} color='#54B689' />
                <span>JavaScript</span>
            </div>

            <div className={styles.tecnologia}>
                <SiTypescript size={tamanhoIcon} color='#54B689'/>
                <span>TypeScript</span>
            </div>

            <div className={styles.tecnologia}>
                <FaReact size={tamanhoIcon} color='#54B689' />
                <span>ReactJS</span>
            </div>


            <div className={styles.tecnologia}>
                <SiNextdotjs size={tamanhoIcon} color='#54B689' />
                <span>NextJS</span>
            </div>
            <div className={styles.tecnologia}>
                <IoLogoNodejs size={tamanhoIcon} color='#54B689' />
                <span>NextJS</span>
            </div>
            <div className={styles.tecnologia}>
                <FaPython size={tamanhoIcon} />
                <span>Python</span>
            </div>
            <div className={styles.tecnologia}>
                <GrMysql size={tamanhoIcon} color='#54B689'/>
                <span>MySql</span>
            </div>
            <div className={styles.tecnologia}>
                <SiFirebase size={tamanhoIcon} color='#54B689'/>
                <span>Firebase</span>
            </div>
            
        </article>
    )
}

export default Competencia;