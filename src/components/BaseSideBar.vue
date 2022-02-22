<template>
  <aside class="sidebar">
    <div id="logo">
      <base-logo />
    </div>
    <nav class="nav-bar">
      <ul class="list">
        <li class="list-item">
          <i class="fa-solid fa-table-list icon"></i>
          <router-link class="list-item-link" to="/dashboard"
            >Dashboard</router-link
          >
        </li>
        <li class="list-item">
          <i class="fa-solid fa-user-group icon"></i>
          <router-link class="list-item-link" to="/">My Profile</router-link>
        </li>
        <li class="list-item">
          <i class="fa-solid fa-user icon"></i>
          <router-link class="list-item-link" to="/"
            >Company Profile</router-link
          >
        </li>
        <li class="list-item">
          <i class="fa-solid fa-gears icon"></i>
          <router-link class="list-item-link" to="/">Settings</router-link>
        </li>
        <li class="list-item">
          <i class="fa-solid fa-fingerprint icon"></i>
          <router-link class="list-item-link" to="/"
            >Change Password</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="logout">
      <i class="icon-logout fa-solid fa-arrow-right-from-bracket"></i>
      <button class="btn-logout">Logout</button>
    </div>
  </aside>
</template>

<script></script>

<style scoped>

#logo {
  margin-top: 1.5rem;
}

.sidebar {
  background-color: white;
  width: 15em;
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
  width: 100%;
  height: 1.8rem;
  border-radius: 5px;
  padding: 0.8rem 0 0 1rem;
  text-align: left;
}
.list-item-link {
  text-decoration: none;
  color: rgb(78, 78, 78);
  font-family: sans-serif;
  margin-left: 0.4rem;
}

li:nth-of-type(odd) .list-item-link {
  margin-left: 0.7rem;
}

.icon {
  font-size: 1rem !important;
}

.nav-bar .list-item:hover {
  background-color: black;
}

.list-item:hover .icon,
.list-item:hover .list-item-link {
  color: white;
}

.logout {
  position: absolute;
  top: 90%;
  left: 4.5%;
}

.icon-logout{
  margin-top: 20px;
}

.btn-logout {
  margin-left: 0.4rem;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  border: none;
  outline: none;
  background: none;
  transform: translateY(-10%);
}
</style>
