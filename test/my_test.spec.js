const chai = require('chai');
const index = require('../index.js');
const getLinksFromMd = index.getLinksFromMd;
const expect = chai.expect;

describe('getLinksFromMd()', () => {
  it('Deveria retornar erro para string vazia ('')', () => {
    expect(() => getLinksFromMd()).to.throw('Necessário inserir um texto');
  });
  it('Deveria retornar erro quando for números', () => {
    expect(() => getLinksFromMd(17364932)).to.throw('Necessário inserir um texto válido')
  });
  it('Deveria retornar vazio para texto não contendo links', () => {
    let txt = 'Amanhã é 23, são 8 dias para o fim do mês.';
    expect(getLinksFromMd(txt)).to.be.a('array');
  });
  it('Deveria retornar um array com 1 link quando o texto contiver apenas 1 link', () => {
    let txt = 'Amanhã é 23, são 8 dias para o [google](www.google.com.br) fim do mês.';
    expect(getLinksFromMd(txt)).to.deep.equal([{href: 'www.google.com.br', text: '[google]'}   
    ]);
  });
  it('Deveria retornar um array com vários links para texto com vários links', () => {
    let txt = 'Amanhã é 23 [Laboratória](laboratoria.la), são 8 dias para o fim do mês.[Google](www.google.com.br)';
    expect(getLinksFromMd(txt)).to.deep.equal([{href: 'laboratoria.la',
      text: '[Laboratória]'}, {href: 'www.google.com.br',
      text: '[Google]'}
    ]);
  });
});