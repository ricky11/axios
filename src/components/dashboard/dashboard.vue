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
     // console.log(this.email)
      //console.table(users)
      })
      .catch(err => console.log(`ERROR FOUND ${err}`))


//       const newObj = [
//         { fname: "rishi", lname: "uttam", email: "rishi@pmgrouphk.com"},
//         { fname: "jack", lname: "ma", email: 'jack@alibaba.com'},
//       ]

//         const data = []
//       for (let key in newObj) {
//          data.push(newObj[key])

//       }
// console.table(data)
// this.email = data[0].email
// console.log(this.email)
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