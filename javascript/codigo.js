GAME = -1;
BASURA = 8;
POSICION = 7;
//-1 pause 
//1 play
//0 sin iniciar
var score = 0;
tablero = ['v','v','v', 'v','v', 'v', 'v','a',
 	   'v','v','v', 'v','v', 'v', 'v','v', 
	   'v','v','v', 'v','v', 'v', 'v','v',
	   'v','v','v', 'v','v', 'v', 'v','v',
 	   'v','v','v', 'v','v', 'v', 'v','v', 
	   'v','v','v', 'v','v', 'v', 'v','v',
	   'v','v','v', 'v','v', 'v', 'v','v', 
	   'v','v','v', 'v','v', 'v', 'v','v'

];
// b es igual a basura
// v es igual a vacio
// a es igual a aspiradora

numFB=8;  //variable para guardar el numero de fichas blancas que hay en el tablero
numFN=8;  //variable para guardar el numero de fichas negras que hay en el tablero

function MousePos(canvas, evt) { //funcion para buscar la posicion del mouse
   var ClientRect = canvas.getBoundingClientRect();
   return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
}}

function mueveFN(XYI,XYF){ //funcion para mover la ficha negra
                           // la variable XYI es la posicion desde donde se va a mover la ficha, XYF es la posicion a donbde se va a mover
    
    if(tablero[XYF]=='vn'){
      if(tablero[XYI]==='n' || tablero[XYI]==='rn'){
        var  band=0;
        if((XYF+9)==XYI ||(XYF+7)==XYI ){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
          band=1;
        }
       if( (XYF+9*2)==XYI && (tablero[(XYF+9)]=='b' || tablero[(XYF+9)]=='rb')){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
          tablero[XYF+9]='vn';
          band=1;
          numFB-=1;


       }
      if((XYF+7*2)==XYI && (tablero[(XYF+7)]=='b' || tablero[(XYF+7)]=='rb') ){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
          tablero[XYF+7]='vn';
          band=1;
          numFB-=1;


        }
       //////////
       if(tablero[XYI]==='rn'){
       if(((XYF-9)==XYI ||(XYF-7)==XYI )){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
           band=1;

        }
       if( (XYF-9*2)==XYI && (tablero[(XYF-9)]=='b' || tablero[(XYF-9)]=='rb')){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
          tablero[XYF-9]='vn';
          band=1;
          numFB-=1;
       }
       if((XYF-7*2)==XYI && (tablero[(XYF-7)]=='b' || tablero[(XYF-7)]=='rb') ){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
          tablero[XYF-7]='vn';
           band=1;
          numFB-=1;

         }
       }     
        if(band=1){
            if(XYF<8)
               tablero[XYF]="rn"; 
        }
      }
    }
}
function mueveFB(XYI,XYF){
    if(tablero[XYF]=='vn'){
      
      if(tablero[XYI]==='b' || tablero[XYI]==='rb'){
         var band=0;
        if((XYF-9)==XYI ||(XYF-7)==XYI ){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
           band=1;

        }
       if( (XYF-9*2)==XYI && (tablero[(XYF-9)]=='n' || tablero[(XYF-9)]=='rn')){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
          tablero[XYF-9]='vn';
           band=1;
          numFN-=1;


       }
       if((XYF-7*2)==XYI && (tablero[(XYF-7)]=='n' || tablero[(XYF-7)]=='rn')){
          var temp=tablero[XYF];
          tablero[XYF]=tablero[XYI];
          tablero[XYI]=temp;
          tablero[XYF-7]='vn';
           band=1;
          numFN-=1;


        }
        ////////////

        if(tablero[XYI]==='rb'){
             if((XYF+9)==XYI ||(XYF+7)==XYI ){
                var temp=tablero[XYF];
                tablero[XYF]=tablero[XYI];
                tablero[XYI]=temp;
                band=1;
              }
             if( (XYF+9*2)==XYI && (tablero[(XYF+9)]=='n' || tablero[(XYF+9)]=='rn')){
                var temp=tablero[XYF];
                tablero[XYF]=tablero[XYI];
                tablero[XYI]=temp;
                tablero[XYF+9]='vn';
                band=1;
                numFN-=1;


             }
            if((XYF+7*2)==XYI && (tablero[(XYF+7)]=='n' || tablero[(XYF+7)]=='rn') ){
                var temp=tablero[XYF];
                tablero[XYF]=tablero[XYI];
                tablero[XYI]=temp;
                tablero[XYF+7]='vn';
                band=1;
                numFN-=1;

              }

        }


         if(band=1){
            if(XYF<64 && XYF>55)
               tablero[XYF]="rb"; 
        }       
      }
    }
}
function verificaGanador(){
  var band=0;
  // 1 gano negras
  // 2 gano blancas
  // 3 tablas 
  if(numFN==0){
    band=2;
  }
  if(numFB==0){
    band=1;
  }

}
function pintaFichas(ctx,fichaN,fichaB,img,jug){
  ctx.drawImage(img,0, 0, 700, 700);

  for(var i=0;i<8;i++){
    var YI=60*(i+1);
    for(var j=0;j<8;j++){
      var XI=60*(j+1);
      if (tablero[i*8+j]=='a'){
          ctx.drawImage(fichaN,XI, YI, 70, 70);

      }
	if (tablero[i*8+j]==='b'){
          ctx.drawImage(fichaB,XI, YI, 80, 80);

      }
         
    }
  }


//  if(jug==-1){
//    jug='blancas';
//  }
//  else 
//    jug='negras';
 // ctx.fillText("BASURA: "+BASURA,130,570);
//}
}
function calIJ(mousePos){
    //console.log(mousePos);
      var possXY=0;
    if((mousePos.x>=60 || mousePos.x <=60*9) &&
             (mousePos.y>=60 || mousePos.Y<=60*9))
     {
        for(var y=1;y<9;y++){
        var XI=60;
        var YI=60;
        for(var x=1;x<9;x++){
          if((mousePos.x>60*x && mousePos.y >60*y) &&
             (mousePos.x<60*(x+1) && mousePos.y <60*(y+1)))
              possXY =(y-1)*8+(x-1);
       }
      } 
      return possXY;   
     } 
     return -1;
}
function calculaPos(canvas,ctx,fichaN,fichaB,img){
    var band=1;
    var jugador1=0;
    var jugador2=0;
    var turno=1;
    canvas.addEventListener("mousedown", function(evt) 
     {
      
      var mousePos = MousePos(canvas, evt);
      if(band==true){
        jugador1=calIJ(mousePos);
      

        if(((tablero[jugador1]=="n"  || tablero[jugador1]=="rn" )&& turno==1) ||
            ((tablero[jugador1]=="b" || tablero[jugador1]=="rb" )&& turno==-1))
        {         band=-(band); }
        else{
          //turno=1;
          //band=true;

        }

      }
      else{
        jugador2=calIJ( mousePos);
        
        if((tablero[jugador1]=='n' || tablero[jugador1]=='rn')&& turno==1){
          mueveFN(jugador1,jugador2);
        }
        if((tablero[jugador1]=='b'|| tablero[jugador1]=='rb') && turno==-1){
          
          mueveFB(jugador1,jugador2);
        }
        turno=-turno;
        pintaFichas(ctx,fichaN,fichaB,img,turno);
            band=-band;
      }

      //calIJ(mousePos);
      }, false);
   

}
function mover(pos){
	//arriba 1
	//abajo  2
	//derecha 3
	//izquierda 4
	var band=0;
	var dir;
	while(band==0){
		dir= getRandomInt(1,5);
		band=1;
		if(pos<8 && dir==1)
			band=0;	
		if(pos>54 && dir==2)
			band=0;
		if((pos%8)==0 && dir==4)
			band=0;
		if(pos%8==7 && dir==3)
			band=0;
	
		
	}

	if(dir==1)
	      npos=POSICION-8;
	if(dir==2)
	      npos=POSICION+8;
	if(dir==3)
	      npos=POSICION+1;
	if(dir==4)
		npos=POSICION-1;
	
	
	if(tablero[npos]=='b'){BASURA=BASURA-1; score++;
  document.getElementById("score").innerHTML="Score: "+score ;
  }
		

	tablero[POSICION]='v';
	POSICION=npos;
	tablero[POSICION]='a';
	
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function generaBasura(num){
	var pos;
	if(num>63)
		num=63;
	for(var i=0;i<num ;i++){
		pos= getRandomInt(0,64);
		if(tablero[pos]=='v')
			tablero[pos]='b';
		else
			i=i-1;

		
	//	console.log("aleatorio:",pos,tablero);
	}
}
function sleep2(milliseconds) {
	
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);

}
function sleep3(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
function sleep(milliseconds) {
var start = new Date().getTime();
 for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds) {
   break;
  
 }
}
}


function jugar(canvas,ctx,fichaN,fichaB,img){
	  ///while(GAME){
		//funcion para comer
		
		sleep(1000);			
		
		mover(POSICION);
	 //pintaFichas(ctx,fichaN,fichaB,img,1);
	  pintaFichas(ctx,fichaN,fichaB,img,1);

		
		GAME=-1;
		
	//	}
}
 
function time(){
   
  var time = 120; 
  setInterval(() => {
    time--;
   document.getElementById("time").innerHTML="Tiempo: "+time ;
   if(time < 0){time =0;}
 }, 1000);
}

window.onload=function(){

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("tablero");

  var fichaN = document.getElementById("fichaNegra"); 
  var fichaB = document.getElementById("fichaBlanca"); 
  var btr= document.getElementById("btRei");
  var btrIni=document.getElementById("btIni");
  var btrPau=document.getElementById("btPau");

  var cant = document.getElementById("cant");	
  //ctx.drawImage(fichaN,60*1, 60*1, 60, 60);
  //funcion para generar la basura aleatoria
  btr.onclick = function(){
    location.reload();


	tablero = ['v','v','v', 'v','v', 'v', 'v','a',
 	   'v','v','v', 'v','v', 'v', 'v','v', 
	   'v','v','v', 'v','v', 'v', 'v','v',
	   'v','v','v', 'v','v', 'v', 'v','v',
 	   'v','v','v', 'v','v', 'v', 'v','v', 
	   'v','v','v', 'v','v', 'v', 'v','v',
	   'v','v','v', 'v','v', 'v', 'v','v', 
	   'v','v','v', 'v','v', 'v', 'v','v'

		];

	generaBasura(cant.value);
 	pintaFichas(ctx,fichaN,fichaB,img,1);
	POSICION=7;
	BASURA=cant.value;
	GAME=-1;
  }

	
 
  btrIni.onclick = function(){
    score =0;
    document.getElementById("score").innerHTML="Score: "+score ;

   time();
	 // 1 esta corriendo
	 // -1 esta en pause
	 // 0 no se ha iniciado
	GAME=1;

	  espera();	
  }

  async function espera(){
    
	
	await sleep3(1000);
		while(GAME==1){
		//funcion para comer
		
		
        	mover(POSICION);
		pintaFichas(ctx,fichaN,fichaB,img,1);
		if(BASURA==0)
			GAME=-1;
		await sleep3(1000/5);
		 
		
		
		
	}
	await sleep3(1000);


	
  }
  btrPau.onclick = function(){

	
	GAME=-1;
  }

  generaBasura(BASURA);
  pintaFichas(ctx,fichaN,fichaB,img,1);
  //calculaPos(canvas,ctx,fichaN,fichaB,img);
  	
}
