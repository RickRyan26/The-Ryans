<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { ModeWatcher } from 'mode-watcher';
	import { toggleMode } from 'mode-watcher';
</script>

<ModeWatcher />

<Button
	on:click={toggleMode}
	variant="outline"
	size="icon"
	class="shadow-lg transition-all active:scale-95 active:shadow-none"
>
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
