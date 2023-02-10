<script>
export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        }
      );
      const status = await response.status;
      console.log(status);
      if (status == "200") {
        const { user, token } = await response.json();
        localStorage.name = user.name;
        this.$router.push("/admin/dashboard");
      } else {
        alert("Hibas felhasználónév vagy jelszó!");
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="login-wrap">
      <div class="login-html">
        <label class="tab">ELENORA Admin bejeltkezés</label>
        <form @submit.prevent="login">
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">Felhasználónév</label>
                <input v-model="username" id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">Jelszó</label>
                <input
                  v-model="password"
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check"
                  ><span class="icon"></span> Bejeltkezve maradok</label
                >
              </div>
              <div class="group">
                <input type="submit" class="button" value="Belépek" />
              </div>
              <div class="hr"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  widows: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  margin: 0;
  color: #6a6f8c;
  background: #4d70ff;
  font: 600 16px/18px "Open Sans", sans-serif;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}

.login-wrap {
  border-radius: 20px;
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
  background: url("../../assets/images/webp/IMG_1721.webp") no-repeat center;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.login-html {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(62, 81, 127, 0.739);
}

.login-html .tab,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
}
.tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.tab {
  color: #fff;
  border-color: #1161ee;
}
.login-form {
  min-height: 145px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-form .group {
  margin-bottom: 15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group input[data-type="password"] {
  text-security: circle;
  -webkit-text-security: circle;
}
.login-form .group .label {
  color: #aaa;
  font-size: 12px;
}
.login-form .group .button {
  background: #1161ee;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-form .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-form .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-form .group .check:checked + label {
  color: #fff;
}
.login-form .group .check:checked + label .icon {
  background: #1161ee;
}
.login-form .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-html
  .sign-in:checked
  + .tab
  + .sign-up
  + .tab
  + .login-form
  .sign-in-htm {
  transform: rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
  transform: rotate(0);
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}
.foot-lnk {
  text-align: center;
}
</style>
