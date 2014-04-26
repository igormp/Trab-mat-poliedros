﻿/* Os Calculos estão armazenados nun varivel chamada calculo, sua localização entá no comentário 1*/


var ElementoSelecao2 = "Vertice", cont = 2, Calculos;
/*exibir e escoder calculos*/
 
$(document).ready(function(){
  $("#flip").click(function(){
    $("#Resultado").slideToggle("hide");
  });
});

function ApagarValores()
{
   cont = 2;
   document.getElementById("Caixa1").value = "";
   document.getElementById("Caixa2").value = "";
   document.getElementById("Teste").value = "";
  
   document.getElementById("flip").style.visibility = "hidden";
   document.getElementById("Resultado").style.display = "none"
   
 var nodes = document.getElementById("x").getElementsByTagName('*');
 for(var i = 0; i < nodes.length; i++)
 {
         nodes[i].disabled = false;
 } 
  
}
function Gaia()
{ /*atualizar, necessário caso use o IE ou Mozila*/

   /*select 1*/
   Select1.options[0].selected = "selected";
   document.getElementById ("Caixa1").placeholder =  Select1.options[0].text = "Vertice";
   Select1.options[1].text = "Face";  
   Select1.options[2].text = "Aresta"; 
   
   /*select 2*/
   Select2.options[0].selected = "selected";
   document.getElementById ("Caixa2").placeholder = Select2.options[0].text = "Face";
   Select2.options[1].text = "Aresta"; 
   
   /*resposta*/
   document.getElementById ("Teste").placeholder =  document.getElementById("Rsp").innerHTML = "Aresta";
   ApagarValores();
 }
   
function Aleatorio (Id) /*gerar números aleatórios*/
{ 
 cont = 2;
 do {                                                   
    document.getElementById(Id).value = Math.floor((Math.random() * 36)+ 4)
  if( !(parseFloat( parseFloat( document.getElementById("Caixa1").value)+ parseFloat(document.getElementById("Caixa2").value) - 2) <= 0)
  || (parseFloat(parseFloat(parseFloat(document.getElementById("Caixa1").value)+ 2) - document.getElementById("Caixa2").value) <= 0)
  || (parseFloat(parseFloat(parseFloat(document.getElementById("Caixa2").value)+ 2) - document.getElementById("Caixa1").value) <= 0)) break; /*validação*/

 } while (true)
}
function Cont() /*zerar contador*/
{
  cont = 2;
}
function Validador() /*valida e testa se os valores estão certos*/
{
   document.getElementById("Alert").innerHTML = ''; /*Isso não é necessário, já que sempre haverá uma janela informando ao usuário, 
													porém pra garantir coloquei caso haja bugs*/
   var Vetor = new Array();
   var Validador = false;
   
   Vetor[Select1.options[Select1.selectedIndex].text] = (document.getElementById("Caixa1").value).replace(",",".");
   Vetor[Select2.options[Select2.selectedIndex].text] = (document.getElementById("Caixa2").value).replace(",",".");
 
   
	for (var x in Vetor)
    if (Validador = Vetor[x].trim()=="") { 
	   	  document.getElementById("Alert").innerHTML = "Não há nada digitado no campo: "+x ;
	   	  Validador = true;
		  break
		  
	} else if (isNaN(Vetor[x])) {
		  document.getElementById("Alert").innerHTML = "Valor inválido no campo: "+x; 
		  Validador = true;
             	       break;
	} else if (Validador =  (Vetor[x] % 1 != 0 || Vetor[x]<=0))	{
	  document.getElementById("Alert").innerHTML = "Matematicamente Impossivel! "+x+" precisa ser natural e diferente de 0"; 
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
if (!Validador)
 {
   if (total <= 0)
 {
      document.getElementById("Alert").innerHTML =  "Matematicamente Impossivel!\nSegundo os calculos a resposta será negativa ou igual a 0";
	  Validador = true;
 }
 
  if ( isNaN(Vetor['Resposta'] = document.getElementById("Teste").value))
         document.getElementById("Alert").innerHTML =  'Campo Resposta Inválida!';
   else if (Vetor['Resposta'].trim() == "")
       document.getElementById("Alert").innerHTML = 'Não há nada digitado no campo Resposta';
   else if (Vetor['Resposta'] == total) {
      document.getElementById("Alert").innerHTML = 'Parabéns!\nVocê acertou!';
		 cont = 2;
   }else {
			if (cont == 0) 
			{
			  var nodes = document.getElementById("x").getElementsByTagName('*');
				  for(var i = 0; i < nodes.length; i++)
				  {
                   nodes[i].disabled = true;
				  } 
			   document.getElementById("Alert").innerHTML = 'Resposta Incorreta!\nSinto muito, mas suas chances acabaram\nConfira os calculos logo abaixo e descubra onde você errou!';
			    document.getElementById("flip").style.visibility = "visible";
			    document.getElementById("Resultado").innerHTML = Calculos;
			   
			} else  document.getElementById("Alert").innerHTML = 'Resposta Incorreta!\nVocê possui ainda '+(cont--)+' chances';	
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
		  document.getElementById("Op2").innerHTML = ElementoSelecao2 ;
	
      ElementoSelecao2 = Select1.options[Select1.selectedIndex].text;
     
       if ( Select2.selectedIndex == 0) 
	        document.getElementById("Rsp").innerHTML =  Select2.options[1].text;
	   else document.getElementById("Rsp").innerHTML =  Select2.options[0].text;
	   
	   
	    document.getElementById ("Caixa1").placeholder = Select1.options[Select1.selectedIndex].text;
		document.getElementById ("Caixa2").placeholder = Select2.options[Select2.selectedIndex].text;
		document.getElementById ("Teste").placeholder = (document.getElementById("Rsp").innerHTML);
        	
}

