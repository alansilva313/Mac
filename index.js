async function busca(){
     const andress = document.querySelector('#macName').value
    const mac = await fetch(`https://api.macaddress.io/v1?apiKey=at_HmlrqlXsGPq77BWjQAgBcCPnRhMTP&output=json&search=${andress}`)
    const dados = await mac.json()

    if(!andress == ""){
        document.querySelector("#p").innerHTML = dados.vendorDetails.companyName
        
    }else {
        document.querySelector("#p").innerHTML = ""
    }

 
   

}

function apagar(){
    document.querySelector("#p").innerHTML = ""
}