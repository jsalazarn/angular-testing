import { Jugador } from './clase';


describe('Pruebas de clase', ()=>{

    const jugador = new Jugador();

    // CICLO DE VIDA DE LAS PRUEBAS
    // beforeAll();
    // beforeEach();

    // afterAll();
    // afterEach();
    
    it('Debe de retornar 80 de hp, si recibe 20 de daño', ()=>{
        
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);

    });

    it('Debe de retornar 50 de hp, si recibe 50 de daño', ()=>{
        
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);

    });



});

