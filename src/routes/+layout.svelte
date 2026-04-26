<!-- ok so the idea here is that this is the main UI.. you slot other .svelte pages into this one.. say you have a dashboard tab here.. this just pokes the hole for it but you need to connect the actual dashboard layout to it..-->
<script>
  import "../themes.css";
  import {page}from "$app/state";
  import {appSettings} from "$lib/settings.svelte";

  let {children} = $props();

  const tabs = [
    {name: 'Dashboard', path: '/'},
    {name: 'Weave', path: '/storyWeaver'},
    {name: 'Asset Manager', path: '/assetManager'},
    {name: 'Event Viewer', path: '/eventViewer'},
    {name: 'Settings', path: '/settings'},
  ];

  let timelineUnits = $derived(Array.from({length:appSettings.timelineUnitCount}, (_,i) => i+1));
</script>

<div class="app-wrapper">
    <header class="top-nav">
        <div class="tab-container">
            {#each tabs as tab}
                <a href={tab.path} class="top-tab {page.url.pathname === tab.path ? 'active' : ''}">
                {tab.name}
                </a>

            {/each}
        </div>
    </header>
    <main class="content">
        {@render children()}
    </main>

</div>