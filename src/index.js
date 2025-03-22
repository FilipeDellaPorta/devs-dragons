import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/mago.js';
import { Arqueiro } from './modules/arqueiro.js';

const personagemNovo = new Mago(
  'Filipe',
  7,
  'O mago supremo em termos de magia.',
  'Sombras',
  7,
  6
);

const personagemDois = new Arqueiro(
  'Flecha',
  4,
  'A aprendiz do mago supremo. Ela busca criar flechas mágicas.',
  6
);

const personagens = [personagemNovo, personagemDois];

new PersonagemView(personagens).render();
