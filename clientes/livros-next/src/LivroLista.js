import React, { useState, useEffect } from "react";
import { ControleLivros } from "./controle/ControleLivros";

const controleLivros = new ControleLivros();

const LivroLista = () => {
    const [livros, setLivros] = useState([]); // State for storing the list of books
    const [carregado, setCarregado] = useState(false); // State for tracking data loading

    // Fetches the list of books on component mount or when data reload is needed
    useEffect(() => {
        controleLivros.obterLivros().then((resultado) => {
            setLivros(resultado);
            setCarregado(true); // Mark as loaded
        });
    }, [carregado]);

    // Deletes a book and reloads the list
    const excluir = (codigo) => {
        controleLivros.excluir(codigo).then(() => {
            setCarregado(false); // Trigger data reload
        });
    };

    return (
        <div>
            <h1>Lista de Livros</h1>
            {livros.length > 0 ? (
                <table border="1" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Ano</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                                <td>{livro.anoPublicacao}</td>
                                <td>{livro.preco.toFixed(2)}</td>
                                <td>
                                    <button
                                        onClick={() => excluir(livro.codigo)}
                                        style={{ color: "red" }}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Nenhum livro encontrado.</p>
            )}
        </div>
    );
};

export default LivroLista;
