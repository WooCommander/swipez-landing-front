<!-- @format -->

<template>
	<div class="default-layout">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<style lang="scss">
/* Добавьте стили для макета */
.default-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: #f9f5ef;

	/* Стиль для main, чтобы он занимал оставшееся пространство */
	main {
		flex: 1;
	}

	.container {
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		/* Центрируем контейнер по горизонтали */
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -15px;
		/* Создаем отступы между колонками */
	}

	.col {
		flex: 1 1 0;
		/* Равномерное распределение места между колонками */
		padding: 0 15px;
		/* Отступы между колонками */
	}
}
</style>
