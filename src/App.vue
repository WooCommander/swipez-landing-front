<!-- @format -->

<template>
	<router-view />
</template>

<style lang="scss">
@import url("@/assets/css/reset.min.css");
@import url("@/assets/css/bootstrap-grid.min.css");
@import url("@/assets/css/style.css");

#app {
	font-family: sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--base-font-color);

	h1 {
		font-family: MADE Outer Sans;
		font-size: 80px;
		font-weight: 900;
		line-height: 72px;
		text-align: center;
		text-transform: uppercase;
	}

	h2 {
		font-family: MADE Outer Sans;
		font-size: 60px;
		font-weight: 900;
		line-height: 54px;
		text-align: left;
		text-transform: uppercase;
	}

	h3 {
		// font-family: MADE Outer Sans;
		font-size: 48px;
		font-weight: 900;
		line-height: 43.2px;
		text-align: left;
		text-transform: uppercase;
	}

	h4 {
		// font-family: MADE Outer Sans;
		font-size: 32px;
		font-weight: 900;
		line-height: 28.8px;
		text-align: left;
		text-transform: uppercase;
	}

	.text-header {
		font-family: MADE Outer Sans;
		font-size: 21px;
		font-weight: 900;
		line-height: 18.9px;
		text-align: left;
	}

	.section {
		// padding: 100px 0px 50px 0px;
		background-color: var(--base-section-bg);
		color: var(--base-font-color);

		&.black {
			background-color: var(--second-section-bg);
			color: var(--second-font-color);
		}

		.section__title {
			// max-width: 420px;
		}

		.section__subtext {
			// font-family: Söhne;
			font-size: 21px;
			font-weight: 300;
			line-height: 31.5px;
			margin-top: 10px;
			max-width: 440px;

			&.center {
				text-align: center;
			}

			&.left {
				text-align: left;
			}
		}
	}

	button {
		font-size: 16px;
		font-weight: 500;
		margin-right: 5px;
		border-radius: 17px;
		padding: 10px 20px;
		border: none;
		background: none;
		cursor: pointer;
		white-space: nowrap;
		height: 43px;
		/* предотвращает перенос текста */
		color: var(--base-font-color);

		&.active {
			background: var(--btn-active);
		}

		&.second {
			background: var(--btn-second-bg);
			color: var(--btn-second-color);
		}

		&.third {
			background: var(--btn-third-bg);
			color: var(--btn-third-color);
		}
	}
}
</style>
