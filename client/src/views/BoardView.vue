<script setup lang="ts">
import { computed, onMounted, reactive, ref, inject } from "vue";
import Board from "../entities/Board";
import BoardService from "../services/BoardService.js";
import BoardServiceHttp from "../services/BoardServiceHttp";
import BoardComponent from "../components/BoardComponent.vue";
import DomainEvent from "../events/DomainEvents";

const data: { board: Board | undefined } = reactive({ board: undefined});


onMounted(async () => {
	// const boardService = new BoardServiceHttp();
	const boardService = inject("boardService") as BoardService;
	const board = await boardService.getBoard(1);
	board.on("addColumn", async function(event: DomainEvent) {
		await boardService.saveColumn(event.data)
	})
	data.board = board;
});
</script>
	
<template>
	<BoardComponent :board="data.board"></BoardComponent>
</template>
	
<style scoped>
</style>