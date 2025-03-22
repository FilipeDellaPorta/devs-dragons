import { Arqueiro } from './arqueiro.js';
import { Mago } from './mago.js';
import { Personagem } from './personagem.js';

export class ArqueiroMago extends Personagem {
  tipo = 'ArqueiroMago';
  ladoArqueiro;
  ladoMago;

  constructor(
    nome,
    level,
    descricao,
    range,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome, level, descricao);
    this.ladoArqueiro = new Arqueiro(nome, level, descricao, range);
    this.ladoMago = new Mago(
      nome,
      level,
      descricao,
      elementoMagico,
      levelMagico,
      inteligencia
    );
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
  }
}
