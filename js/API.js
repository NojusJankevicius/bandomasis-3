const serverURL = 'http://localhost:3000';

class API {
  static getCars = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/cars`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }, 1000);
  }

  static deleteCar = (id, success, failure) => {
    fetch(`${serverURL}/cars/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}

API.getCars(
  (duomenys) => console.log('gavau duomenis', duomenys), // success
  (klaida) => console.error('klaida!!!!', klaida) // failure
)


// API.deleteCar(
//   '1', // id
//   (duomenys) => console.log('gavau duomenis', duomenys), // success
//   (klaida) => console.error('klaida!!!!', klaida) // failure
// )
