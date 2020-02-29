<template>
  <b-navbar toggleable="lg" type="" variant="">
    <div class="container">
      <b-navbar-brand href="#" id="page_title">
      <img src="@/assets/logo.png" alt="Vue.js PWA">DotaStats</b-navbar-brand>

      <b-navbar-toggle class="navbar-dark" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/heroes">Heroes</b-nav-item>
          <b-nav-item href="#">Pro Players</b-nav-item>
          <!-- <b-nav-item-dropdown right> -->
            <!-- Using 'button-content' slot -->
            <!-- <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style scoped>
#page_title { 
  text-transform: uppercase;
  letter-spacing: .5em;
  font-size: 1.5em;
}

@media screen  and (max-width: 540px) {
  #page_title {
    letter-spacing: .2em;
    font-size: 1.2em;
  }
}

#page_title img { 
  max-height: 50px;
  width: auto;
  margin-right: .5em;
}

.navbar-toggler {
  border: 1px solid #C7503C;
}

</style>