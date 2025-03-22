import { Personagem } from './modules/personagem.js';
import { Mago } from './modules/mago.js';
import { PersonagemView } from './components/personagem-view.js';

const personagemNovo = new Personagem(
  'Filipe',
  5,
  'Mago',
  'O mago supremo em termos de magia.'
);

const personagemDois = new Personagem(
  'Flecha',
  3,
  'Arqueiro',
  'A aprendiz do mago supremo. Ela busca criar flechas mágicas.'
);

const personagens = [personagemNovo, personagemDois];

new PersonagemView(personagens).render();
