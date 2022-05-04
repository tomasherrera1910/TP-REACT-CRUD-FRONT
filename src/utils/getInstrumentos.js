export default function getInstrumentos(){
    return fetch(`http://localhost:3001/instrumentos`).then(response => response.json())
}