import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/mago.js';
import { Arqueiro } from './modules/arqueiro.js';
import { ArqueiroMago } from './modules/arqueiro-mago.js';
import { Guerreiro } from './modules/guerreiro.js';

const personagemNovo = new Mago('Filipe', 'Sombras', 7, 6);

const personagemDois = new Arqueiro('Ana', 6);

const arqueiroMago = new ArqueiroMago('Chico', 10, 'Ar', 4, 8);

const guerreiro = new Guerreiro('Daniela', 18);

const personagens = [personagemNovo, personagemDois, arqueiroMago, guerreiro];

new PersonagemView(personagens).render();
