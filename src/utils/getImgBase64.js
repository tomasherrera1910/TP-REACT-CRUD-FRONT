export function getImgBase64(){
        return new Promise(function(resolve) {
        let file = document.getElementById('imagen').files[0]
        if(!file) return null
        //Este objeto FileReader te permite leer archivos
        let reader = new FileReader()
        
        //Esta función se ejecuta cuando el reader.readAsDataURL termina 
        reader.onloadend = function (e) {
        file = e.target.result.split("base64,")[1]
        resolve(reader.result)
        }
        
        //Aqui comienza a leer el archivo para posteriormente ejecutar la función onloadend
        reader.readAsDataURL(file)
    })
    }


