<template>
  <span class="spell">
    <a :href="`#${id}`" :data-wowhead="`spell=${id}`" @click='$emit("drag")'>
      <img :src="icon">
      &nbsp;<small class="requirements" v-if="requirements">{{ requirements }}</small>
      &nbsp;<nobr>{{ name }}</nobr>
    </a>
  </span>
</template>

<style>
  .spell a:hover {
    text-decoration: none;
  }
  .spell img {
    height: 56px;
    width: 56px;
    min-height: 56px;
    min-width: 56px;
  }
</style>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Spell extends Vue {
  @Prop(String) private id!: string;
  private spell: {
    name_enus: string,
    icon: string,
    tooltip_enus: string,
    buff_enus: string,
  } = { name_enus: '', icon: '', tooltip_enus: '', buff_enus: '' };
  private requirements? : string = '';
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
    // http://proger.i-forge.net/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80/[20121112]%20The%20smallest%20transparent%20pixel.html
    return this.spell.icon != '' ? `https://wow.zamimg.com/images/wow/icons/large/${this.spell.icon}.jpg` : 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=';
  }
  private created() {
    if (this.spell.name_enus != '')
      return;
    axios
      .get(`https://www.wowhead.com/tooltip/spell/${this.id}?json&power`)
      .then((response) => {
        this.spell = response.data;
        var requirements = document.createRange()
                      .createContextualFragment(response.data.tooltip_enus)
                      .querySelector('.wowhead-tooltip-requirements');
        if (requirements && requirements.textContent) {
          this.requirements = requirements.textContent.replace(/Requires [^\(]*/, '');
          this.$parent.$emit('spell-requirements', { [this.id]: requirements });
        }
      })
      .catch((error) => console.log(error))
      ;
  }
}
</script>
