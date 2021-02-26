
function checkElasticSearch(){
  fetch('http://localhost:9200').then(response => response.json()).then(data => console.log(data));
}


function deleteEmployee(_id){
  return fetch('http://localhost:9200/employees/_doc/'+_id, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => {return data});
}

function savaEmployee(employee){
  return fetch('http://localhost:9200/employees/_doc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: employee })
  .then(response => response.json())
  .then(data => {return data});
}


function loadAllEmployees(){
  // URL von ES Service inklusive des Index und des  + Angabe des Limits der gelieferten Daten
  return fetch('http://localhost:9200/employees/_search/?size=100')
    // Empfang des Response-Objektes und die Konvertierung in ein JSON Objekt
    .then(response => response.json())
    // Empfang der JSON Daten zur Weiterverarbeitung
    .then(data => {return data.hits.hits});
}
