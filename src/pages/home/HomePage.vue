<!-- @format -->

<template>
	<DefaultLayout>
		<div class="section py-5">
			<div class="container align-center">
				<h1>
					UNITED<br />
					BANKING
				</h1>
				<div class="section__subtext center" style="max-width: none">
					Connect your partners into unified ecosystem <br />
					for rapid and secure fund flows
				</div>
			</div>
		</div>
		<div class="section black">
			<img
				src="@/assets/img/bg__section_koleso.svg"
				style="width: 100%; max-height: 320px"
			/>
		</div>
		<div class="section py-5">
			<div class="container">
				<div class="section__title">
					<h3 id="account">
						PERSONAL<br />
						AND BUSINESS<br />
						ACCOUNT
					</h3>
				</div>
				<div class="d-flex">
					<div class="section__subtext">
						<div>
							Manage all your financial transactions,<br />
							make and receive payments.<br />
							All-in-one space.
						</div>
						<button class="second mt-2">Create Account</button>
					</div>

					<div class="ml-5 section__subtext">
						Fast online application and onboarding<br /><br />
						Execute all banking tasks at lightspeed <br /><br />
						SEPA & SWIFT for easy fund transfers globally<br /><br />
						Crypto payments and investments <br /><br />
						Personalized support available anytime
						<div>
							<h4 class="mt-5">
								TOP-TIER<br />
								SECURITY
							</h4>
							<p class="mt-2">
								Trust in our state-of-the-art security protocols designed to provide peace
								of mind, so you can focus on managing your finances with confidence.
							</p>
						</div>
						<div>
							<h4 class="mt-5">
								SMOOTH<br />
								TRANSACTIONS
							</h4>
							<p class="mt-2">
								Experience seamless and efficient transactions like never before. Our
								platform ensures every payment and banking task is processed swiftly,
								securely, and without hassle.
							</p>
						</div>
						<div>
							<h4 class="mt-5">
								INTEGRATED<br />
								ECOSYSTEM
							</h4>
							<p class="mt-2">
								Our platform connects all your partners, employees, and contractors in one
								unified hub. Experience seamless collaboration and streamlined
								communication across your entire network.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section black py-5">
			<div class="container">
				<div class="section__title">
					<h2>
						Explore a complete <br />financial platform<br />
						powered by bank<br />account
					</h2>
				</div>

				<div class="section__subtext">
					<button class="third mt-2">Create Account</button>
				</div>
			</div>
		</div>
		<div class="section pt-5">
			<div class="container">
				<div class="section__title">
					<h3 id="pricing">Explore <br />our pricing</h3>
				</div>

				<div class="section__subtext">
					<button class="second mt-2">Create Account</button>
				</div>
				<div class="detail">
					<div class="detail__title">
						<div>BUSINESS</div>
						<div>PERSONAL</div>
					</div>
					<div class="detail__data">
						<div class="row">
							<div class="col-9">
								Handling of documents and opening a customer account
							</div>
							<div class="col">2000 EUR</div>
						</div>
						<div class="row">
							<div class="col-9">Account monthly service fee</div>
							<div class="col">100 EUR</div>
						</div>
						<div class="row">
							<div class="col-9">Incoming internal paymentt</div>
							<div class="col">Free of change</div>
						</div>
						<div class="row">
							<div class="col-9">Incoming SEPA-paymen</div>
							<div class="col">0.5%</div>
						</div>
						<div class="row">
							<div class="col-9">Incoming Swift payment</div>
							<div class="col">0.7%</div>
						</div>
						<div class="row">
							<div class="col-9">
								Internal outgoing payment between own accounts within Swipez
							</div>
							<div class="col">Free of change</div>
						</div>
						<div class="row">
							<div class="col-9">Internal outgoing payment within Swipez</div>
							<div class="col">Free of change</div>
						</div>
						<div class="row">
							<div class="col-9">Outgoing SEPA-payment</div>
							<div class="col">1.0%</div>
						</div>
						<div class="row">
							<div class="col-9">Outgoing Swift paymen</div>
							<div class="col">0.3%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section py-5" id="faq">
			<div class="container">
				<div class="section__title">
					<h3>
						Frequently<br />
						asked questions
					</h3>
				</div>
				<div class="detail">
					<div class="detail__data mt-5">
						<QuestionItem
							:data="item"
							v-for="(item, idx) of items"
							:key="idx"
							@showAnswer="onShowAnswer"
						/>
					</div>
				</div>
			</div>
		</div>
	</DefaultLayout>
</template>

<script setup lang="ts">
// Импорты из Vue 3 Composition API
import { QuestionItem, QuestionItemModel } from "@/components";
import { DefaultLayout } from "@/layout";
import { ref, computed, defineProps, defineEmits, onMounted, watch } from "vue";
import HomeAdapterService from "./adapter/HomeAdapterService";

const items = ref(Array<QuestionItemModel>());

const adapter = new HomeAdapterService();

onMounted(async () => {
	items.value = await adapter.getsQuestions();
});
const onShowAnswer = (id: string) => {
	console.log(id);

	items.value.forEach((el) => (el.Visible = el.Id == id));
};
</script>

<style lang="scss">
.detail {
	margin: 40px 0px 0px 160px;

	.detail__title {
		display: flex;
		margin: 20px 0px;
		font-weight: 900;

		div {
			margin-right: 20px;
		}
	}

	.detail__data {
		.row {
			padding: 15px 0px;
		}
	}
}
</style>
