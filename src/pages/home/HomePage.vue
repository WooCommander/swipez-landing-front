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
					<h3>
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
		<div class="section py-5">
			<div class="container">
				<div class="section__title">
					<h3>Explore <br />our pricing</h3>
				</div>

				<div class="section__subtext">
					<button class="second mt-2">Create Account</button>
				</div>
			</div>
		</div>
	</DefaultLayout>
</template>

<script setup lang="ts">
// Импорты из Vue 3 Composition API
import { DefaultLayout } from "@/layout";
import { ref, computed, defineProps, defineEmits, onMounted, watch } from "vue";
</script>

<style lang="scss">
.myclass {
	padding: 10px;
}
</style>
