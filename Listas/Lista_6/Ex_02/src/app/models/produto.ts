export class Produto {
    public nome: string;
    public img: string;
    public preco: number;
    public descricao: string;

    constructor(nome: string, img: string,  preco: number,descricao: string){
        this.nome = nome;
        this.img = img
        this.preco = preco;
        this.descricao = descricao;

    }
}
