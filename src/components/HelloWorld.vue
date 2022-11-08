<template>
  <div>
    <div class="container" @click="login">
      <div style="padding: 8px">
        <img src="../assets/g-logo.png" style="width: 18px" />
      </div>
      <div class="google-text">Sign in with GOOGLE</div>
      <!-- <div>
    <button class="google-btn"
    @click="login">Sign in with Google</button>
    </div> -->
    </div>
    <!-- <div>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div> -->
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
export default {
  methods: {
    login() {

      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  width: 210px;
  height: 40px;
  box-shadow: 1px 1px 1px 1px gray;
}

.container :hover {
  cursor: pointer;
}
.google-text {
  padding: 8px 8px 8px 16px;
  font-size: 14px;
}
</style>