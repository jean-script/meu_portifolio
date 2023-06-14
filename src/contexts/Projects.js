import { createContext } from 'react'

import { data } from './data';

export const ProjetosContext = createContext();

function ProjetosProvider({ children }){
    
    
    let sobreTexto = 'Olá, meu nome é Jean Carlos, tenho 22 anos e tenho 2 anos de experiência na área da programação WEB e RPA. Formado em Análise e Desenvolvimento de Sistemas pela Universidade Nove de Julho, e estou atuando como Desenvolvedor RPA na empresa Practia Brasil, onde desenvolvi projetos internos de média e alta complexidade, apliquei treinamentos para outras empresas, atuei em clientes externos no modelo Outsourcing e ajudei na criação, juntamente a uma equipe sinérgica e envolvida, de um Framework em Python. Hoje, tenho domínio das tecnologias HTML, CSS, JavaScript, Python, Reactjs e algumas plataformas de RPA, nas quais desenvolvi alguns projetos. Meu próximo objetivo é atuar como desenvolvedor front end com intuito de adquirir novos conhecimentos e vivencias além de torná-los sólidos. Entre minhas características pessoais estão a competência em resolução de problemas, dedicação, boa comunicação, facilidade no aprendizado, proativo, excelente relacionamento interpessoal, bom humor e responsabilidade.'

    let userInfo ={
        nome:'Jean Carlos Aires',
        cargo: 'Desenvolvedor RPA',
        empresa: 'Practia Brasil',
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
