import { Personagem } from './personagem.js';

export class Arqueiro extends Personagem {
  range;
  tipo = 'Arqueiro';

  constructor(nome, level, descricao, range) {
    super(nome, level, descricao), (this.range = range);
  }
}
