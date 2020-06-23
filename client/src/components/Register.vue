<template>
  <div>
    <h1>Register</h1>

    <input 
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>

      <input 
      type="Password"
      name="Password"
       v-model="password"
      placeholder="Password"/>
      <!-- <br> -->
      <button
        @click="register">
        Register
     </button>


  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''  
    }
      },
       methods: {
        async register () {
            await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          // console.log(response.data)
    }
  }
}
</script>


<style scoped>
</style>
