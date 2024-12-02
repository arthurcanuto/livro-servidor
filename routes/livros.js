const express = require('express');
const router = express.Router();
const Livro = require('../modelo/livro-schema');

// Rota para listar todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await Livro.find();
        res.json(livros);
    } catch (err) {
        res.status(500).send({ message: `Erro ao listar livros: ${err.message}` });
    }
});

// Rota para adicionar um novo livro
router.post('/', async (req, res) => {
    try {
        const novoLivro = new Livro(req.body);
        const livroSalvo = await novoLivro.save();
        res.status(201).json({ message: 'Livro salvo com sucesso!', data: livroSalvo });
    } catch (err) {
        res.status(400).send({ message: `Erro ao salvar livro: ${err.message}` });
    }
});

// Rota para atualizar um livro
router.put('/:id', async (req, res) => {
    try {
        const livroAtualizado = await Livro.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!livroAtualizado) {
            return res.status(404).send({ message: 'Livro não encontrado!' });
        }
        res.json({ message: 'Livro atualizado com sucesso!', data: livroAtualizado });
    } catch (err) {
        res.status(400).send({ message: `Erro ao atualizar livro: ${err.message}` });
    }
});

// Rota para deletar um livro
router.delete('/:id', async (req, res) => {
    try {
        const livroRemovido = await Livro.findByIdAndDelete(req.params.id);
        if (!livroRemovido) {
            return res.status(404).send({ message: 'Livro não encontrado!' });
        }
        res.json({ message: 'Livro deletado com sucesso!' });
    } catch (err) {
        res.status(500).send({ message: `Erro ao deletar livro: ${err.message}` });
    }
});

module.exports = router;
