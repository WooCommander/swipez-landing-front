<!-- @format -->

<template>
	<div class="row question__item" v-if="data?.Id">
		<div class="col">{{ data?.Question }}?</div>
		<div class="col-1 pointer" @click="toggleVisibility">
			<img
				:class="{ visible: data?.Visible }"
				src="@/assets/img/plus.svg"
				alt="Toggle visibility"
			/>
		</div>
	</div>
	<div v-if="data?.Visible" class="answer">
		{{ data?.Answer }}
	</div>
</template>

<script setup lang="ts">
// Импорты из Vue 3 Composition API
import { ref, computed, defineProps, onMounted } from "vue";
import QuestionItemModel from "./question/QuestionItemModel";
// import { QuestionItemModel } from "@/components";

// Определение пропсов компонента
const props = defineProps({
	data: { type: QuestionItemModel },
});

const emits = defineEmits<{ showAnswer: [string] }>();

onMounted(() => {
	// innerData.value = new QuestionItemModel({
	// 	Id: "1",
	// 	Question: "Residents of what countries may not open an account?",
	// 	Answer:
	// 		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt obcaecati, mollitia doloremque rem nemo tempore autem. Veniam inventore error asperiores architecto quaerat voluptatibus, qui, illum sed assumenda vero excepturi cum. ",
	// 	Visible: false,
	// });
});
//Создание реактивного свойства для данных
const data = computed(() => {
	return props.data;
});

// Функция для переключения видимости ответа
function toggleVisibility() {
	emits("showAnswer", data?.value.Id);
}
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
	padding: 15px 0;
	color: #555;
}
</style>
