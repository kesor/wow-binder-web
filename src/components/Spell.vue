<template>
  <a href="#" :data-wowhead="`spell=${id}`">
    <!-- <img :src="icon" />
    x{{ icon }}y
    {{ name }}
    k{{ s }}w -->
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Spell extends Vue {
  @Prop(String) private id!: string;
  private spell?: { name_enus: string, icon: string, tooltip_enus: string, buff_enus: string };
  get name() {
    return this.spell ? this.spell.name_enus : '';
  }
  get tooltip() {
    return this.spell ? this.spell.tooltip_enus : '';
  }
  get buff() {
    return this.spell ? this.spell.buff_enus : '';
  }
  get icon() {
    return this.spell ? `https://wow.zamimg.com/images/wow/icons/large/${this.spell.icon}.jpg` : '';
  }
  get s() {
    return this.spell;
  }
  private mounted() {
    axios
      .get(`https://www.wowhead.com/tooltip/spell/${this.id}?json&power`)
      .then((response) => (this.spell = response.data))
      .catch((error) => console.log(error))
      ;
  }
  // private updated() {
  //   this.$nextTick(() => window.$WowheadPower.refreshLinks());
  // }
}
</script>
