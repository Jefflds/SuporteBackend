export class Cliente {
  public ID_Cliente?: number;
  public Nome_Cliente: string;
  public Telefone_Cliente: string;
  public ID_Loja: number;

  constructor(nome: string, telefone: string, idLoja: number) {
    this.Nome_Cliente = nome;
    this.Telefone_Cliente = telefone;
    this.ID_Loja = idLoja;
  }
}
