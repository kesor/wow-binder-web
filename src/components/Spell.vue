<template>
  <li class="spell">
    <img :src="icon">
    <a :href="`#${id}`" :data-wowhead="`spell=${id}`">{{ name }}</a>
    <span v-if="requirements">{{ requirements }}</span>
    <span v-if="replaces" v-html="replaces"></span>
    <span v-if="$slots.default"><slot></slot></span>
  </li>
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

@Component
export default class Spell extends Vue {
  @Prop(String) private id!: string;
  private requirements: string = '';
  private replaces: string = '';
  private name: string = '';
  private icon: string = '';
  private tooltip: string = '';
  private json: string = '';
  private created() {
    if (this.name !== '') {
      return;
    }
    fetch(`https://www.wowhead.com/tooltip/spell/${this.id}?json&power`)
      .then((response) => {
        if (response.status !== 200) {
          console.error(`Failed to fetch spell data. Code: ${response.status}. Reason: ${response.statusText}`);
          return;
        }
        response.json().then((data) => {
          this.json = data;
          // this.$parent.$emit('spell', { [this.id]: data });
          this.name = data.name_enus;
          this.tooltip = data.tooltip_enus;
          this.icon = `https://wow.zamimg.com/images/wow/icons/large/${data.icon}.jpg`;
          const replaces = document.createRange()
                        .createContextualFragment(this.tooltip)
                        .querySelectorAll('span.q');
          this.replaces = [...replaces]
              .map((q) => (q && q.textContent && /^Replaces /.test(q.textContent)) ? q.innerHTML : undefined)
              .join('');
          const requirements = document.createRange()
                        .createContextualFragment(this.tooltip)
                        .querySelectorAll('.wowhead-tooltip-requirements');
          const textRequirements = [...requirements].map(
            (x) => x.textContent ? x.textContent.replace(/^Requires (.*)$/, '[$1]') : '');
          this.requirements = textRequirements.join(' ');
        });
      });
  }
}
</script>