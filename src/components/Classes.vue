<template>
  <div class="classes">
    <ul>
      <li class="class" v-for="(specs, klass) in classes" :key="klass">
        <span class="name">{{ klass }}</span>
        <ul>
          <li v-for="spec in specs" :key="spec">
            <a v-bind:class="{ 'bg-primary text-light': isChosen(klass, spec) }" v-on:click="chooseSpec(klass, spec)" href="#">{{ spec }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.class {
  display: inline-block;
  vertical-align: top;
  margin: 1em;
}
.class .name {
  font-weight: bolder;
  text-decoration: underline;
}
.class ul {
  padding: 0;
  list-style-type: none;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Classes extends Vue {
  private classes: object = {
    'Death Knight': ['Blood', 'Frost', 'Unholy'],
    'Demon Hunter': ['Havoc', 'Vengeance'],
    'Druid':        ['Balance', 'Feral', 'Guardian', 'Restoration'],
    'Hunter':       ['Beast Mastery', 'Marksmanship', 'Survival'],
    'Mage':         ['Arcane', 'Fire', 'Frost'],
    'Monk':         ['Brewmaster', 'Mistweaver', 'Windwalker'],
    'Paladin':      ['Holy', 'Protection', 'Retribution'],
    'Priest':       ['Discipline', 'Holy', 'Shadow'],
    'Rogue':        ['Assassination', 'Outlaw', 'Subtlety'],
    'Shaman':       ['Elemental', 'Enhancement', 'Restoration'],
    'Warlock':      ['Affliction', 'Demonology', 'Destruction'],
    'Warrior':      ['Arms', 'Fury', 'Protection'],
  };
  get chosenKlass() {
    return this.$store.getters.chosenKlass;
  }
  get chosenSpec() {
    return this.$store.getters.chosenSpec;
  }
  private isChosen(klass: string, spec: string) {
    return (this.chosenKlass === klass && this.chosenSpec === spec);
  }
  private chooseSpec(klass: string, spec: string) {
    this.$store.commit('chooseKlass', klass);
    this.$store.commit('chooseSpec', spec);
  }
}
</script>