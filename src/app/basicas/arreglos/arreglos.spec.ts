import { obtenerRobots } from './arreglos';


describe('Pruebas de arreglos', ()=>{

    it('Debe de retornar al menos 3 robots', ()=>{

        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3); //Al menos deben ser 3
        // expect(res.length).toBe(3); //Debe ser solo 3

    });

    it('Debe de existir Megaman y Ultron', ()=>{

        const res = obtenerRobots();
        expect(res).toContain('Megaman');
        expect(res).toContain('Ultron');
        
    });

});

