export default function editInstrumentoForm(instrumento){
    document.getElementById('nombre').value = instrumento.nombre
    document.getElementById('marca').value = instrumento.marca
    document.getElementById('modelo').value = instrumento.modelo
    document.getElementById('precio').value = instrumento.precio
    document.getElementById('imagen').value = ''
    document.getElementById('costoEnvio').value = instrumento.costoEnvio
    document.getElementById('cantidadVendida').value = instrumento.cantidadVendida
    document.getElementById('descripcion').value = instrumento.descripcion
}