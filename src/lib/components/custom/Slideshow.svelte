<script lang="ts">
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	// TODO This will need to be coded in with either firebase storage ListAll or a counter in firestore.

	export let images: any[] = [];

	const albumSize = images.length;
	const duration = 7000;

	let init = false;
	let innerHeight = 0;
	let currentIndex = 0;
	let currentImage = images[0];

	onMount(async () => {
		// if (images.length === 1) fetchData();
		init = true;
		// setTimeout(
		// 	() =>
		setInterval(() => {
			currentIndex = (currentIndex + 1) % albumSize;
			currentImage = images[currentIndex];
		}, duration);
		// 	,duration
		// );
	});
</script>

<svelte:window bind:innerHeight />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:contextmenu|preventDefault
	class:bg-c-0={!init}
	class:bg-c-1000={init}
	class="fixed inset-0 z-0 min-h-screen select-none overflow-hidden bg-black transition-colors duration-[1000ms]"
>
	{#if init}
		{#key currentImage}
			<div
				class="fixed -top-[25%] left-0 h-[100lvh] w-[100vw] !select-none"
				in:fly={{
					x: 0,
					y: innerHeight / 7,
					duration,
					easing: linear
				}}
				out:fly|local={{
					x: 0,
					y: -innerHeight / 7,
					duration,
					easing: linear
				}}
			>
				<enhanced:img
					loading="eager"
					class:mt-32={currentIndex === 0}
					class="mx-auto h-[120vh] w-full object-cover"
					src={currentImage}
					alt=""
				/>
			</div>
		{/key}
	{/if}
</div>
