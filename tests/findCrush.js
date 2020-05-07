const Namelist = [
    "lucas", "fernandes", 'Ramos'
]

console.log(Namelist)
const somaCrush = (valor1, valor2) => valor1 + valor2;


const encontraCrush = nome =>{
   try {
       validaNome(nome);
       const crushEncontrado = Namelist.find(crush => crush === nome);
       return crushEncontrado  ? crushEncontrado : "Crush não encontrado"
   } catch (err) {
       return err;       
   }
}
 
const validaNome = nome => {
    if(!nome) throw  'Campo nome está vazio'    

    if(typeof nome !== 'string') throw 'Tipo de Dado invalido'
    
    if(nome == '') throw 'Campo vazio'
    
}

module.exports = {
 somaCrush , 
 encontraCrush
}