import { Personagem } from './personagem.js';

export class Arqueiro extends Personagem {
  static tipo = 'Arqueiro';
  static descricao = 'Você tem o meu arco!';
  range;

  constructor(nome, level, range) {
    super(nome, level), (this.range = range);
  }

  obterInsignia() {
    if (this.range >= 5) {
      return `Dominador de flechas`;
    }
    return super.obterInsignia();
  }
}
