<!-- @format -->

<template>
	<div class="row question__item" v-if="data?.Id" @click="toggleVisibility">
		<div class="col">{{ data?.Question }}</div>
		<div class="col-1 pointer">
			<img
				:class="{ visible: data?.Visible }"
				src="@/assets/img/plus.svg"
				alt="Toggle visibility"
			/>
		</div>
	</div>
	<div ref="answerRef" :class="{ visible: data?.Visible }" class="answer">
		{{ data?.Answer }}
	</div>
</template>

<script setup lang="ts">
// Импорты из Vue 3 Composition API
import { ref, computed, defineProps, defineEmits, onMounted, watch } from "vue";
import QuestionItemModel from "./question/QuestionItemModel";

// Определение пропсов компонента
const props = defineProps({
	data: { type: QuestionItemModel },
});

const emits = defineEmits<{ showAnswer: [string] }>();

//Создание реактивного свойства для данных
const data = computed(() => props.data);

// Ссылка на элемент ответа
const answerRef = ref<HTMLElement | null>(null);

// Функция для переключения видимости ответа
function toggleVisibility() {
	if (data.value?.Id) {
		data.value.Visible = !data.value.Visible;
		if (data.value.Visible) {
			emits("showAnswer", data.value.Id);
		}
	}
}

// Наблюдение за изменением видимости для анимации
watch(
	() => data.value?.Visible,
	(newVal) => {
		if (answerRef.value) {
			if (newVal) {
				answerRef.value.style.maxHeight = 30 + answerRef.value.scrollHeight + "px";
			} else {
				answerRef.value.style.maxHeight = "0";
			}
		}
	}
);
</script>

<style scoped lang="scss">
.question__item {
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	padding: 30px 0px !important;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	&:hover {
		background-color: #f5f5f5;
	}

	/* Добавляем плавный переход для всех изменений трансформаций */
	img {
		transition: transform 0.5s;
	}

	img.visible {
		transform: rotate(45deg);
	}
}

.pointer {
	cursor: pointer;
}

.answer {
	color: #555;
	max-height: 0px;
	overflow: hidden;

	transition: max-height 0.5s ease;

	&.visible {
		transition: all 0.5s;
		padding: 20px 0;
		max-height: fit-content;
	}
}
</style>
