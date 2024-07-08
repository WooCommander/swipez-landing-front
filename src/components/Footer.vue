<!-- @format -->

<template>
	<footer class="footer">
		<div>
			<h3>
				NEED OUR<br />
				TEAM HELP?
			</h3>
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
				<span>Privacy Policy</span> <span>Terms and Conditions</span>
				<span> Claims Procedure</span> <span> Cryptocurrency Exchange Notice</span>
			</div>
		</div>
		<p class="text">
			To learn about which Revolut company serves you or if you have any questions, please
			contact us through our in-app chat.
		</p>
		<p>
			Revolut Ltd is registered in England and Wales (No. 08804411), 7 Westferry Circus,
			Canary Wharf, London, England, E14 4HD and is authorised by the Financial Conduct
			Authority under the Electronic Money Regulations 2011 (Firm Reference 900562).
			Revolut Travel Ltd is authorised by the Financial Conduct Authority to undertake
			insurance distribution activities (FCA No: 780586). Our insurance products are
			arranged by Revolut Travel Ltd and Revolut Ltd, which is an appointed representative
			of Revolut Travel Ltd. Revolut’s stock trading products are provided by Revolut
			Trading Ltd (No. 832790), an appointed representative of Resolution Compliance Ltd,
			which is authorised and regulated by the Financial Conduct Authority.
		</p>
		<p>
			Revolut Ltd is also registered with the Financial Conduct Authority to offer
			cryptocurrency services under the Money Laundering, Terrorist Financing and Transfer
			of Funds (Information on the Payer) Regulations 2017. Precious metals services are
			provided by Revolut Ltd and are not regulated by the Financial Conduct Authority.
		</p>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
	background: var(--base-section-bg);
	color: var(--prme-default);
	text-align: center;
	padding: 100px 120px 0px 120px;
	width: 100%;

	.contacts {
		display: flex;
		text-align: left;
		padding-top: 50px;

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
		padding: 100px 0px 50px 0px;
		display: flex;
		align-items: center;
		justify-content: space-between;

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
