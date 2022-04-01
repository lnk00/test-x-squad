<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const drawer: Ref<HTMLElement | undefined> = ref(undefined);

const onDrawerBtnClick = () => {
  if (drawer.value) {
    drawer.value.classList.toggle('closed');
  }
};

const onLogoutBtnClick = () => {
  localStorage.removeItem('user');
  router.push('/');
};
</script>

<template>
  <div>
    <div class="dashboard-container">
      <div class="content"></div>
      <div class="drawer" ref="drawer">
        <div class="drawer-btn" v-on:click="onDrawerBtnClick">X</div>
        <div class="logout-btn" v-on:click="onLogoutBtnClick">Logout</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-container {
  display: flex;
  width: 100vw;
  height: 100vw;

  .content {
    width: 100%;
    height: 100vh;
  }

  .drawer {
    height: 100vh;
    width: 400px;
    background-color: lightgray;
    position: relative;
    padding: 24px;

    &.closed {
      margin-right: -400px;
      transition: all 300ms ease-in-out;
    }

    .logout-btn {
      background-color: black;
      border-radius: 0.25rem;
      padding: 12px;
      color: white;
      width: 200px;
      cursor: pointer;
    }

    .drawer-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      height: 48px;
      width: 48px;
      background-color: lightgray;
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
      top: 48px;
      left: -48px;
    }
  }
}
</style>
