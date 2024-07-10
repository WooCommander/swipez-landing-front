<!-- @format -->

<template>
	<DefaultLayout>
		<div class="section py-5">
			<div class="container align-center">
				<h1>
					<p v-html="$t('UNITED BANKING')"></p>
				</h1>
				<div class="section__subtext center" style="max-width: none">
					<p
						v-html="
							$t(
								'Connect your partners into unified ecosystem for rapid and secure fund flows'
							)
						"
					></p>
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
						<p v-html="$t('account.PERSONAL AND BUSINESS ACCOUNT')"></p>
					</h3>
				</div>
				<div class="d-flex">
					<div class="section__subtext">
						<div>
							<p
								v-html="
									$t(
										'account.Manage all your financial transactions, make and receive payments. All-in-one space.'
									)
								"
							></p>
						</div>
						<button class="second mt-2">{{ $t("account.Create Account") }}</button>
					</div>

					<div class="ml-5 section__subtext">
						{{ $t("account.Fast online application and onboarding") }}<br /><br />
						{{ $t("account.Execute all banking tasks at lightspeed") }} <br /><br />
						{{ $t("account.SEPA & SWIFT for easy fund transfers globally") }}<br /><br />
						{{ $t("account.Crypto payments and investments") }} <br /><br />
						{{ $t("account.Personalized support available anytime") }}
						<div>
							<h4 class="mt-5" v-html="$t('account.TOP-TIER SECURITY')" />
							<p class="mt-2" v-html="$t('account.Trust')" />
						</div>
						<div>
							<h4 class="mt-5" v-html="$t('account.SMOOTH TRANSACTIONS')" />

							<p class="mt-2" v-html="$t('account.Our platform')" />
						</div>
						<div>
							<h4 class="mt-5" v-html="$t('account.INTEGRATED ECOSYSTEM')" />

							<p class="mt-2" v-html="$t('account.Experience')" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section black py-5">
			<div class="container">
				<div class="section__title">
					<h2
						v-html="$t('EXPLORE A COMPLETE FINANCIAL PLATFORM POWERED BY BANK ACCOUNT')"
					/>
				</div>

				<div class="section__subtext">
					<button class="third mt-2">{{ $t("account.Create Account") }}</button>
				</div>
			</div>
		</div>
		<div class="section pt-5">
			<div class="container">
				<div class="section__title">
					<h3 id="pricing">{{ $t("pricing.EXPLORE OUR PRICING") }}</h3>
				</div>
				<div class="section__subtext">
					<button class="second mt-2">{{ $t("account.Create Account") }}</button>
				</div>
				<div class="detail">
					<div class="detail__title">
						<div>{{ $t("pricing.BUSINESS") }}</div>
						<div>{{ $t("pricing.PERSONAL") }}</div>
					</div>
					<div class="detail__data">
						<div class="row">
							<div class="col-9">
								{{ $t("pricing.Handling of documents and opening a customer account") }}
							</div>
							<div class="col">2000 EUR</div>
						</div>
						<div class="row">
							<div class="col-9">
								{{ $t("pricing.Account monthly service fee") }}
							</div>
							<div class="col">100 EUR</div>
						</div>
						<div class="row">
							<div class="col-9">
								{{ $t("pricing.Incoming internal paymentt") }}
							</div>
							<div class="col">{{ $t("pricing.Free of change") }}</div>
						</div>
						<div class="row">
							<div class="col-9">
								{{ $t("pricing.Incoming SEPA-paymen") }}
							</div>
							<div class="col">0.5%</div>
						</div>
						<div class="row">
							<div class="col-9">
								{{ $t("pricing.Incoming Swift payment") }}
							</div>
							<div class="col">0.7%</div>
						</div>
						<div class="row">
							<div class="col-9">
								{{
									$t(
										"pricing.FInternal outgoing payment between own accounts within Swipez"
									)
								}}
							</div>
							<div class="col">{{ $t("pricing.Free of change") }}</div>
						</div>
						<div class="row">
							<div class="col-9">
								{{ $t("pricing.Internal outgoing payment within Swipez") }}
							</div>
							<div class="col">{{ $t("pricing.Free of change") }}</div>
						</div>
						<div class="row">
							<div class="col-9">
								{{ $t("pricing.Outgoing SEPA-payment") }}
							</div>
							<div class="col">1.0%</div>
						</div>
						<div class="row">
							<div class="col-9">{{ $t("pricing.Outgoing Swift paymen") }}</div>
							<div class="col">0.3%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section py-5" id="faq">
			<div class="container">
				<div class="section__title">
					<h3 v-html="$t('questtions.FREQUENTLY ASKED QUESTIONS')" />
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
