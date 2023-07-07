    var cont = 0;
    var imagen = document.getElementById('imagenAhorcado');
    var prueba = "";

    let Array = [
    'ARMADILLO',
    'PANDORA',
    'ESCONDER',
    'ALEGAR',
    'ESCUELA',
    'PERDIDA',
    'MURCIELAGO',
    'FRESCO',
    'GUANTELETE',
    'AGUANTE',
    'PUERTA',
    'ESCALABLE',
    'VARIABLE',
    'CONSTANTE',
    'ARGON'
    ];


    const btn = document.getElementById('jugar');
    var numAleatorio = Math.floor(Math.random()*(9-0+1)+0);
    const palabraFinal = Array[numAleatorio];

    function iniciar(event){
        /*console.log(numAleatorio)*/
                                                                                
        const parrafo = document.getElementById('palabra');
        for( let i = 0; i < Array[numAleatorio].length; i++ ){
        const span = document.createElement('span');
            parrafo.appendChild(span);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            const parrafo1 = document.createTextNode('___ ');
            span.appendChild(parrafo1);
        }
        console.log(palabraFinal);

    }
    iniciar();
    
    const btn_letras = document.querySelectorAll( "#letras button");

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[i].addEventListener( 'click', click_letras );
    }

    function click_letras(event){
        const spans = document.querySelectorAll('#palabra span');
        const button = event.target; 
        button.disabled = true;

        const letra = button.innerHTML;
        var acierto = false;
        
        //para ver que letra ingreso y si es correcta meterla en el span
        for( let i = 0; i < palabraFinal.length; i++ ){
            if( letra == palabraFinal[i] ){
                spans[i].innerHTML = letra;
                acierto = true;
            }
        }

        //Comprobar si gano
        for( let i = 0; i < palabraFinal.length; i++ ){
            if(i == 0){
                prueba = ""; 
            }
            prueba = prueba + spans[i].innerHTML;
        }
        
        //if para cambiar de imagen
        if(acierto == false){
            cont ++;
        }
        if(prueba == palabraFinal){
            alert("🎊🥳🥳Felicidades has ganado🥳🥳🎊")
            location.reload();
        }
        if(cont == 1){
            imagen.src = "img/img1.png";
        }else if(cont == 2){
             imagen.src = "img/img2.png";
        }else if(cont == 3){
             imagen.src = "img/img3.png";
        }else if(cont == 4){
             imagen.src = "img/img4.png";
        }else if(cont == 5){
             imagen.src = "img/img5.png";
        }else if(cont == 6){
            imagen.src = "img/img6.png";
        }else if(cont == 7){
            alert("Lo siento Usted ha perdido🥲. La parabra era = "+palabraFinal);
            location.reload();
        }
        
        
        
                                                                                                                                                                                                                                                                                                                                                                                    
    }

    

