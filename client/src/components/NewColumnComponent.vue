<script setup lang="ts">
import { ref } from 'vue';
defineProps(["board"]);
let columnName = ref('');
</script>

<template>
  	<div class="column new-column">
			<input class="new-column-input" type="text" v-model="columnName" />
			<button class="new-column-add" v-on:click="board?.addColumn(columnName, true)">Add</button>
		</div>
</template>

<style scoped>
.new-column {
	background-color: #EEE;
	border: 1px dashed #CCC;
	display: block;
}
</style>