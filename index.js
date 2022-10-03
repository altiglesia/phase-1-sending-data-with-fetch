// document.addEventListener("DOMContentLoaded", () => {
//     const baseUrl = 'http://localhost:3000/users';
    
//         function submitData () {
//             const formData = {
//                 userName: `me123`,
//                 userEmail: `me123@hotmail.com`,
//             };
        
//             const configurationObject = {
//                     method: "POST",
//                     headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json",
//                     },
//                     body: JSON.stringify(formData),
//                 };

//             fetch(baseUrl, configurationObject)
//             .then(function (response) {
//             return response.json();
//             })
//             .then(function (object) {
//                 console.log(object);
//             })
//             .catch(function (error) {
//                 alert("Bad things!");
//             return fetch
//         });
//     }
// })

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }