import Photo from '../../asserts/myphoto.jpg'
import { Link } from 'react-router-dom';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styles from './styles.module.css';

function Sobre({ name, empresa, faculdade, cargo, universidade, sobre, id }){
  
    return(
        <div className={styles.sectionSobre}>

           <article className={styles.sobreContatos}>
                <div className={styles.photo}>
                    <img src={Photo} alt="Minha foto perfil"/>
                </div>

                <div className={styles.nome}>
                    <h3>{name}</h3>
                </div>

                <div className={styles.contatos}>
                    <Link to={`https://github.com/jean-script`} target='_blank'>
                        <AiFillGithub color='#fff' size={50} />
                    </Link>
                    <Link to={`https://www.linkedin.com/in/jean-carlos-aires-83a3821a2`} target='_blank'>
                        <AiFillLinkedin color='#fff' size={50}  />
                    </Link>
                </div>

           </article>

           <article className={styles.infor}>
                <section>
                    <div className={styles.containerInfo}>
                        <h3>Formação acadêmica</h3>
                        <ul>
                            <li>
                                {faculdade} - {universidade}
                            </li>
                        </ul>
                    </div>
                    <div className={styles.containerInfoEmpresa}>
                        <h3>Experiência</h3>
                        <p>Cargo Atual: {cargo}</p>
                        <p>Experiência: Desenvolvedor Front end</p>
                    </div>

                </section>

                <hr/>

                <section className={styles.sobre}>
                    <h3>Sobre</h3>
                    <p>
                        {sobre}
                    </p>
                </section>

           </article>
        </div>
    )
}

export default Sobre;