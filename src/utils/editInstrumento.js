export default function editInstrumento(editInstrumento, id){
    fetch(`http://localhost:3001/instrumentos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(editInstrumento)
    }).then(response => response.json())
}