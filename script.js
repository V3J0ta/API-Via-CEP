var btnsubmit = document.getElementById("btn")
btnsubmit.addEventListener("click",(event)=>{
    event.preventDefault()
    var cep = document.getElementById("cep").value
    var url = "https://viacep.com.br/ws/"+cep+"/json/"
    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data)
    var rua = document.getElementById("rua")
    var bairro = document.getElementById("bairro")
    var cidade = document.getElementById("cidade")
    rua.innerHTML = data.logradouro
    bairro.innerHTML = data.bairro
    cidade.innerHTML = data.localidade
    })

})
