export default class Livro {
  codigo: string;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  preco: number;

  constructor(codigo: string, titulo: string, autor: string, anoPublicacao: number, preco: number) {
      this.codigo = codigo;
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.preco = preco;
  }
}
