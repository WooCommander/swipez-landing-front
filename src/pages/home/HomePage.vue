<!-- @format -->

<template>
	<DefaultLayout> sdfsdfas </DefaultLayout>
</template>

<script setup lang="ts">
// Импорты из Vue 3 Composition API
import { DefaultLayout } from "@/layout";
import { ref, computed, defineProps, defineEmits, onMounted, watch } from "vue";

// // Определение пропсов компонента
// const props = defineProps({
// 	isCompact: { type: Boolean, value: true },
// 	msg: { type: String, default: "" },
// });

// // Определение эмиттеров событий компонента
// const emits = defineEmits<{
// 	clickLogout: []; // Событие при клике на кнопку "Выход"
// 	"update:message": [string]; // Событие обновления сообщения
// }>();

// Отслеживание изменений пропса isCompact
// watch(
// 	() => props.isCompact,
// 	() => {
// 		if (props.isCompact) {
// 			console.log("Свойство isCompact поменялось на true");
// 		}
// 	}
// );

// const latitude = computed({
// 	get() {
// 		return lat.value || props.Latitude || 0;
// 	},
// 	set(newValue: number) {
// 		console.log(`newValue`, newValue);
// 		lat.value = newValue;
// 	},
// });
// Блок переменных
// const count = ref(0); // Переменная для подсчета
// const message = ref(""); // Переменная для сообщения

// // Жизненный цикл компонента (при монтировании)
// onMounted(() => {
// 	console.log("Компонент монтирован.");
// });

// // Вычисляемое свойство (двойное значение счетчика)
// const doubledCount = computed(() => count.value * 2);

// // Функция для увеличения счетчика
// function increment() {
// 	count.value++;
// }

// // Функция для изменения сообщения и эмиттинга события обновления
// function changeMessage() {
// 	message.value = "Новое сообщение!";
// 	emits("update:message", message.value);
// }
</script>

<style lang="scss">
.myclass {
	padding: 10px;
}
</style>
