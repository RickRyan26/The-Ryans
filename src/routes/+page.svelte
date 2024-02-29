<script lang="ts">
	export let { data } = $$props;
</script>

<div>
	<h1 class="text-center text-4xl font-extrabold lg:text-5xl">
		{data.title}
	</h1>
	<h2>
		{data.subtitle}
	</h2>
	<p class="">
		{data.about}
	</p>

	<h2>Gallery</h2>
	<div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
		{#each Array.from({ length: data.photos }) as _, i}
			<div class="inline-block overflow-hidden">
				<img class="h-full w-full object-cover rounded-lg" src={`${data.src}/${i + 1}.jpg`} alt="" />
			</div>
		{/each}
	</div>
	<h2>Details</h2>
	<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
		<li>1st level of puns: 5 gold coins</li>
		<li>2nd level of jokes: 10 gold coins</li>
		<li>3rd level of one-liners : 20 gold coins</li>
	</ul>
	<h2>Reviews</h2>
	<blockquote class="mt-6 border-l-2 pl-6 italic">
		"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for
		the privilege."
	</blockquote>
</div>
