<template>
  <li class="spell" :id="`spell-${id}`" draggable="true" @dragstart.stop="dragstart">
    <img :src="icon">
    &#32;
    <a :href="`#${id}`" :data-wowhead="`spell=${id}`" draggable="false">{{ name }}</a>
    &#32;
    <template v-for="req in requirements" v-if="requirements">
      <small :key="req" class="badge badge-info">{{ req }}</small>
      &#32;
    </template>
    <span v-if="replaces" v-html="replaces"></span>
    &#32;
    <span v-if="$slots.default"><slot></slot></span>
  </li>
</template>

<style>
  .spell a:hover {
    text-decoration: none;
  }
  .spell img {
    pointer-events: none;
    height: var(--imageHeight)px;
    width: var(--imageWidth)px;
    min-height: 56px;
    min-width: 56px;
  }
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Spell extends Vue {
  @Prop(String) private id!: string;
  @Prop(String) private klass!: string;
  private imageHeight = 56;
  private imageWidth = 56;
  private requirements: string[] = [''];
  private replaces: string = '';
  private name: string = '';
  private icon: string = '';
  private tooltip: string = '';
  private json: string = '';

  private dragstart(e: DragEvent) {
    const target = e.target as HTMLElement;
    if (!target || !target.querySelector) { return; }
    const image = target.querySelector('img') || e.target;
    e.dataTransfer.setDragImage(image as Element, this.imageHeight / 2, this.imageWidth / 2);
    $WowheadPower.hideTooltip();
    console.log(e.target);
  }

  private extractReplaces() {
      const replaces = document.createRange()
                    .createContextualFragment(this.tooltip)
                    .querySelectorAll('span.q');
      this.replaces = [...replaces]
          .map((q) => (q && q.textContent && /^Replaces /.test(q.textContent)) ? q.innerHTML : undefined)
          .join('');
      return this.replaces;
  }

  private extractRequirements() {
    const requirements = document.createRange()
                  .createContextualFragment(this.tooltip)
                  .querySelectorAll('.wowhead-tooltip-requirements');
    this.requirements = Array.from(new Set([...requirements].map(
      (req) => {
        let text = '';
        if (req.textContent) {
          text = req.textContent
            .replace(/^Requires (.*)$/, '$1')
            .replace(this.klass, '')   // class name
            .replace(/\(/, '')         // opening brace before spec names
            .replace(/\)/, '')         // closing brace after spec names
            .replace(/.*Weapon.*/, '') // weapon requirements
            .replace(/.*Two-Handed.*/, '') // weapon requirements
            .replace(/.*Sword.*/, '')      // weapon requirements
            .replace(/.*Staves.*/, '')      // weapon requirements
            ;
        }
        return text.trim().split(/ ?(level \d*) ?|, /);
      },
    ).reduce((a, b) => [...a, ...b], []).filter(Boolean)));
    return this.requirements;
  }

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
          this.name = data.name_enus;
          this.tooltip = data.tooltip_enus;
          this.icon = `https://wow.zamimg.com/images/wow/icons/large/${data.icon}.jpg`;
          const replaces = this.extractReplaces();
          const requirements = this.extractRequirements();
          this.$parent.$emit('spell', { [this.id]: { data, requirements, replaces } });
        });
      });
  }
}
</script>