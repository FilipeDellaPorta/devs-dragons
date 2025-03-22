import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/mago.js';
import { Arqueiro } from './modules/arqueiro.js';
import { ArqueiroMago } from './modules/arqueiro-mago.js';

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

const arqueiroMago = new ArqueiroMago(
  'Chico',
  7,
  'O lendário Arqueiro-Mago.',
  10,
  'Ar',
  4,
  8
);

const personagens = [personagemNovo, personagemDois, arqueiroMago];

new PersonagemView(personagens).render();
