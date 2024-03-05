<script lang="ts">
	import SuperCard from '$lib/components/custom/SuperCard.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { text } from '@sveltejs/kit';
	import { fade, fly } from 'svelte/transition';
	import SiteFooter from '$lib/components/custom/SiteFooter.svelte';
	import { goto } from '$app/navigation';

	// import debra_img_header from '$lib/images/debra/header.jpg?enhanced';

	export let { data } = $$props;

	let scrollY = 0;
	let bannerHeight = 0;

	$: isScrolled = scrollY > 30;

	const contactTrigger = () => {
		const contactTrigger = document.getElementById('contactTrigger');
		if (contactTrigger) {
			contactTrigger.click();
		}
	};

	const pictures = import.meta.glob('$lib/images/debra/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
		query: { enhanced: true }
	});
	console.warn('pictures:', pictures);

	let headerImage = ''; // Define a reactive variable to hold the loaded image module

	// Existing script content remains the same...

	// Asynchronously load the header image
	const loadHeaderImage = async () => {
		const headerModule = await pictures['/src/lib/images/debra/header.jpg']();
		headerImage = headerModule.default; // Assuming the image module exports the image path as default
	};
	loadHeaderImage(); // Call the function to load the image
</script>

<svelte:window bind:scrollY />
<div class="mx-auto max-w-screen-md portrait:mx-2">
	<SuperCard>
		<!-- svelte-ignore a11y-distracting-elements -->
		<marquee
			class:!bg-slate-300={data.src === 'debra'}
			class:dark:!bg-slate-700={data.src === 'debra'}
			class="-mx-14 rounded-sm bg-purple-300 py-2 font-sans text-xl font-extrabold text-black/80 shadow-sm dark:bg-purple-700 dark:text-white/80 portrait:-mx-9"
		>
			{data.marquee}
		</marquee>
		<h1>
			{data.title}
		</h1>
		<h2>
			{data.subtitle}
		</h2>
		<p class="">
			{data.about}
		</p>
		{#if headerImage}
			<enhanced:img
				class="mx-auto mt-6 w-full rounded-xl landscape:w-11/12"
				src={headerImage}
				alt=""
			/>
		{/if}
	</SuperCard>
	<!-- {#if data.avatar}
		<SuperCard>
			<enhanced:img
				src={`${data.src}/avatar.jpg`}
				class="mx-auto mb-6 w-1/2 rounded-full shadow landscape:w-1/4"
				alt=""
			/>
			{#if data?.quote}
				<blockquote class="mt-6 border-l-2 pl-6">
					{data.quote.text}
					<cite class="mt-2 block text-right">
						- {data.quote.author}
					</cite>
				</blockquote>
			{/if}
		</SuperCard>
	{/if}
	<SuperCard>
		<h2 id="gallery" class="mt-6">Gallery</h2>
		<div class="mt-6 flex justify-center">
			<a href={data.gallery} target="_blank">
				<Button class="rounded-full px-8 py-6 text-xl font-bold transition-all active:scale-95"
					>View Full Gallery</Button
				>
			</a>
		</div>
		<div class="-mx-4 grid gap-2 pt-6 md:-mx-2 md:grid-cols-2 md:gap-4">
			{#each data.photos as photo}
				<div class="inline-block min-h-40 overflow-hidden">
					<enhanced:img
						class="h-full w-full rounded-lg object-cover"
						src={`${data.src}/${photo}.jpg`}
						alt=""
					/>
				</div>
			{/each}
		</div>
	</SuperCard> -->
	<SuperCard>
		<h2 id="details">Details</h2>
		{#if data.about2}
			<p>
				{data.about2}
			</p>
		{/if}
		<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
			{#each data?.lists || [] as list}
				<li class="font-bold">{list[0]}</li>
				<ul class="ml-6 list-disc [&>li]:mt-2">
					{#each list[1] as item}
						<li>{item}</li>
					{/each}
				</ul>
			{/each}
		</ul>
	</SuperCard>
	<SuperCard>
		<h2 id="reviews">Reviews</h2>
		{#each data.reviews as review}
			<div class="-mx-4 mt-6">
				<blockquote
					class:border-slate-500={data.src === 'debra'}
					class="mt-6 border-l-2 border-purple-500/50 pl-6"
				>
					⭐⭐⭐⭐⭐
					<br />
					{review.quote}
					<cite class="mt-2 block text-right">
						- {review.author}
					</cite>
				</blockquote>
			</div>
		{/each}
	</SuperCard>
	<div class="mb-16 flex justify-center">
		<Button
			on:click={contactTrigger}
			class="rounded-full px-8 py-10 text-4xl font-bold transition-all active:scale-95"
			>{data.cta}</Button
		>
	</div>
	<!-- <SiteFooter /> -->
</div>
