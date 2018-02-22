<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p> Your email address is: {{email}}</p>
      </div>
</template>


<script>
import axios from "axios"
export default {
  data: function() {
    return {
      email: 'test'
    }
  },
  created() {
    console.log("RUNNING CREATED")
    // axios
    //   .get("/users.json")
    //   .then(res => {
    //     const data = res.data
    //     const users = []
    
    //     for (let key in data) {
    //       const userObj = data[key]
    //       userObj.id = key
          
    //       users.push(userObj)
          
    //     }
    //   this.email = users[0].email
    //   })
    //   .catch(err => console.log(`ERROR FOUND ${err}`))

axios.post(' https://api.backblazeb2.com/b2api/v1/b2_authorize_account', "659e48410dbb:000ab271593248be7c766d60f851bfb7733cd9bc58")
        .then(res => console.log(res))
        .catch(err => console.log(err))

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