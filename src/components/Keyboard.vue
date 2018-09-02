<template>
  <div class="keyboard" droppable="true" @drop.prevent="drop" @dragover.prevent="dragover" @dragenter.prevent="dragenter" @dragleave.prevent="dragleave">
    <div><i>&nbsp;</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i><i>0</i><i>-</i><i>=</i><i>\</i></div>
    <div><i style="min-width:5em">TAB</i><i>Q</i><i>W</i><i>E</i><i>R</i><i>T</i><i>Y</i><i>U</i><i>I</i><i>O</i><i>P</i><i>]</i><i>[</i></div>
    <div><i style="min-width:6em">CTRL</i><i>A</i><i>S</i><i>D</i><i>F</i><i>G</i><i>H</i><i>J</i><i>K</i><i>L</i><i>;</i><i>'</i></div>
    <div><i style="min-width:7em">SHIFT</i><i>Z</i><i>X</i><i>C</i><i>V</i><i>B</i><i>N</i><i>M</i><i>,</i><i>.</i><i>/</i></div>
  </div>
</template>

<style scoped>
  .keyboard {
    text-align: left;
    width: 58em;
    margin: 0 auto;
  }
  .keyboard i {
    font-style: normal; /* de-italizise the italics element */
    text-align: center;
    display: inline-block;
    border: 1px solid lightgray;
    color: white;
    padding: 20px;
    margin: 1px;
    min-width: 4em;
    height: 4em;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #eeffff;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bolder;

    text-shadow:
      2px 0 0.5px black,
      0 2px 0.5px black,
      -2px 0 0.5px black,
      0 -2px 0.5px black,
      -2px -2px 0.5px black,
      -2px 2px 0.5px black,
      2px -2px 0.5px black,
      2px 2px 0.5px black
      ;

    font-weight: 900;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Keyboard extends Vue {
  private dragover(e: DragEvent) {
    e.dataTransfer.dropEffect = 'copy';
  }
  private dragenter(e: DragEvent) {
    const target = e.target as HTMLElement;
    e.dataTransfer.dropEffect = 'copy';
    if (target.nodeName === 'I') {
      target.style.border = '1px dashed black';
      target.style.backgroundColor = '#ffffff';
    }
  }
  private dragleave(e: DragEvent) {
    const target = e.target as HTMLElement;
    if (target.nodeName === 'I') {
      target.style.border = '1px solid lightgray';
      target.style.backgroundColor = '#eeffff';
    }
  }
  private drop(e: DragEvent) {
    e.dataTransfer.dropEffect = 'copy';
    const target = e.target as HTMLElement;
    if (target.nodeName === 'I') {
      const data = e.dataTransfer.getData('text/plain');
      target.style.backgroundImage = `url('${data}')`;
    }
  }
}
</script>