function calcular() {

  var nono_ano = document.getElementById("9ano").value;
  var p_ano = document.getElementById("1ano").value;
  var s_ano = document.getElementById("2ano").value;
  var t_ano = document.getElementById("3ano").value;
  
  var TotalAlunos = Number(nono_ano) + Number(p_ano) + Number(s_ano) + Number(t_ano);

  var resultado = TotalAlunos*10.9*12;

  var n_cb = document.getElementById("nono_ano_cb").checked;
  var p_cb = document.getElementById("p_ano_cb").checked;
  var s_cb = document.getElementById("s_ano_cb").checked;
  var t_cb = document.getElementById("t_ano_cb").checked;
  
  var n_r = document.getElementsByName("nnr");
  for(i = 0; i < n_r.length; i++) { 
    if(n_r[i].checked) {
      var nrv = n_r[i].value;
    }}

  var p_r = document.getElementsByName("pnr");
  for(i = 0; i < p_r.length; i++) { 
    if(p_r[i].checked) {
      var prv = p_r[i].value;
    }}
  
    var s_r = document.getElementsByName("snr");
  for(i = 0; i < s_r.length; i++) { 
    if(s_r[i].checked) {
      var srv = s_r[i].value;
    }}

  var t_r = document.getElementsByName("tnr");
  for(i = 0; i < t_r.length; i++) { 
    if(t_r[i].checked) {
      var trv = t_r[i].value;
    }}

  
  if (n_cb) {
      var corretor_l_n_ano = Number(nrv) * Number(nono_ano); 
  } else { var corretor_l_n_ano = 0; var nrv = 0; }
  
  

  if (p_cb) {
    var corretor_l_p_ano = Number(prv) * Number(p_ano); 
} else { var corretor_l_p_ano = 0; var prv = 0; }

if (s_cb) {
    var corretor_l_s_ano = Number(srv) * Number(s_ano); 
} else { var corretor_l_s_ano = 0; var srv = 0; }

if (t_cb) {
    var corretor_l_t_ano = Number(trv) * Number(t_ano); 
} else { var corretor_l_t_ano = 0; var trv = 0; }

  var TotalCorretores = Number(corretor_l_n_ano) + Number(corretor_l_p_ano) + Number(corretor_l_s_ano) + Number(corretor_l_t_ano);
  var corretores_Letrus = TotalCorretores*2.9*12; 
  
  window.resultado_final = Number(corretores_Letrus) + resultado;
  
  //alert("R$ " + Number(resultado_final.toFixed(2)));

  var TotalRedacao = Number(nrv) + Number(prv) + Number(srv) + Number(trv);

  console.log(nrv);
  console.log(TotalRedacao);
 
if (nono_ano || p_ano || s_ano || t_ano) {
    document.getElementById("resultado").innerHTML = "<div> Valor Anual Total: R$ " + Number(resultado_final.toFixed(2)) + "</div>" 
    + "<div class=\"resultado-container\"> <div>Valor anual por candidato Grupo A: R$ " + ((10.9*12) + (Number(nrv)*2.9*12)).toFixed(2) +  "</div>"
    + "<div>Valor anual por candidato Grupo B: R$ " + ((10.9*12) + (Number(prv)*2.9*12)).toFixed(2) +  "</div>"
    + "<div>Valor anual por candidato Grupo C: R$ " + ((10.9*12) + (Number(srv)*2.9*12)).toFixed(2) +  "</div>"
    + "<div>Valor anual por candidato Grupo D: R$ " + ((10.9*12) + (Number(trv)*2.9*12)).toFixed(2) +  "</div> </div>";

  document.getElementById("totalalunos").innerHTML += "<div>" + Number(TotalAlunos) + "</div>";
  document.getElementById("totalcl").innerHTML += "<div>" + Number(TotalRedacao) + "</div>";
  document.getElementById("totalpreco").innerHTML += "<div> R$ " + Number(resultado_final.toFixed(2)) + "</div>";
  
} else { alert("Insira o número de alunos");}
  
}

function parcelas() {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("output");
  
  output.innerHTML = "<div>" + slider.value + "</div>";

  var valorParcela = document.getElementById("valorParcela");

  valorParcela.innerHTML = "Valor da parcela: R$" + (window.resultado_final/slider.value).toFixed(2);

}

