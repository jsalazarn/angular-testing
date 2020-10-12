import { incrementar } from './numeros';


describe('Pruebas de números', ()=> {

    
    it( 'Debe de retornar 100, si el número ingresado es mayor a 100', ()=>{

        const res = incrementar(300);
        expect( res ).toBe(100);

    });

    it( 'Debe de retornar n+1, si el número no es mayor a 100', ()=>{

        const res = incrementar(50);
        expect( res ).toBe(51);

    });


});


