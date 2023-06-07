import { SiJavascript, SiNextdotjs, SiTypescript, SiFirebase } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaPython } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr'

import styles from './styles.module.css';

const Competencia = ()=>{
    return(
        <article className={styles.container} >
            
            <div className={styles.tecnologia}>
                <AiFillHtml5 size={60} color='#FFAA00' />
                <span>HTML5</span>
            </div>

            <div className={styles.tecnologia}>
                <IoLogoCss3 size={60} color='#67d5e7' />
                <span>CSS3</span>
            </div>
            <div className={styles.tecnologia}>
                <SiJavascript size={60} color='yellow' />
                <span>JavaScript</span>
            </div>

            <div className={styles.tecnologia}>
                <SiTypescript size={60} color='#14a3d3f2'/>
                <span>TypeScript</span>
            </div>

            <div className={styles.tecnologia}>
                <FaReact size={60} color='#14a3d3f2' />
                <span>ReactJS</span>
            </div>


            <div className={styles.tecnologia}>
                <SiNextdotjs size={60} color='#FFF' />
                <span>NextJS</span>
            </div>
            <div className={styles.tecnologia}>
                <FaPython size={60} />
                <span>Python</span>
            </div>
            <div className={styles.tecnologia}>
                <GrMysql size={60} color='#67d5e7'/>
                <span>MySql</span>
            </div>
            <div className={styles.tecnologia}>
                <SiFirebase size={60} color='#FFAA00'/>
                <span>Firebase</span>
            </div>
            

        </article>
    )
}

export default Competencia;