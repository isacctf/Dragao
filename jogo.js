
class Sprite {
    
    constructor(x, y, larg, alt, vermelho, verde, azul, img) {
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
        this.vermelho = vermelho;
        this.verde = verde;
        this.azul = azul;
        this.img = img;
    }

    desenha(ctx) {
        if (this.img) {
            ctx.drawImage(this.img, this.x, this.y, this.larg, this.alt);
        } else {
            ctx.fillStyle = 'rgb(' + this.vermelho + ',' + this.verde + ',' + this.azul + ')';
            ctx.fillRect(this.x, this.y, this.larg, this.alt);
        }
    }
}

let canvasEl = document.querySelector('#jogo');
let ctx = canvasEl.getContext('2d');
ctx.imageSmoothingEnabled = false;

let imgArqueira = new Image();
imgArqueira.src = 'imgs/arqueira.png';
let arqueira = new Sprite(50, 50, 128, 150, 0, 0, 0, imgArqueira);

let imgDragao = new Image();
imgDragao.src = 'imgs/dragao.png';
let dragao = new Sprite(855, 120, 250, 250, 0, 0, 0, imgDragao);

let imgFogo = new Image();
imgFogo.src = 'imgs/bola.fogo.png';
let fogos = [];
fogos.push(new Sprite(800, 200, 40, 40, 0, 0, 0, imgFogo));
fogos.push(new Sprite(550, 175, 40, 40, 0, 0, 0, imgFogo));
fogos.push(new Sprite(675, 225, 40, 40, 0, 0, 0, imgFogo));

let imgFlecha = new Image();
imgFlecha.src = 'imgs/flecha.png';
let flechas = [];
flechas.push(new Sprite(300, 285, 90, 27, 0, 0, 0, imgFlecha));
flechas.push(new Sprite(600, 285, 90, 27, 0, 0, 0, imgFlecha));

let cenarios = [];
cenarios.push(new Sprite(0, 470, 1100, 30, 80, 43, 24));
cenarios.push(new Sprite(0, 440, 1100, 30, 121, 71, 44));
cenarios.push(new Sprite(0, 410, 1100, 30, 153, 101, 64));
cenarios.push(new Sprite(0, 360, 1100, 50, 97, 181, 44));


imgArqueira.addEventListener('load', (evento) => {
    desenhaJogo();
});

canvasEl.addEventListener('mousemove', (evento) => {
    arqueira.x = evento.offsetX - arqueira.larg/3;
    arqueira.y = evento.offsetY - arqueira.alt/2;
    desenhaJogo();
});

function desenhaJogo() {
    ctx.clearRect(0, 0, 1100, 500);
    arqueira.desenha(ctx);
    dragao.desenha(ctx);

    for (let cenario of cenarios) {
        cenario.desenha(ctx);
    }

    for (let fogo of fogos) {
        fogo.desenha(ctx);
    }

    for (let flecha of flechas) {
        flecha.desenha(ctx);
    }
}