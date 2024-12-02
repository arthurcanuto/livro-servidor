const Livro = require('./livro-schema');

// Função para obter todos os livros
const obterLivros = async () => {
    try {
        return await Livro.find();
    } catch (err) {
        throw new Error(`Erro ao obter livros: ${err.message}`);
    }
};

// Função para incluir um novo livro
const incluir = async (livro) => {
    try {
        return await Livro.create(livro);
    } catch (err) {
        throw new Error(`Erro ao incluir livro: ${err.message}`);
    }
};

// Função para excluir um livro pelo código (_id)
const excluir = async (codigo) => {
    try {
        return await Livro.deleteOne({ _id: codigo });
    } catch (err) {
        throw new Error(`Erro ao excluir livro: ${err.message}`);
    }
};

module.exports = {
    obterLivros,
    incluir,
    excluir,
};
