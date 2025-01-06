import { createContext } from 'react'

import { data } from './data';

export const ProjetosContext = createContext();

function ProjetosProvider({ children }){
    
    
    let sobreTexto = 'Sou um desenvolvedor front-end e back-end para aplicações web complexas e escaláveis. Escrevo sobre desenvolvimento de software em meu blog . Quer saber como posso ajudar seu projeto? Confira meu portfólio de projetos e currículo online.'

    let userInfo ={
        nome:'Jean Carlos Aires',
        cargo: 'Desenvolvedor Full Stack',
        empresa: 'Visual Mix',
        faculdade: 'Analise e desenvolvimento de sistemas',
        universidade: 'Uninove',
        sobre: sobreTexto
    }

    return(
        <ProjetosContext.Provider 
        value={{
            data,
            userInfo
        }}>
            {children}
        </ProjetosContext.Provider>
    )
}

export default ProjetosProvider;
