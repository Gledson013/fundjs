
function myFunction() {
	let i = 0;
    
	
    for(i = 1; i <= 20; i++){
    	let resto = 0;
        let tipo = "impar";
       
        resto = i % 2;
        if (resto == 0){
        	tipo = "par";
        }
        resto = i % 4;
        if (resto == 0){
            document.write("plim","-", tipo, "<br>");
        } else {
    		document.write(i,"-", tipo, "<br>");
        }
    }
}

function contarItemsDaLista(){
    // tupla cores
    const cores = ["azul", "amarelo", "vermelho", "verde", "laranja", "roxo"]; //array
    document.getElementById("demo").innerHTML = "A lista tem " + cores.length + "item(s)";
}