export default function deleteInstrumento(id){
    
    fetch(`http://localhost:3001/instrumentos/${id}`, {
        method : 'DELETE'
    })
    .then(() => alert('Instrumento eliminado!'))
}