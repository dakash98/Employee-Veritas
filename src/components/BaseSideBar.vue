<template>
  <aside class="sidebar">
    <base-logo/>
    <nav class="nav-bar">
      <ul class="list">
        <li class="list-item">
          <router-link class="list-item-link" to="/">Dashboard</router-link>
        </li>
        <li class="list-item">
          <router-link class="list-item-link" to="/">My Profile</router-link>
        </li>
        <li class="list-item">
          <router-link class="list-item-link" to="/"
            >Company Profile</router-link
          >
        </li>
        <li class="list-item">
          <router-link class="list-item-link" to="/">Settings</router-link>
        </li>
        <li class="list-item">
          <router-link class="list-item-link" to="/"
            >Change Password</router-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script></script>

<style scoped>
.sidebar {
  background-color: white;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.nav-bar {
  padding-top: 1rem;
}
.list-item {
  list-style-type: none;
  margin: 1.5rem;
}
.list-item-link {
  text-decoration: none;
  color: rgb(78, 78, 78);
  font-family: sans-serif;
}

.list-item:hover {
  background-color: black;
}

.list-item:hover .list-item-link {
  display: inline-block;
  color: white;
  width: 10rem;
  border-radius: 10px;
  height: 2rem;
}
</style>
