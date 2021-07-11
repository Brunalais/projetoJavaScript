// pegar o input
//Se for Sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
//Se for Não, mostra todos os livros em ordem crescente pela quantidade de páginas


const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponoveis:')
    console.log('Produtividade e estilo de vida','/História brasileira','/Américas', 
    '/Tecnologia','/Estilo de vida','/Romance')

    const entradaCategoria = readline.question('Qual categoria você escolhe')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}