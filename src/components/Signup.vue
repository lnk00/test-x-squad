<script setup lang="ts">
import Container from 'typedi';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Fetcher from '../services/fetcher.service';

const router = useRouter();

const email = ref('');
const name = ref('');

const fetcherService: Fetcher = Container.get(Fetcher);

const onSignupClick = () => {
  fetcherService.post(email.value, name.value).then((res) => {
    if (res) {
      localStorage.setItem('user', JSON.stringify(res));
      router.push('/dashboard');
    }
  });
};
</script>

<template>
  <div class="signup">
    <div class="container">
      <div class="logo-container">
        <img alt="Vue logo" src="./../assets/logo-x-squad.png" />
      </div>
      <form class="form-container">
        <div class="email-container">
          <label for="fname">email</label>
          <input type="email" id="email" name="email" v-model="email" />
        </div>
        <div class="name-container">
          <label for="lname">name</label>
          <input type="text" id="name" name="name" v-model="name" />
        </div>
        <div class="signup-btn" v-on:click="onSignupClick">Signup</div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.signup {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 50%;
    height: 50%;
    border-radius: 0.25rem;
    background-color: lightgray;
    padding: 24px;

    .logo-container {
      width: 62px;
      height: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      background-color: black;

      img {
        width: 70%;
      }
    }

    .form-container {
      height: calc(100% - 62px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      .email-container,
      .name-container {
        display: flex;
        flex-direction: column;
        align-items: baseline;

        input {
          height: 24px;
          width: 70%;
          margin-top: 12px;
        }
      }

      .signup-btn {
        background-color: black;
        border-radius: 0.25rem;
        padding: 12px;
        color: white;
        width: 50%;
        margin-top: 24px;
      }
    }
  }
}
</style>
