
import tarefa from '../asserts/projetoTarefa.png'
import chamados from '../asserts/sistemaDeChamados.JPG';
import lanchonete from '../asserts/lanchoneteDaPraca.png';
import skate from '../asserts/redeSocialSkate.png';
import devBarber from '../asserts/devBarber.png'

export const data = 
    [
        {
            nome: 'Sistema de Caixa',
            descricao: 'Sistema de caixa para lanchonete. Contém autenticação, funcionalidades de carinho de compras. Podem criar seus pedidos e enviar para o restaurante que vai ver o pedido no dashboard. Para o restaurante tem uma pagina de analytics.',
            git:'https://github.com/jean-script/lanchonete_praca',
            image:lanchonete,
            link: 'https://lanchonete-praca.vercel.app/dashboard',
            tecnologias: ['NextJS','ReactJS', 'Firebase', 'html5', 'Sass'],
            id: 5,
            destaque:true
        },
        {
            nome: 'Rede Social skate',
            descricao: 'Uma site como rede social de skatistas, contento melhores picos e produto.',
            git:'https://github.com/jean-script/RedeSocialskate',
            image:skate,
            link: 'https://jean-script.github.io/RedeSocialskate/',
            tecnologias: ['HTML5', 'CSS', 'JavaScript', 'Grid'],
            id: 6,
            destaque:true
        },
        {
            nome: 'Sistema de Chamados',
            descricao: 'Sistema com autenticação, para fazer chamadas de suporte, onde poder criar seu perfil, seus chamados e adicionar sua empresa.',
            git:'https://github.com/jean-script/sistema_chamada',
            image:chamados,
            link: 'https://chamadosuni.netlify.app/',
            tecnologias: ['ReactJS', 'JavaScript', 'Firebase', 'HTML5', 'CSS'],
            id: 1,
            destaque:true
        },
        {
            nome: 'Shopping card',
            descricao: 'Um site de loja de compras usando a api do mercado livre. Neste projeto temos o carinho de compras onde pode adicionar ou remover itens. Também conta com uma barra de pesquisa para buscar os produtos desejados.',
            git:'https://github.com/jean-script/shopping_card',
            image:'https://github.com/jean-script/shopping_card/raw/main/src/assets/imgGit.JPG?raw=true',
            link: 'https://shopping-card-cyan.vercel.app/',
            tecnologias: ['ReactJS', 'JavaScript', 'React hooks', 'context Api'],
            id: 2
        },
        {
            nome: 'Lista de tarefas',
            descricao: 'Projeto onde o usuario pode criar uma conta e gerar suas tarefas. Todas as tarefas são salvas no banco de dados Firebase. Cada usuaria pode ter suas tarefas publicas e privadas. as publicas podem compartilhar com alguem que não tenha conta.',
            git:'https://github.com/jean-script/ListaDeTarefas',
            image:tarefa,
            tecnologias: ['ReactJS', 'JavaScript', 'Firebase', 'HTML5', 'CSS'],
            id: 3
        },
        {
            nome: 'Dev Barbearia',
            descricao: 'Lage page para uma barbearia',
            git:'https://github.com/jean-script/lage-page-barber-dev',
            image:devBarber,
            link: 'https://jean-script.github.io/lage-page-barber-dev/',
            tecnologias: ['html5', 'Sass', 'css', 'AOS animation'],
            id: 7,
            destaque:true
        },
        {
            nome: 'Ecommerce CasaVerde',
            descricao: 'Landing page de ecommerce de Plantas. Praticando componentização do react, layout responsive, envio de email com javaScript e consumo de api',
            git:'https://github.com/jean-script/ecommerce',
            image:'https://github.com/jean-script/ecommerce/blob/main/src/img/localhost_3000_.png?raw=true/1200x500.png?text=#vitrinedev',
            link: 'https://ecommerce-flax-rho.vercel.app/',
            tecnologias: ['ReactJS', 'JavaScript', 'Firebase', 'HTML5', 'CSS','Styles-components', 'EmailJS'],
            id: 4
        },
        
    ]
