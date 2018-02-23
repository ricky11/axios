<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p> Your email address is: {{email}}</p>
      </div>
</template>


<script>
import axios from '../../axios-auth'
export default {
  data: function() {
    return {
      email: ''
    }
  },
  created() {
    console.log("RUNNING CREATED")
    axios
      .get("/users.json")
      .then(res => {
        const data = res.data
        const users = []
    
        for (let key in data) {
          const userObj = data[key]
          userObj.id = key
          
          users.push(userObj)
          
        }
      this.email = users[0].email
      })
      .catch(err => console.log(`ERROR FOUND ${err}`))


//BACKBLAZE POST FAILED CORS ERROR, AND SERVER FUNCTION DO NOT WORK
// axios.post(' https://api.backblazeb2.com/b2api/v1/b2_authorize_account', "659e48410dbb:000ab271593248be7c766d60f851bfb7733cd9bc58")
//         .then(res => console.log(res))
//         .catch(err => console.log(err))


//AZURE

//TENNANT ID : 61ca6476-8cfe-4e7f-94fc-21c7e3113a55
//APPLICATION ID/CLIENTID : 7e421c3a-e6a0-4023-9fc1-dd25a22bca43
//CLIENT SECRET : Fzmw0g89C80+U/fL6XmKEh7eQEVsz+Cc/G1i7oE7Gi0=
//grant _type = client_credentials
//SUBSRIPTION ID : d70728ea-488a-4cf2-8d99-54e796b1300c

// axios.post('https://azdownload.sinosend.com/?comp=list')
// .then(res => console.log(res))
// .catch(err => console.log(err))


    }


}
</script>
<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>