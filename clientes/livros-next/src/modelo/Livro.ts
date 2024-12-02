export default class Livro {
  codigo: String; // Alterado para String
  titulo: String;
  autor: String;
  anoPublicacao: Number;
  preco: Number;

  constructor(codigo: String, titulo: String, autor: String, anoPublicacao: Number, preco: Number) {
      this.codigo = codigo;
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.preco = preco;
  }
}
