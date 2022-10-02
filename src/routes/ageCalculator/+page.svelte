<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	let result: HTMLParagraphElement;

	function getResult(data: PageData) {
		if (isNaN(Number(data.age))) {
			return `${data.age} là tuổi gì?`;
		}
		const name =
			data.name && data.name.length
				? data.name
						.split(' ')
						.map((v) => v[0].toUpperCase() + v.substring(1))
						.join(' ')
				: 'Bạn';
		return `${name} năm nay đã ${data.age} tuổi.`;
	}

	onMount(() => {
		result?.scrollIntoView({ behavior: 'smooth', block: 'center' });
	});
</script>

<svelte:head>
	<title>Reflected XSS Playground</title>
	<meta name="description" content="Reflected XSS Playground" />
</svelte:head>

<section>
	<h1>Reflected XSS Playground</h1>
	<h3>Máy tính tuổi thông minh</h3>
	<form method="get" action="/ageCalculator">
		<table>
			<tbody>
				<tr>
					<td>
						<label for="name"> Nhập tên của bạn </label>
					</td>
					<td>
						<input name="name" id="name" type="text" value={data.name} spellcheck="false" />
					</td>
				</tr>
				<tr>
					<td>
						<label for="age"> Nhập tuổi của bạn </label>
					</td>
					<td>
						<input
							name="age"
							id="age"
							type="text"
							value={data.age}
							required
							aria-required
							spellcheck="false"
						/>
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<button type="submit">Tính tuổi của bạn</button>
					</td>
				</tr>
			</tbody>
		</table>
	</form>
	{#if data.age}
		<p bind:this={result}>
			{@html getResult(data)}
		</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	table {
		border-spacing: 1rem;
	}
	p {
		font-weight: bold;
	}
</style>
