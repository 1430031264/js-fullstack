<template>
  <div>
    <ul>
      <li
        v-for="item in items"
        :key="item.id">
        {{item.title}}{{item.quantity}}
        <br/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    items:state => state.items
  }),
}
</script>

<style>

</style>
