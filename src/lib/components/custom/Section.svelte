<script lang="ts">
	export let isTop = false;
</script>

<div class="">
	{#if isTop}
		<svg
			class="relative z-10 mx-auto h-12 w-full overflow-hidden"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d={'M600 115 L0 0 0 120 1200 120 1200 0 600 115z'}
				class="!fill-neutral-50 dark:!fill-neutral-900"
			></path>
		</svg>
	{/if}
	<div class="card relative z-10 mx-auto h-full w-full px-2">
		<div class="mx-auto w-11/12 py-6 max-w-screen-xl">
			<slot />
		</div>
	</div>
	{#if !isTop}
		<svg class="relative z-10 h-12 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M0 0 L1200 0 L600 115 Z" class="!fill-neutral-50 dark:!fill-neutral-900"></path>
		</svg>
	{/if}
</div>
