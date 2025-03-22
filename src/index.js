import { Personagem } from './modules/personagem.js';

const personagemNovo = new Personagem(
  'Filipe',
  12,
  10,
  7,
  'Mago',
  'O mago supremo em termos de mana e vida.'
);

personagemNovo.obterInsignia();

console.log(personagemNovo);

console.log(
  `Insígnia de ${personagemNovo.nome}: ${personagemNovo.obterInsignia()}`
);
