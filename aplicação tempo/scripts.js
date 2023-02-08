
var chave = "a9a01f096494baae0f64c4aed2f23da9"

function apresentaNaTela(dados){
  console.log(dados)

  document.querySelector(".nomecit").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".tempmx").innerHTML = "Máxima: " + Math.floor(dados.main.temp_max) + "°C"
  document.querySelector(".tempmm").innerHTML = "Mínima: " + Math.floor(dados.main.temp_min) + "°C"
  document.querySelector(".umi").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%"
  document.querySelector(".situacao-tempo").innerHTML = dados.weather[0].description
  document.querySelector(".image").src = "https://openweathermap.org/img/wn/" 
  + dados.weather[0].icon + ".png"

}
async function buscarCidade(cidade){
var dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
cidade + 
"&appid="  + 
chave  + 
"&lang=pt_br"  +
"&units=metric"
)
.then(resposta =>resposta.json())

apresentaNaTela(dados)

}
 
function cliqueiNoBotao(){
  var cidade = document.querySelector(".input-cidade").value
  

 buscarCidade(cidade)
}
