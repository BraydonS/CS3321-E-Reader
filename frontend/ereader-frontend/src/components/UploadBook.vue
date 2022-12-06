<template>
    <div className="wrapper">
        <div className="modal">
            <form @submit.prevent="">
            <label for="title">Title</label>
            <input selected id="title" type="text"  />
            <label for="password">Password</label>
            <input id="password" type="password"  />
            <div id="submit-buttons">
                <button class="form-button" type="submit">Login</button>
            </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.modal{
  width: 300px;
  border-radius: 10px;
  background-color: white;
  padding: 20px 20px;
  z-index: 1200;
}

.wrapper{
  background-color: rgba(0,0,0,0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: absolute;
  top: o;
}

</style>
