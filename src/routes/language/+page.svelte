<script lang="ts">
	import { goto } from '$app/navigation';
	import { assets } from '$app/paths';
	import { page } from '$app/stores';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import { onMount } from 'svelte';

	export let data: PageData;
	let languages: string[] = data.default ? [data.default] : [];
	let select: HTMLSelectElement;

	onMount(async () => {
		languages = languages.concat(
			(await fetchLanguages())
				.filter((v) => v !== data.default)
				.sort((s1, s2) => s1.localeCompare(s2))
		);
	});
	async function fetchLanguages() {
		return (await (await fetch(`${assets}/languages.json`)).json()) as string[];
	}
	function onInput(ev: InputEvent) {
		$page.url.searchParams.set('default', languages[Number(ev.target.value)]);
		goto($page.url.search).then((_) => {
			select.focus();
		});
	}
	$: languages, console.log('ok');
</script>

<svelte:head>
	<title>DOM-based XSS Playground</title>
	<meta name="description" content="DOM-based XSS Playground" />
</svelte:head>

<section>
	<h1>DOM-based XSS Playground</h1>
	<h3>Chọn ngôn ngữ của bạn</h3>
	<select bind:this={select} name="language" id="language" on:input={onInput}>
		{#each languages as language, i (i)}
			<option value={i}>{@html language}</option>
		{/each}
	</select>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}
</style>
