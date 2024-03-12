<script setup>
// const { login } = useLogin();

// const formData = reactive({
//   username: "",
//   password: "",
// });

// const handleSubmit = async () => {
//   await login(formData);
// };



const prism = ref(null)

function showSignup(){
  prism.value.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin(){
  prism.value.style.transform = "translateZ(-100px)";
}

function showThankYou(){
  prism.value.style.transform = "translateZ(-100px) rotateX( 90deg)";
}

definePageMeta({
  middleware: 'login'
})
</script>

<template>
 <ErrModal />

<!-- <ul class="nav">
  <li @click="showLogin()">Login</li>
  <li @click="showSignup()">Sign up</li>
  <li @click="showThankYou()">Thank you</li>
</ul> -->
<div class="wrapper">
  <div class="rec-prism" ref="prism">

    <LoginPrismSignin @showThankYou="showThankYou" @showSignup="showSignup"/>

    <LoginPrismSignup @showThankYou="showThankYou" @showLogin="showLogin" @showSignin="showLogin"/>

    <LoginPrismThanks/>
  </div>
</div>

</template>


<style >

/* Dimensions */
:root {
  --prism-height: 450px;
  --prism-length: 450px;
  --prism-depth: var(--prism-length);
  --spacing: 20px;
  --br: 3px;
}

/* Colors */
:root {
  --text-light: #fff;
  --text-dark: #666;
  --blue: #03a9f4;
  --smoke: #f9f9fa;
  --coral: #ff5751;
  --navy-blue: #42509e;
  --green: #7c3aed;
}
body{
  @apply bg-violet-100 w-full h-screen py-20
}
.wrapper {
  width: var(--prism-length);
  height: var(--prism-height);
  /* margin: 60px auto; */
  transform: perspective(1000px) ;
  text-align: left;
  @apply mx-auto ;
}

.rec-prism {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 0.5s ease-in;
}

.face {
  position: absolute;
  width: var(--prism-length);
  height: var(--prism-height);
  padding: var(--spacing);
  background: white;
  border: 3px solid var(--green);
  border-radius: var(--br);
}


.face .content .field-wrapper {
  margin-top: calc(var(--spacing) * 1.5);
}

.face .content .field-wrapper label {
  font-size: 0.85em;
}

.face input[type="text"],
.face input[type="password"],
.face input[type="submit"],
.face textarea {
  -webkit-appearance: none;
  appearance: none;
}

.face-front {
  transform: rotateY(0deg) translateZ(calc(var(--prism-length) / 2));
}



.face-right {
  transform: rotateY(90deg) translateZ(calc(var(--prism-length) / 2));
}


.face-bottom {
  height: var(--prism-depth);
  transform: rotateX(-90deg) translateZ(calc(var(--prism-height) - (var(--prism-depth) / 2)));
}

.nav {
  margin: var(--spacing) 0;
  padding: 0;
}

.nav li {
  display: inline-block;
  font-size: 1em;
  margin: 0 calc(var(--spacing) / 2);
  color: var(--navy-blue);
  cursor: pointer;
}

.nav li:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20px;
  border-bottom: 1px solid var(--navy-blue);
}

.nav li:hover:after {
  width: 100%;
}

/* .psw,
.signup,
.signin {
  display: block;
  margin: var(--spacing) 0;
  font-size: 0.75em;
  text-align: center;
  cursor: pointer;
} */




</style>