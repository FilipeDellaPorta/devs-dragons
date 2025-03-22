import { Personagem } from './modules/personagem.js';
import { PersonagemView } from './components/personagem-view.js';

const personagemNovo = new Personagem(
  'Filipe',
  12,
  10,
  7,
  'Mago',
  'O mago supremo em termos de mana e vida.'
);

const personagemDois = new Personagem(
  'Mana',
  15,
  7,
  6,
  'Mago',
  'A aprendiz do mago supremo.'
);

const personagens = [personagemNovo, personagemDois];

new PersonagemView(personagens).render();
