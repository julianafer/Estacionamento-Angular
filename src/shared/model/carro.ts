export class Carro {
    _placa: string;
    _modelo: string;
    _cor: string;

    constructor() {
        this._placa = '';
        this._modelo = '';
        this._cor = '';
    }

    get placa() : string {
        return this._placa;
    }

    set placa(placa : string) {
        this._placa = placa;
    }

    get modelo() : string {
        return this._modelo;
    }

    set modelo(modelo : string) {
        this._modelo = modelo;
    }

    get cor() : string {
        return this._cor;
    }

    set cor(cor : string) {
        this._cor = cor;
    }
}
