import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivros } from "./controle/ControleLivros";

const controleLivros = new ControleLivros();

const LivroDados = () => {
    const [livro, setLivro] = useState({
        codigo: "", // Default empty for MongoDB compatibility
        titulo: "",
        autor: "",
        anoPublicacao: "",
        preco: "",
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setLivro((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle form submission to include a new book
    const incluir = () => {
        const { titulo, autor, anoPublicacao, preco } = livro;

        // Validate fields
        if (!titulo || !autor || !anoPublicacao || !preco) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Create the new book
        controleLivros
            .incluir({
                codigo: "",
                titulo,
                autor,
                anoPublicacao: parseInt(anoPublicacao),
                preco: parseFloat(preco),
            })
            .then((success) => {
                if (success) {
                    alert("Livro incluído com sucesso!");
                    navigate("/"); // Navigate back to the book list
                } else {
                    alert("Erro ao incluir livro. Tente novamente.");
                }
            });
    };

    return (
        <div>
            <h1>Cadastrar Livro</h1>
            <form>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={livro.titulo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Autor:</label>
                    <input
                        type="text"
                        name="autor"
                        value={livro.autor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Ano de Publicação:</label>
                    <input
                        type="number"
                        name="anoPublicacao"
                        value={livro.anoPublicacao}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Preço:</label>
                    <input
                        type="number"
                        step="0.01"
                        name="preco"
                        value={livro.preco}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="button" onClick={incluir}>
                    Incluir
                </button>
            </form>
        </div>
    );
};

export default LivroDados;
