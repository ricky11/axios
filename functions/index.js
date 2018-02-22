const functions = require('firebase-functions');
const axios = require('axios');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.fbget = functions.https.onRequest((request, response) => {
    response.send("WORKING...")
axios.get("https://axios-42402.firebaseio.com/users.json")
      .then(res => {
        const data = res.data
        const users = []
    
        for (let key in data) {
          const userObj = data[key]
          userObj.id = key
          
          users.push(userObj)
          console.log(userObj)
          
        }
        console.log("finished")
      console.log(users[0].email)
    //  response.send(users[0].email)
      })
      .catch(err => console.log(`ERROR FOUND ${err}`))
      
     
    })


exports.b2auth = functions.https.onRequest((request, response) => {
    response.send("WORKING...b2auth")
    console.log('RUNNNG CLOUD FUNCTION FOR AXIOS')
    axios.post('https://api.backblazeb2.com/b2api/v1/b2_authorize_account', "659e48410dbb:000ab271593248be7c766d60f851bfb7733cd9bc58")
.then(res => console.log(res))
.catch(err => console.log(err))
})