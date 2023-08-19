import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  public nome!: string;
  public img!: string;
  public preco!: number;
  public descricao!: string;



  constructor(private produtoService: ProdutoService, private router: Router) {}

  public adicionarProduto() {
    let produto = new Produto(this.nome, this.img, this.preco, this.descricao);
    this.produtoService.AdicionarProduto(produto).subscribe((res: any) => {
      console.log(res);
    });
    this.router.navigate(["/"])
  }

  
}
