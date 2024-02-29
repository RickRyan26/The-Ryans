<script lang="ts">
	// import { siteConfig } from '$lib/config/site';
	import { page } from '$app/stores';

	const currentYear = new Date().getFullYear();
	console.log(currentYear);
</script>

<footer class="mx-auto max-w-screen-md py-6">
	<p class="text-right text-sm leading-loose text-muted-foreground">
		© {currentYear}
		{$page.data.title}
	</p>
</footer>
