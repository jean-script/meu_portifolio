import { createContext } from 'react'

import tarefa from '../asserts/projetoTarefa.png'
import chamados from '../asserts/sistemaDeChamados.JPG'
import social from '../asserts/social.JPG'

export const ProjetosContext = createContext();


function ProjetosProvider({ children }){
    
    let data = [{
        nome: 'Lista de tarefas',
        descricao: 'Projeto onde o usuario pode criar uma conta e gerar suas tarefas. Todas as tarefas são salvas no banco de dados Firebase. Cada usuaria pode ter suas tarefas publicas e privadas. as publicas podem compartilhar com alguem que não tenha conta.',
        git:'https://github.com/jean-script/ListaDeTarefas',
        image:tarefa,
        id: 1
    },{
        nome: 'Sistema de Chamados',
        descricao: 'Sistema com autenticação, para fazer chamadas de suporte, onde poder criar seu perfil, seus chamados e adicionar sua empresa.',
        git:'https://github.com/jean-script/sistema_chamada',
        image:chamados,
        link: 'https://chamadosuni.netlify.app/',
        id: 2
    }
    ,{
        nome: 'Ecommerce CasaVerde',
        descricao: 'Landing page de ecommerce de Plantas. Praticando componentização do react, layout responsive, envio de email com javaScript e consumo de api',
        git:'https://github.com/jean-script/ecommerce',
        image:'https://github.com/jean-script/ecommerce/blob/main/src/img/localhost_3000_.png?raw=true/1200x500.png?text=#vitrinedev',
        link: 'https://ecommerce-flax-rho.vercel.app/',
        id: 3
    }
    ,{
        nome: 'Social Mídia',
        descricao: 'Site é baseado em uma rede social, com sistema de autenticação, validação de usuário e cadastros. Praticando os conhecimentos em ReactJS, JavaScript, html, css, firebase, React hooks e context API. Neste projeto o usuário pode acessar sua conta ver os posts mais recentes, e poder publicar suas ideias escritas e com imagens. Tendo seu perfil com foto, baner, nome e um campo sobre para se apresentar. E cada usuario pode adicionar comentarios aos posts.',
        git:'https://github.com/jean-script/social_midia',
        image:social,
        link: 'https://socials-midias.netlify.app/',
        id: 4
    }
]
    
    return(
        <ProjetosContext.Provider 
        value={{
            data
        }}>
            {children}
        </ProjetosContext.Provider>
    )
}

export default ProjetosProvider;