<template>
  <div id="app" class="container">
    <Classes/>
    <Keyboard/>
    <Spells spellID="188499"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Classes from './components/Classes.vue';
import Keyboard from './components/Keyboard.vue';
import Spells from './components/Spells.vue';

@Component({
  components: {
    Classes,
    Keyboard,
    Spells,
  },
})
export default class App extends Vue {
  private created(event: string) {
    // document.addEventListener("keyup", this.handleKeyUp);
    // document.addEventListener("keydown", this.handleKeyDown);
  }
  private destroyed() {
    // document.removeEventListener("keyup", this.handleKeyUp);
    // document.removeEventListener("keydown", this.handleKeyDown);
  }
  private handleKeyUp(e: KeyboardEvent) {
    // console.log("keyup", e.which);
  }
  private handleKeyDown(e: KeyboardEvent) {
    // console.log("keydown", e.which);
    // console.log("keydown keycode", Vue.config.keyCodes[e.which]);
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
#app {
  text-align: center;
  margin: 0 auto;
}
</style>