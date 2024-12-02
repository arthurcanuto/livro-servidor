const mongoose = require('mongoose');

// Configuração das opções
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

// URL de conexão com o MongoDB (substitua pela sua conexão local ou remota)
const dbUrl = 'mongodb://127.0.0.1:27017/livraria';

// Conexão com o banco de dados
mongoose.connect(dbUrl, options)
    .then(() => console.log('Conexão com MongoDB realizada com sucesso!'))
    .catch((err) => console.error('Erro ao conectar com MongoDB:', err));

module.exports = mongoose;
