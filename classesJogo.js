class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo.toLowerCase() === 'mago') {
            ataque = 'magia';
        } else if (this.tipo.toLowerCase() === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo.toLowerCase() === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo.toLowerCase() === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'um ataque básico';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Change', 14, 'mago');
const heroi2 = new Heroi('Alpha', 28, 'guerreiro');
const heroi3 = new Heroi('Chou', 22, 'monge');
const heroi4 = new Heroi('Hayabusa', 25, 'ninja');


heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
