const should  = require('should');
const findCrushs = require('../tests/findCrush')
describe('find crushs', () => {
      it('soma crushs', () => {
          findCrushs.somaCrush(2,3).should.be.equal(5);
      })
      it('somar dois numeros 50 e 50 e retornará 100', () => {
        findCrushs.somaCrush(50,50).should.be.equal(100);
    });
    it('informar que o campo nome está vazio', () => {
        findCrushs.encontraCrush().should.be.equal('Campo vazio');
    });
    it('msg de tipo invalido', () => {
        findCrushs.encontraCrush(16616).should.be.equal('nome nao encontrado');
    });
    it('Passar um nome e deve retornar mensagem de pessoa não encontrada', () => {
        findCrushs.encontraCrush('lucasFR').should.be.equal('nome nao encontrado');
    });
});


