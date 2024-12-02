const baseURL = "http://localhost:3030/livros";

export interface LivroMongo {
    _id?: string;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    preco: number;
}

export default class ControleLivros {
    async obterLivros(): Promise<Array<Livro>> {
        try {
            const resposta = await fetch(baseURL);
            if (!resposta.ok) throw new Error("Erro ao obter livros.");
            const livrosMongo: Array<LivroMongo> = await resposta.json();
            return livrosMongo.map((livroMongo) => ({
                codigo: livroMongo._id!,
                titulo: livroMongo.titulo,
                autor: livroMongo.autor,
                anoPublicacao: livroMongo.anoPublicacao,
                preco: livroMongo.preco,
            }));
        } catch (erro) {
            console.error(erro);
            return [];
        }
    }

    async incluir(livro: Livro): Promise<boolean> {
        try {
            const resposta = await fetch(baseURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    titulo: livro.titulo,
                    autor: livro.autor,
                    anoPublicacao: livro.anoPublicacao,
                    preco: livro.preco,
                }),
            });
            return resposta.ok;
        } catch (erro) {
            console.error(erro);
            return false;
        }
    }

    async excluir(codigo: string): Promise<boolean> {
        try {
            const resposta = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
            return resposta.ok;
        } catch (erro) {
            console.error(erro);
            return false;
        }
    }
}
