import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/mago.js';
import { Arqueiro } from './modules/arqueiro.js';
import { ArqueiroMago } from './modules/arqueiro-mago.js';
import { Personagem } from './modules/personagem.js';

const personagemNovo = new Mago('Filipe', 7, 'Sombras', 7, 6);

const personagemDois = new Arqueiro('Ana', 4, 6);

const arqueiroMago = new ArqueiroMago('Chico', 7, 10, 'Ar', 4, 8);

const personagens = [personagemNovo, personagemDois, arqueiroMago];

new PersonagemView(personagens).render();

console.log(Personagem.duelar(personagemNovo, personagemDois));
