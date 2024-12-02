const mongoose = require('./conexao');

// Definição do esquema de livros
const LivroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anoPublicacao: { type: Number, required: true },
    preco: { type: Number, required: true },
});

// Associar o esquema à coleção 'livros' e criar o modelo
const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;
