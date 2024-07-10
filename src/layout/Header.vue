<!-- @format -->

<template>
	<header>
		<div class="container header">
			<div class="logo">
				<img class="logo__img" src="@/assets/img/logo.svg" alt="Logo" />
				<img class="logo__txtimg" src="@/assets/img/swipez.svg" alt="Logo" />
			</div>
			<nav class="menu">
				<router-link class="menu-item" to="/">{{ $t("Account") }}</router-link>
				<a class="menu-item" href="#pricing">{{ $t("Pricing") }}</a>
				<a class="menu-item" href="#faq">{{ $t("FAQ") }}</a>
				<router-link class="menu-item" to="/contact">{{ $t("Contact") }}</router-link>
			</nav>
			<div class="auth">
				<button>{{ $t("Log in") }}</button>
				<button class="active">{{ $t("header.Sign Up") }}</button>
			</div>
			<div class="locale-changer">
				<select v-model="$i18n.locale">
					<option
						v-for="locale in $i18n.availableLocales"
						:key="`locale-${locale}`"
						:value="locale"
					>
						{{ locale }}
					</option>
				</select>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;

	.logo {
		display: flex;
		align-items: center;

		.logo__img {
			max-height: 48px;
			margin-right: 10px;
		}

		.logo__txtimg {
			padding-top: 5px;
		}
	}

	.menu {
		display: flex;
		align-items: center;

		padding: 30px;

		a {
			font-weight: bold;
			color: var(--base-font-color);

			&.router-link-exact-active {
				font-weight: 900;
			}
		}

		.menu-item {
			font-size: 16px;
			padding: 10px 20px;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.auth {
		display: flex;
		align-items: center;
	}

	/* Стили для мобильной версии */
	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			align-items: flex-start;
			padding: 10px;

			.logo {
				margin-bottom: 10px;
			}

			.menu {
				flex-direction: column;
				width: 100%;

				.menu-item {
					padding: 10px;
					width: 100%;
					text-align: left;
				}
			}

			.auth {
				width: 100%;
				justify-content: space-between;

				button {
					margin-right: 0;
					margin-bottom: 10px;
					width: 48%;
					/* две кнопки занимают 100% ширины */
					text-align: center;
				}
			}
		}
	}
}
</style>
