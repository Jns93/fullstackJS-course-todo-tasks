<script setup lang="ts">import { ref } from 'vue';
import ColumnComponent from './ColumnComponent.vue';
import NewCardComponent from './NewCardComponent.vue';
import NewColumnComponent from './NewColumnComponent.vue';

defineProps(['board']);
let cardTitle = ref('');
let columnName = ref('');
</script>

<template>
    <div v-if="board">
	<h3>{{ board.name }} <span id="estimative">{{ board.getEstimative() }}</span></h3>
	<div class="columns">
		<div  v-for="column in board.columns">
			<ColumnComponent :board="board" :column="column"></ColumnComponent>
			<NewCardComponent :column="column" :board="board"></NewCardComponent>
		</div>
	<NewColumnComponent :board="board"></NewColumnComponent>
	</div>
</div> 
</template>

<style scoped>
.columns {
	display: flex;
	flex-direction: row;
}
.new-column {
	background-color: #EEE;
	border: 1px dashed #CCC;
	display: block;
}
.new-card {
	background-color: #EEE;
	border: 1px dashed #CCC;
	display: block;
}</style>