const should  = require('should');
const findCrushs = require('../tests/findCrush')
describe('find crushs', () => {
      it('soma crushs', () => {
          findCrushs.somaCrush(2,3).should.be.equal(5);
      })
      it('somar dois numeros 50 e 50 e retornará 100', () => {
        findCrushs.somaCrush(50,50).should.be.equal(100);
    });
    it('Passar um nome e deve retornar mensagem de pessoa não encontrada', () => {
        findCrushs.encontraCruh(50,50).should.be.equal(100);
    });
});


