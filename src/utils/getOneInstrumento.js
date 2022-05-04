export default function getOneInstrumento(id){
    return fetch(`http://localhost:3001/instrumentos/${id}`).then(response => response.json())
}