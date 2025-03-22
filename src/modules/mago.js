import { Personagem } from './personagem.js';

export class Mago extends Personagem {
  elementoMagico;
  levelMagico;
  tipo = 'Mago';

  constructor(nome, level, descricao, elementoMagico, levelMagico) {
    super(nome, level, descricao),
      (this.elementoMagico = elementoMagico),
      (this.levelMagico = levelMagico);
  }

  obterInsignia() {
    if (this.levelMagico >= 5) {
      return `Mestre da Magia de ${this.elementoMagico}`;
    }
    return super.obterInsignia();
  }
}
