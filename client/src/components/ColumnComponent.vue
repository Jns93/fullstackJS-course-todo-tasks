
<script setup lang="ts">import { ref } from 'vue';
import CardComponent from './CardComponent.vue';

defineProps(['board', 'column']);

</script>

<template>
	<div class="column">
		<h3>{{ column.name }} <span id="estimative">{{ column.getEstimative() }}</span></h3>
		<div v-for="card in column.cards">
		<CardComponent :card="card" ></CardComponent>
		</div>

	</div>
</template>

<style scoped>

.column {
	width: 200px;
	text-align: center;
	background-color: #CCC;
	margin-right: 5px;
	padding: 10px;
	border: 1px solid #000;
}



</style>