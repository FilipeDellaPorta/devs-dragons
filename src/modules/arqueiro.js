import { Personagem } from './personagem.js';

export class Arqueiro extends Personagem {
  static tipo = 'Arqueiro';
  range;

  constructor(nome, level, descricao, range) {
    super(nome, level, descricao), (this.range = range);
  }

  obterInsignia() {
    if (this.range >= 5) {
      return `Dominador de flechas`;
    }
    return super.obterInsignia();
  }
}
