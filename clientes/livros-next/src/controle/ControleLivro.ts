const baseURL = "http://localhost:3030/livros"; // Endereço do servidor Express

// Interface para compatibilizar com o MongoDB
export interface LivroMongo {
    _id?: string; // Identificador do MongoDB (opcional para inclusão)
    titulo: string;
    autor: string;
    anoPublicacao: number;
    preco: number;
}

export interface Livro {
    codigo?: string; // Para compatibilidade no frontend
    titulo: string;
    autor: string;
    anoPublicacao: number;
    preco: number;
}

export class ControleLivros {
    // Método para obter todos os livros
    async obterLivros(): Promise<Array<Livro>> {
        try {
            const resposta = await fetch(baseURL);
            if (!resposta.ok) throw new Error("Erro ao obter livros.");
            const livrosMongo: Array<LivroMongo> = await resposta.json();
            return livrosMongo.map((livroMongo) => ({
                codigo: livroMongo._id,
                titulo: livroMongo.titulo,
                autor: livroMongo.autor,
                anoPublicacao: livroMongo.anoPublicacao,
                preco: livroMongo.preco,
            }));
        } catch (erro) {
            console.error("Erro ao obter livros:", erro);
            return [];
        }
    }

    // Método para incluir um livro
    async incluir(livro: Livro): Promise<boolean> {
        try {
            const livroMongo: LivroMongo = {
                titulo: livro.titulo,
                autor: livro.autor,
                anoPublicacao: livro.anoPublicacao,
                preco: livro.preco,
            };
            const resposta = await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(livroMongo),
            });
            return resposta.ok;
        } catch (erro) {
            console.error("Erro ao incluir livro:", erro);
            return false;
        }
    }

    // Método para excluir um livro
    async excluir(codigo: string): Promise<boolean> {
        try {
            const resposta = await fetch(`${baseURL}/${codigo}`, {
                method: "DELETE",
            });
            return resposta.ok;
        } catch (erro) {
            console.error("Erro ao excluir livro:", erro);
            return false;
        }
    }
}
