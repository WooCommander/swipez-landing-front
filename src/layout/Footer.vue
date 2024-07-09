<!-- @format -->

<template>
	<footer class="footer">
		<div class="container">
			<div>
				<h3 v-html="$t('footer.NEED OUR TEAM HELP?')" />
			</div>
			<div class="contacts">
				<div class="call">
					<div class="contacts__name">Call Us</div>
					<div class="contacts__data">+420 608 402 935</div>
				</div>
				<div class="email">
					<div class="contacts__name">Email</div>
					<div class="contacts__data">support@swipez.eu</div>
				</div>
			</div>
			<div class="menu">
				<div class="copyright">Copyright © 2024 Swipez <br />All Rights Reserved</div>
				<div>
					<span>{{ $t("footer.Privacy Policy") }}</span>
					<span>{{ $t("footer.Terms and Conditions") }}</span>
					<span> {{ $t("footer.Claims Procedure") }}</span>
					<span> {{ $t("footer.Cryptocurrency Exchange Notice") }}</span>
				</div>
			</div>
			<p class="text">
				{{ $t("footer.desk0") }}
			</p>
			<p>
				{{ $t("footer.desk1") }}
			</p>
			<p>
				{{ $t("footer.desk2") }}
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
	background: var(--second-section-bg);
	color: var(--second-font-color);
	text-align: center;
	padding: 100px 0px;
	width: 100%;

	.contacts {
		display: flex;
		text-align: left;
		padding: 50px 0px;

		.contacts__name {
			font-size: 14px;
			font-weight: 500;
			line-height: 27px;
			text-align: left;
			padding-bottom: 5px;
		}

		.contacts_data {
			font-size: 24px;
			font-weight: 800;
			line-height: 36px;
			text-align: left;
		}

		div {
			padding-right: 80px;
		}
	}
	p {
		font-size: 14px;
		font-weight: 500;
		line-height: 21px;
		text-align: left;
		margin-bottom: 10px;
		color: #fffa;
	}
	.menu {
		font-size: 14px;
		padding: 50px 0px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #fff4;

		.copyright {
			text-align: left;
			font-size: 14px;
			font-weight: 500;
			line-height: 21px;
			color: #fffa;
		}

		span {
			padding-left: 20px;
		}
	}
}
</style>
