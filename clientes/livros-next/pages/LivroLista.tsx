import { useState, useEffect } from "react";
import { ControleLivros } from "../controle/ControleLivros";
import Livro from "../model/Livro";

// Instância do controlador de livros
const controleLivros = new ControleLivros();

const LivroLista = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]); // Lista de livros
    const [carregado, setCarregado] = useState(false); // Status de carregamento

    // useEffect para buscar livros
    useEffect(() => {
        controleLivros.obterLivros().then((resultado) => {
            setLivros(resultado);
            setCarregado(true);
        });
    }, [carregado]);

    // Método para excluir um livro
    const excluir = (codigo: string) => {
        controleLivros.excluir(codigo).then(() => {
            setCarregado(false); // Recarregar lista após exclusão
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Lista de Livros</h1>
            {livros.length > 0 ? (
                <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
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
                                        style={{
                                            backgroundColor: "red",
                                            color: "white",
                                            border: "none",
                                            padding: "5px 10px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => excluir(livro.codigo)}
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
