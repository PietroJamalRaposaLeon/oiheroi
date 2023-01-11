var predio1Img, predio2Img, predio3Img, predio4Img, predio5Img, predio6Img, predio7Img, predio8Img, predio8Img, predio9Img; 

var predioChamas, predioChamasImg;

var heroi, heroiImg, monstro, monstroImg;

//criar vida
var vida = 100;
//criar pontuação
var ponto = 0;

function preload() {
   predio1Img = loadImage("img/predio1.png");
   predio2Img = loadImage("img/predio2.png"); 
   predio3Img = loadImage("img/predio3.png");
   predio4Img = loadImage("img/predio4.png");
   predio5Img = loadImage("img/predio5.png");
   predio6Img = loadImage("img/predio6.png");
   predio7Img = loadImage("img/predio7.png");
   predio8Img = loadImage("img/predio8.png");
   predio9Img = loadImage("img/predio9.png")

   heroiImg= loadImage("img/super-heroi.png");
   monstroImg= loadImage("img/monstro.png");
}

function setup()
{
    createCanvas(1200,450);

    //criar sprite do herói
    heroi = createSprite(200,200);

    //criar sprite do monstro
    monstro = createSprite(400,400)

    
}

function draw()
{
    
    background("black");

    //exibir pontuação
    text("Pontuação"+ponto,500,500);

    //exibir vidas
    text("vida"+vida,600,500);



    //criar regras 
    //se o herói tocar no prédio perde vida
    if(heroi.isTouching(predio)){
        vida -=10;
    }
    //como o herói ganha pontos
    if(heroi.isTouching()){

    }
    //como ele recupera vida
    if(heroi.isTouching()){

    }
    //quando o jogo acaba
    if(vida === 0){
        
    }
    //quando o monstro aparece


    predios();
    drawSprites();
}


function predios(){
    if(frameCount % 80 === 0){
        var predio = createSprite(1100,397);
        predio.velocity.x = -2;

        var rand = Math.round(random(1,9));

        switch (rand) {
            case 1:
                predio.addImage("predio",predio1Img);
                predio.scale = 0.2;
                break;
            
            case 2: 
                predio.addImage("predio",predio2Img);
                predio.scale = 0.2;
                break;

            case 3: 
                predio.addImage("predio",predio3Img);
                predio.scale = 0.2;
                break;

            case 4: 
                predio.addImage("predio",predio4Img);
                predio.scale = 0.2;
                break;

            case 5: 
                predio.addImage("predio",predio5Img);
                predio.scale = 0.2;
                break;

            case 6: 
                predio.addImage("predio",predio6Img);
                predio.scale = 0.2;
                break;
            
            case 7: 
                predio.addImage("predio",predio7Img);
                predio.scale = 0.2;
                break;
            
            case 8: 
                predio.addImage("predio",predio8Img);
                predio.scale = 0.2;
                break;

            case 9: 
                predio.addImage("predio",predio9Img);
                predio.scale = 0.2;
                break;
        
            default:
                break;
        }
    }
}


