<script setup lang="ts">import { ref } from 'vue';

defineProps(['board', 'column', 'card']);
</script>

<template>
	<div class="card">
		<span id="card-title">{{ card.title }}</span> <span id="card-estimative">{{ card.estimative }}</span> 
		<br />
		<button id="card-increase-estimative" @click="board?.increaseEstimative(card)">+</button><button>-</button>
	</div>
</template>

<style scoped>
.card {
	text-align: center;
	width: 100%;
	height: 80px;
	background-color: #F3E779;
	border: 1px solid #000;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

</style>