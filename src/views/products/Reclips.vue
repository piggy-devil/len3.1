<template>
  <div class="divide-y divide-gray-100">
    <Nav>
      <NavItem href="/featured" isActive>Featured</NavItem>
      <NavItem href="/popular">Popular</NavItem>
      <NavItem href="/recent">Recent</NavItem>
    </Nav>
    <List>
      <!-- <ListItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" /> -->
      <ListItem :recipe="recipes" />
    </List>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import NavItem from './NavItem.vue'
import List from './List.vue'
import ListItem from './ListItem.vue'

export default {
  props: ['recipes'],
  components: {
    Nav,
    NavItem,
    List,
    ListItem,
  },
}
</script>