import { Personagem } from './modules/personagem.js';

const personagemNovo = new Personagem();
personagemNovo.nome = 'Filipe';
personagemNovo.mana = 12;
personagemNovo.vida = 10;
personagemNovo.level = 7;
personagemNovo.tipo = 'Mago';
personagemNovo.descricao = 'O mago supremo em termos de mana e vida.';

console.log(personagemNovo);
