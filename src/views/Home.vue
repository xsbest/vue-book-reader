<template>
  <div class="home">
    <div id="read">
      sadsadasdasAAFASFSA
      <span class="icon-bookmark">asdasd</span>
      <span class="icon-clock"></span>

    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'
import { mapGetters } from 'vuex'
global.ePub = Epub
export default {
  computed: {
    ...mapGetters(['test'])
  },
  name: 'home',
  mounted () {
    this.$store.dispatch('setTest', 9).then(() => {
      console.log(this.test)
    })
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/global";
#read{
  font-family: 'Days One';
  font-size: px2rem(20);
}
.icon-bookmark{
  color: #f00;
}
</style>
