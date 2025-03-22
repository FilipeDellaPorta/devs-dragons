import { Personagem } from './personagem.js';

export class Mago extends Personagem {
  elementoMagico;
  tipo = 'Mago';

  constructor(
    nome,
    level,
    descricao,
    elementoMagico,
  ) {
    super(nome, level, descricao),
      (this.elementoMagico = elementoMagico);
  }
}
