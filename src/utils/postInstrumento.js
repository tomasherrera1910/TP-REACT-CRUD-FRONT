export default function postInstrumento(newInstrumento){
    fetch(`http://localhost:3001/instrumentos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newInstrumento)
    }).then(response => response.json())
}