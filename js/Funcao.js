/* Os Calculos estão armazenados nun varivel chamada calculo, su localização entá no comentário 1*/


var ElementoSelecao2 = "Vertice", cont = 2, Calculos;
/*exibir e escoder calculos*/
 
$(document).ready(function(){
  $("#flip").click(function(){
    $("#Resultado").slideToggle("hide");
  });
});

function Gaia()
{ /*atualizar, necessário caso use o IE ou Mozila*/
   cont = 2;
   Select1.options[Select1.selectedIndex].text = "Vertice";
   Select2.options[Select2.selectedIndex].text = "Face";
   document.getElementById("Caixa1").value = "";
   document.getElementById("Caixa2").value = "";
   document.getElementById("Teste").value = "";
   document.getElementById("Rsp").innerHTML = "Aresta";
   document.getElementById("flip").style.visibility = "hidden";
  var nodes = document.getElementById("x").getElementsByTagName('*');
  document.getElementById("Resultado").style.display = "none"
for(var i = 0; i < nodes.length; i++)
 {
         nodes[i].disabled = false;
 } 
}

function Aleatorio (Id) /*gerar números aleatórios*/
{ var fim;
 cont = 2;
 do {
    document.getElementById(Id).value = Math.floor((Math.random() *19 )+ 2)
  if( !(parseFloat( parseFloat( document.getElementById("Caixa1").value)+ parseFloat(document.getElementById("Caixa2").value) - 2) <= 0)
  || (parseFloat(parseFloat(parseFloat(document.getElementById("Caixa1").value)+ 2) - document.getElementById("Caixa2").value) <= 0)
  || (parseFloat(parseFloat(parseFloat(document.getElementById("Caixa2").value)+ 2) - document.getElementById("Caixa1").value) <= 0)) break;

 } while (true)
}
function Cont() /*zerar contador*/
{
  cont = 2;
}
function Validador() /*valida e testa se os valores stão certos*/
{
   var Vetor = new Array();
   var Validador = false;
   
   Vetor[Select1.options[Select1.selectedIndex].text] = (document.getElementById("Caixa1").value).replace(",",".");
   Vetor[Select2.options[Select2.selectedIndex].text] = (document.getElementById("Caixa2").value).replace(",",".");
 
   
	for (var x in Vetor)
    if (Validador = Vetor[x].trim()=="") { 
	   	  alert("Não há nada digitado no campo: "+x );
	   	  Validador = true;
		  break
		  
	} else if (isNaN(Vetor[x])) {
		  alert("Valor inválido no campo: "+x); 
		  Validador = true;
             	       break;
	} else if (Validador = Vetor[x]<=0)	{
	  alert("Matematicamente Impossivel! "+x+" é negativa ou igual a 0"); 
	  Validador = true;	 
	  break;
	}
	
	if (document.getElementById("Rsp").innerHTML == 'Aresta') 
	{ 	 
	 var total = parseFloat( parseFloat(Vetor["Vertice"])+ parseFloat(Vetor["Face"]) - 2);
    /*1*/  Calculos = 'a = ?'
           +'<br>v = '+Vetor['Vertice']
           +'<br>f = '+Vetor["Face"]
           +'<br><br>a + 2 = v + f'
           +'<br>a + 2 = '+Vetor["Vertice"]+' + '+Vetor["Face"]
           +'<br>a = '+parseFloat(parseFloat(Vetor["Vertice"])+parseFloat(Vetor["Face"]))+' - 2' 
           +'<br>a = '+total;
           
        } else if (document.getElementById("Rsp").innerHTML == 'Vertice') {
         
         var total = parseFloat(parseFloat(parseFloat(Vetor["Aresta"])+ 2) - parseFloat(Vetor['Face']));
     /*1*/Calculos =  'a = '+Vetor['Aresta']
	             +'<br>v = ?'
	             +'<br>f = '+Vetor["Face"]
	             +'<br><br>v + f = a + 2'
	             +'<br>v + '+Vetor["Face"]+' = '+Vetor['Aresta']+' + 2'
	             +'<br>v = '+parseFloat(parseFloat(Vetor["Aresta"])+ 2)+' - '+Vetor['Face'] 
	             +'<br>v = '+total;  
          
	} else {
	   var total = parseFloat(parseFloat(parseFloat(Vetor["Aresta"])+ 2) - parseFloat(Vetor['Vertice']));
       /*1*/  Calculos =  'a = '+Vetor['Aresta']
	             +'<br>v = '+Vetor['Vertice']
	             +'<br>f = ?'
	             +'\<br><br>f + v = a + 2'
	             +'<br>f + '+Vetor["Vertice"]+' = '+Vetor['Aresta']+' + 2'
	             +'<br>f = '+parseFloat(parseFloat(Vetor["Aresta"])+ 2)+' - '+Vetor['Vertice'] 
	             +'<br>f = '+total;  
                 
       }
 if (total <= 0)
 {
      alert ("Matematicamente Impossivel!\nSegundo os calculos a resposta será negativa ou igual a 0");
	  Validador = true;
 }
 if (!Validador)
 {
  if ( isNaN(Vetor['Resposta'] = document.getElementById("Teste").value))
         alert('Campo Resposta Inválida!');
   else if (Vetor['Resposta'].trim() == "")
         alert ('Não há nada digitado no campo Resposta')
   else if (Vetor['Resposta'] == total) {
         alert ('Parabéns\nVocê acertou!');
		 cont = 2;
   }else {
			if (cont == 0) 
			{
			   var nodes = document.getElementById("x").getElementsByTagName('*');
				  for(var i = 0; i < nodes.length; i++)
				  {
                   nodes[i].disabled = true;
				  } 
			   alert('Resposta Incorreta!\nSinto muito, mas suas chances acabaram\nConfira os calculos logo abaixo e descubro onde você errou!');
			    document.getElementById("Limpar").style.visibility = document.getElementById("flip").style.visibility = "visible";
			    document.getElementById("Resultado").innerHTML = Calculos;
			   
			} else  alert ('Resposta Incorreta!\nVocê possui ainda '+(cont--)+' chances');	
		}
  }	
}

function Consertar() /*troca os itens das caixa, tipo se escolher Face na Caixa 1 então colocar Vertice na Caixa 2*/
{
    cont = 2;
	
	var Selecao1 = document.getElementById("Select1"), 
	    Selecao2 = document.getElementById("Select2");
	   
	if (Select1.options[Select1.selectedIndex].text == Select2.options[0].text)
	      document.getElementById("Op1").innerHTML = ElementoSelecao2 ;    
	else if (Select1.options[Select1.selectedIndex].text == Select2.options[1].text)
		  document.getElementById('Op2').innerHTML = ElementoSelecao2 ;
	
      ElementoSelecao2 = Select1.options[Select1.selectedIndex].text;
     
       if ( Select2.selectedIndex == 0) 
	        document.getElementById("Rsp").innerHTML =  Select2.options[1].text;
	   else document.getElementById("Rsp").innerHTML =  Select2.options[0].text;
	   
	   
	    document.getElementById ("Caixa1").placeholder = Select1.options[Select1.selectedIndex].text;
		document.getElementById ("Caixa2").placeholder = Select2.options[Select2.selectedIndex].text;
		document.getElementById ("Teste").placeholder = (document.getElementById("Rsp").innerHTML);
        	
}

