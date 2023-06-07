import styles from './styles.module.css'

export default function ProjetosTemplate({ nome, descricao, image }){
    return(
        <article className={styles.template}>

            <h3 className={styles.title}>{nome}</h3>
            <div>
                <img src={image} alt="imagem do projeto" className={styles.img}/>
                <p className={styles.descricao}>{descricao}</p>
            </div>
        
            <div className={styles.btns}>
                <a href='https://github.com/jean-script/ListaDeTarefas' target='_blank'>Acessar Git</a>
                {/* <a href='https://github.com/jean-script/ListaDeTarefas'>Site</a> */}
            </div>

        </article>
    )
}
