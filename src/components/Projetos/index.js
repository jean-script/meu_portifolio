import ProjetosTemplate from '../ProjetoTemplate';
import tarefa from '../../asserts/projetoTarefa.png'
import styles from './styles.module.css'

const Projetos = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.projetos}>  
                <ProjetosTemplate 
                    nome={`Lista de tarefas`} 
                    descricao={`Projeto onde o usuario pode criar uma conta e gerar suas tarefas. 
                    Todas as tarefas são salvas no banco de dados Firebase.
                    Cada usuaria pode ter suas tarefas publicas e privadas. as publicas podem compartilhar com alguem que não tenha conta.
                    `}
                    image={tarefa}
                />
                <ProjetosTemplate 
                    nome={`Lista de tarefas`} 
                    descricao={`Projeto onde o usuario pode criar uma conta e gerar suas tarefas. 
                    Todas as tarefas são salvas no banco de dados Firebase.
                    Cada usuaria pode ter suas tarefas publicas e privadas. as publicas podem compartilhar com alguem que não tenha conta.
                    `}
                    image={tarefa}
                />
                <ProjetosTemplate 
                    nome={`Lista de tarefas`} 
                    descricao={`Projeto onde o usuario pode criar uma conta e gerar suas tarefas. 
                    Todas as tarefas são salvas no banco de dados Firebase.
                    Cada usuaria pode ter suas tarefas publicas e privadas. as publicas podem compartilhar com alguem que não tenha conta.
                    `}
                    image={tarefa}
                />
            </div>

        </div>
    )
}

export default Projetos;
