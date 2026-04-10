![SHARDS Logo](src-tauri/icons/Square107x107Logo.png)

# SHARDS APP

Shards is an app that helps writers catch potential plotholes - especially when it comes to long running series.

It has a built in Dashboard that displays all characters, assets/items/props, and settings - all of which have states that are trackable across all arcs.

An "Arc" is a placeholder name for your story timeline.. you can call it Chapters, beats, or whatever you want.

Aside from state tracking, it will have a unique "Weave" tab of which it will take your list of characters, locations, and items, and use Rust to read through your linked plot/worldbuilding documents (obsidian vault, for example, or where ever you want it to scan) and check to see how often your elements appear. 

Say for example.. Character A shows up in arc 1 but never shows up again until arc 20, it'll flag that for you and you can choose to ignore or rectify that. I intend to develop this into a sort of Plothole Catcher of sorts - all without AI (With the exception of using Gemini to help me code this app as this is my first Svelte + Tauri Project so I'm a noob.)

Another core component would be the Event viewer tab which alerts you to things that need to be addressed. It may point you to the settings where you'd need to customize some paths for the app to pull in your Characters, Locations, or Objects.. OR you can fill in in the Dashboard as well - but if there isn't at least one character, it should alert you to what you need to update - as well as point you to the Weave tab, if there are things to be addressed there.

And the last core component is the Settings and Preferences where you can customize almost anything about the app.

I plan on adding support for custom plugins as well as well as adding a Magic System plugin where you can add details about your magic system so that as you swipe across the arcs, you can see what your characters can do in terms of magic. You can add general rules like Fire elementals are weak to Water elementals and if your character is a Water elemental, as you go to their character tab and are writing a fight scene, you can see what they can do and what they are susceptible to.

Another plugin I plan to add is to create a fight scene calculator where you select characters - who have their own levels or mana (or mana equivalent whatever you named it in your world/story) and can calculate if X character uses Y and Z spells, did they run out of mana? Is such a move possible in that point in the story?

This is a WIP Project that I'm working on in my spare time, outside my day job and aside from working on my personal megaproject (https://mitsukiyouko555.wixsite.com/portfolio/personal-project) so it may take some time for it to be available/usable for other users but I hope to make it useful for writers other than myself in the future - so I'll be keeping interchangeability in mind when I code.

---

**TLDR:**

Core Components:
- Dashboard
- Weave
- Asset Manager (MAYBE - where you can do file conversions like .jpg -> .avif for example - though this might just sit in the Dasbboard too)
- Event Viewer
- Settings and Preferences

Supported Plugins:
- Magic System Tracker (Not sure if i want this built in but toggle able or have it as a plugin tho)
	- can include MULTIPLE magic systems too! (ideally..)
- Fight Scene Calculator

Might add more in the future, but for now, this is plenty!