import React from 'react';
import { Livro } from '../src/modelo/Livro';
import { ControleEditora } from '../src/controle/ControleEditora';

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

const controleEditora = new ControleEditora();

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    {livros.map((livro, index) => (
      <tr key={index}>
        <td>{livro.titulo}</td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>
            Excluir
          </button>
        </td>
      </tr>
  ))};
};
