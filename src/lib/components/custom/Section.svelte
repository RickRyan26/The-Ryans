<script lang="ts">
	export let isTop = false;
	export let isEven = true;
</script>

<div class="">
	<!-- {#if isTop} -->
	<svg
		class:-mt-12={!isTop}
		class="relative z-10 mx-auto h-12 w-full overflow-hidden"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
	>
		<path
			d={'M600 115 L0 0 0 120 1200 120 1200 0 600 115z'}
			class:!fill-neutral-200={isEven}
			class:dark:!fill-neutral-800={isEven}
			class="fill-neutral-50 dark:fill-neutral-900"
		></path>
	</svg>
	<!-- {/if} -->
	<div
		class:!bg-neutral-200={isEven}
		class:dark:!bg-neutral-800={isEven}
		class="card relative z-10 mx-auto h-full w-full pb-8 landscape:pb-12 px-2"
	>
		<div class="mx-auto w-11/12 max-w-screen-xl py-6">
			<slot />
		</div>
	</div>
	<!-- {#if !isTop}
		<svg class="relative z-10 h-12 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path
				d="M0 0 L1200 0 L600 115 Z"
				class:!fill-neutral-200={isEven}
				class:dark:!fill-neutral-700={isEven}
				class="!fill-neutral-50 dark:!fill-neutral-900"
			></path>
		</svg>
	{/if} -->
</div>
