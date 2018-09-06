const API = 'http://localhost:3000/dogs'

class Adapter {
  static getDogTable(){
    return fetch(API)
      .then(res => res.json())
  }
  static updateDogTable(id, data){
    return fetch(`${API}/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
  
}
