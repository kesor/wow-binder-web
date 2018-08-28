<template>
  <div class="classes">
    <ul>
      <li class="class" v-for="(specs, key) in classes" :key="key">
        <span class="name">{{ key }}</span>
        <ul>
          <li v-for="spec in specs" :key="spec"><a href="#">{{ spec }}</a></li>
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
}
</script>