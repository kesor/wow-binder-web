<template>
    <div style="text-align:left; margin-top: 2em">
      <pre v-if='chosenKlass === "Death Knight"'>
        Death Knight Abilities
        <Spell id="190780"/>Frost Breath</Spell>
        <Spell id="205224"/>Consumption</Spell> - Cleave
        <Spell id="127344"/>Corpse Exploder</Spell>
        <Spell id="055078"/>Blood Plague</Spell>
        <Spell id="050977"/>Death Gate</Spell> - non combat Teleport
        <Spell id="049576"/>Death Grip</Spell> - Draw target near
        <Spell id="049998"/>Death Strike</Spell> - Hit &amp; Heal
        <Spell id="048265"/>Death's Advance</Spell> - Fast move
        <Spell id="055095"/>Frost Fever</Spell>
        <Spell id="053343"/>Rune of Razorice</Spell> - non combat
        <Spell id="053344"/>Rune of the Fallen Crusader</Spell> - non combat
        <Spell id="062158"/>Rune of the Stoneskin Gargoyle</Spell> - non combat
        <Spell id="053428"/>Runeforging</Spell> - non combat
        <Spell id="048707"/>Anti-Magic Shell</Spell>
        <Spell id="056222"/>Dark Command</Spell> - Taunt
        <Spell id="047528"/>Mind Freeze</Spell> - Interrupt
        <Spell id="003714"/>Path of Frost</Spell>
        <Spell id="111673"/>Control Undead</Spell> - Capture
        <Spell id="061999"/>Raise Ally</Spell> - BR (SHIFT-W)
        Death Knight Talents
        <a href="#" data-wowhead="spell=108194">Asphyxiate</a> - Stun
        <a href="#" data-wowhead="spell=207167" data-spec="frost">Blinding Sleet</a> - Frost spec
        <a href="#" data-wowhead="spell=206931" data-spec="blood">Blooddrinker</a> - Blood spec - T56
        <a href="#" data-wowhead="spell=194844" data-spec="blood">Bonestorm</a> - Blood spec - T100
        <a href="#" data-wowhead="spell=152279" data-spec="frost">Breath of Sindragosa</a> - Frost spec
        <a href="#" data-wowhead="spell=207311" data-spec="unholy">Clawing Shadows</a> - Unholy spec
        <a href="#" data-wowhead="spell=274156" data-spec="blood">Consumption</a> - Blood spec - T57
        <a href="#" data-wowhead="spell=048743" data-spec="frost unholy">Death Pact</a> - Frost/Unholy spec
        <a href="#" data-wowhead="spell=152280" data-spec="unholy">Defile</a> - replaces Death and Decay - Unholy spec
        <a href="#" data-wowhead="spell=207317" data-spec="unholy">Epidemic</a> - Unholy spec
        <a href="#" data-wowhead="spell=207230" data-spec="frost">Frostscythe</a> - Frost spec
        <a href="#" data-wowhead="spell=279302" data-spec="frost">Frostwyrm's Fury</a> - Frost spec
        <a href="#" data-wowhead="spell=194913" data-spec="frost">Glacial Advance</a> - Frost spec
        <a href="#" data-wowhead="spell=057330" data-spec="frost">Horn of Winter</a> - Frost spec
        <a href="#" data-wowhead="spell=206940" data-spec="blood">Mark of Blood</a> - Blood spec - T90
        <a href="#" data-wowhead="spell=210764" data-spec="blood">Rune Strike</a> - Blood spec - T56
        <a href="#" data-wowhead="spell=194679" data-spec="blood">Rune Tap</a> - Blood spec - T60
        <a href="#" data-wowhead="spell=130736" data-spec="unholy">Soul Reaper</a> - Unholy spec
        <a href="#" data-wowhead="spell=049206" data-spec="unholy">Summon Gargoyle</a> - Unholy spec
        <a href="#" data-wowhead="spell=219809" data-spec="blood">Tombstone</a> - Blood spec - T58
        <a href="#" data-wowhead="spell=115989" data-spec="unholy">Unholy Blight</a> - Unholy spec
        <a href="#" data-wowhead="spell=207289" data-spec="unholy">Unholy Frenzy</a> - Unholy spec
        <a href="#" data-wowhead="spell=212552">Wraith Walk</a> - fast move &amp; remove roots - (4) - T75
        Death Knight PvP Talents
        <a href="#" data-wowhead="spell=051052">Anti-Magic Zone</a>
        <a href="#" data-wowhead="spell=233411" data-spec="blood">Blood for Blood</a> - Blood spec
        <a href="#" data-wowhead="spell=204160" data-spec="frost">Chill Streak</a> - Frost spec
        <a href="#" data-wowhead="spell=077606">Dark Simulacrum</a> - Spell steal
        <a href="#" data-wowhead="spell=203173" data-spec="blood">Death Chain</a> - Blood spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=207018" data-spec="blood">Murderous Intent</a> - replaces Dark Command - Blood spec
        <a href="#" data-wowhead="spell=223829" data-spec="unholy">Necrotic Strike</a> - Unholy spec
        <a href="#" data-wowhead="spell=210128" data-spec="unholy">Reanimation</a> - Unholy spec
        <a href="#" data-wowhead="spell=047476" data-spec="blood">Strangulate</a> - silence 5 sec - Blood spec
      </pre>
      <pre v-if='chosenKlass === "Demon Hunter"'>
        Demon Hunter Abilities
        <a href="#" data-wowhead="spell=188499">Blade Dance</a> - AoE
        <a href="#" data-wowhead="spell=198589">Blur</a> - Dodge + Damage reduce
        <a href="#" data-wowhead="spell=179057">Chaos Nova</a> - Stun AoE
        <a href="#" data-wowhead="spell=162794">Chaos Strike</a>
        <a href="#" data-wowhead="spell=183752">Disrupt</a> - Interrupt
        <a href="#" data-wowhead="spell=198013">Eye Beam</a> - Cleave
        <a href="#" data-wowhead="spell=195072">Fel Rush</a>
        <a href="#" data-wowhead="spell=131347">Glide</a> - Fall speed reduction
        <a href="#" data-wowhead="spell=217832">Imprison</a> - Crowd Control
        <a href="#" data-wowhead="spell=191427">Metamorphosis</a>
        <a href="#" data-wowhead="spell=214743">Soul Carver</a>
        <a href="#" data-wowhead="spell=188501">Spectral Sight</a>
        <a href="#" data-wowhead="spell=185123">Throw Glaive</a>
        <a href="#" data-wowhead="spell=198793">Vengeful Retreat</a> - Remove snares
        <a href="#" data-wowhead="spell=278326">Consume Magic</a> - Buff steal
        Demon Hunter Talents
        <a href="#" data-wowhead="spell=258860" data-spec="havoc">Dark Slash</a> - Havoc spec
        <a href="#" data-wowhead="spell=258925" data-spec="havoc">Fel Barrage</a> - Havoc spec - AoE
        <a href="#" data-wowhead="spell=212084" data-spec="vengeance">Fel Devastation</a> - Vengeance spec - Cleave
        <a href="#" data-wowhead="spell=211881" data-spec="havoc">Fel Eruption</a> - Havoc spec - Stun
        <a href="#" data-wowhead="spell=232893" data-spec="havoc vengeance">Felblade</a> - Charge
        <a href="#" data-wowhead="spell=263642" data-spec="vengeance">Fracture</a> - Vengeance spec
        <a href="#" data-wowhead="spell=258920" data-spec="havoc">Immolation Aura</a> - Havoc spec - AoE
        <a href="#" data-wowhead="spell=206491" data-spec="havoc">Nemesis</a> - Havoc spec - Buff
        <a href="#" data-wowhead="spell=196555" data-spec="havoc">Netherwalk</a> - Havoc spec - Fast escape
        <a href="#" data-wowhead="spell=202138" data-spec="vengeance">Sigil of Chains</a> - Vengeance spec - Trap + Snare
        <a href="#" data-wowhead="spell=263648" data-spec="vengeance">Soul Barrier</a> - Vengeance spec - Shield
        <a href="#" data-wowhead="spell=247454" data-spec="vengeance">Spirit Bomb</a> - Vengeance spec - AoE + Heal
        Demon Hunter PvP Talents
        <a href="#" data-wowhead="spell=205629" data-spec="vengeance">Demonic Trample</a> - Vengeance spec - Fast charge
        <a href="#" data-wowhead="spell=206649" data-spec="havoc">Eye of Leotheras</a> - Havoc spec - Debuff
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class - Remove loss of control
        <a href="#" data-wowhead="spell=205630" data-spec="vengeance">Illidan's Grasp</a> - Vengeance spec - Stun
        <a href="#" data-wowhead="spell=203704" data-spec="havoc">Mana Break</a> - Havoc spec
        <a href="#" data-wowhead="spell=235903" data-spec="havoc">Mana Rift</a> - Havoc spec
        <a href="#" data-wowhead="spell=206803" data-spec="havoc">Rain from Above</a> - Havoc spec - Fly + DD
        <a href="#" data-wowhead="spell=205604">Reverse Magic</a> - AoE remove debuffs
        <a href="#" data-wowhead="spell=207029" data-spec="vengeance">Tormentor</a> - Vengeance spec - Debuff
      </pre>
      <pre v-if='chosenKlass === "Druid"'>
        Druid Abilities
        <a href="#" data-wowhead="spell=219432">Rage of the Sleeper</a>
        <a href="#" data-wowhead="spell=005225">Track Humanoids</a> - Track
        <a href="#" data-wowhead="spell=008921">Moonfire</a>
        <a href="#" data-wowhead="spell=008936">Regrowth</a>
        <a href="#" data-wowhead="spell=000768">Cat Form</a>
        <a href="#" data-wowhead="spell=001850">Dash</a> - Fast Move - (4)
        <a href="#" data-wowhead="spell=005221">Shred</a>
        <a href="#" data-wowhead="spell=005487">Bear Form</a>
        <a href="#" data-wowhead="spell=016870">Clearcasting</a>
        <a href="#" data-wowhead="spell=236716">Enraged Maul</a>
        <a href="#" data-wowhead="spell=033917">Mangle</a>
        <a href="#" data-wowhead="spell=077758">Thrash</a>
        <a href="#" data-wowhead="spell=106830">Thrash</a>
        <a href="#" data-wowhead="spell=006795">Growl</a>
        <a href="#" data-wowhead="spell=193753">Dreamwalk</a>
        <a href="#" data-wowhead="spell=050769">Revive</a> - Ressurect
        <a href="#" data-wowhead="spell=018960">Teleport: Moonglade</a> - non combat - Teleport
        <a href="#" data-wowhead="spell=164815">Sunfire</a>
        <a href="#" data-wowhead="spell=000783">Travel Form</a> - (T)
        <a href="#" data-wowhead="spell=000339">Entangling Roots</a>
        <a href="#" data-wowhead="spell=127757">Charm Woodland Creature</a>
        <a href="#" data-wowhead="spell=164862">Flap</a>
        <a href="#" data-wowhead="spell=210053">Stag Form</a> - (T)
        <a href="#" data-wowhead="spell=210065">Track Beasts</a>
        <a href="#" data-wowhead="spell=020484">Rebirth</a> - BR (SHIFT-W)
        <a href="#" data-wowhead="spell=165962">Flight Form</a> - (T)
        <a href="#" data-wowhead="spell=002637">Hibernate</a> - Sleep
        Druid Talents
        <a href="#" data-wowhead="spell=155835" data-spec="guardian">Bristling Fur</a> - Guardian spec
        <a href="#" data-wowhead="spell=202028" data-spec="feral">Brutal Slash</a> - replaces Swipe - Feral spec
        <a href="#" data-wowhead="spell=102351" data-spec="restoration">Cenarion Ward</a> - Restoration spec
        <a href="#" data-wowhead="spell=274837" data-spec="feral">Feral Frenzy</a> - Feral spec
        <a href="#" data-wowhead="spell=197721" data-spec="restoration">Flourish</a> - Restoration spec
        <a href="#" data-wowhead="spell=205636" data-spec="balance">Force of Nature</a> - Balance spec
        <a href="#" data-wowhead="spell=202770" data-spec="balance">Fury of Elune</a> - Balance spec
        <a href="#" data-wowhead="spell=102560" data-spec="balance">Incarnation: Chosen of Elune</a> - Balance spec
        <a href="#" data-wowhead="spell=102558" data-spec="guardian">Incarnation: Guardian of Ursoc</a> - Guardian spec
        <a href="#" data-wowhead="spell=102543" data-spec="feral">Incarnation: King of the Jungle</a> - Feral spec
        <a href="#" data-wowhead="spell=033891" data-spec="restoration">Incarnation: Tree of Life</a> - Restoration spec
        <a href="#" data-wowhead="spell=236748" data-spec="guardian">Intimidating Roar</a> - Guardian spec
        <a href="#" data-wowhead="spell=204066" data-spec="guardian">Lunar Beam</a> - Guardian spec
        <a href="#" data-wowhead="spell=102359">Mass Entanglement</a> - replaces Nature's Control - Mass root
        <a href="#" data-wowhead="spell=005211">Mighty Bash</a> - replaces Nature's Control
        <a href="#" data-wowhead="spell=274281" data-spec="balance">New Moon</a> - Balance spec
        <a href="#" data-wowhead="spell=080313" data-spec="guardian">Pulverize</a> - Guardian spec
        <a href="#" data-wowhead="spell=108238">Renewal</a>
        <a href="#" data-wowhead="spell=052610" data-spec="feral">Savage Roar</a> - Feral spec
        <a href="#" data-wowhead="spell=202347" data-spec="balance">Stellar Flare</a> - Balance spec
        <a href="#" data-wowhead="spell=252216">Tiger Dash</a> - Replaces Dash
        <a href="#" data-wowhead="spell=132469">Typhoon</a> - replaces Nature's Control
        <a href="#" data-wowhead="spell=202425" data-spec="balance">Warrior of Elune</a> - Balance spec
        <a href="#" data-wowhead="spell=102401">Wild Charge</a>
        Druid PvP Talents
        <a href="#" data-wowhead="spell=207017" data-spec="guardian">Alpha Challenge</a> - replaces Growl - Guardian spec
        <a href="#" data-wowhead="spell=209753" data-spec="balance">Cyclone</a> - Balance spec
        <a href="#" data-wowhead="spell=033786" data-spec="restoration">Cyclone</a> - Restoration spec
        <a href="#" data-wowhead="spell=201664" data-spec="guardian">Demoralizing Roar</a> - Guardian spec
        <a href="#" data-wowhead="spell=236026" data-spec="feral">Enraged Maim</a> - replaces Maim - Feral spec
        <a href="#" data-wowhead="spell=209749" data-spec="balance">Faerie Swarm</a> - Balance spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=203651" data-spec="restoration">Overgrowth</a> - Restoration spec
        <a href="#" data-wowhead="spell=202246" data-spec="guardian">Overrun</a> - Guardian spec
        <a href="#" data-wowhead="spell=203242" data-spec="feral">Rip and Tear</a> - Feral spec
        <a href="#" data-wowhead="spell=236696">Thorns</a>
      </pre>
      <pre v-if='chosenKlass === "Hunter"'>
        Hunter Abilities
        <a href="#" data-wowhead="spell=138430">Ancient Zandalari Knowledge</a> - non combat
        <!--<a href="#" data-wowhead="spell=203413">Fury of the Eagle</a>-->
        <a href="#" data-wowhead="spell=242155">Hybrid Kinship</a> - non combat
        <a href="#" data-wowhead="spell=205154">Mecha-Bond Imprint Matrix</a> - non combat
        <a href="#" data-wowhead="spell=229533">Track Mechanicals</a> - non combat
        <a href="#" data-wowhead="spell=000883">Call Pet 1</a>
        <a href="#" data-wowhead="spell=000982">Revive Pet</a>
        <a href="#" data-wowhead="spell=001494">Track Beasts</a> - non combat
        <a href="#" data-wowhead="spell=019878">Track Demons</a> - non combat
        <a href="#" data-wowhead="spell=019879">Track Dragonkin</a> - non combat
        <a href="#" data-wowhead="spell=019880">Track Elementals</a> - non combat
        <a href="#" data-wowhead="spell=019882">Track Giants</a> - non combat
        <a href="#" data-wowhead="spell=019885">Track Hidden</a> - non combat
        <a href="#" data-wowhead="spell=019883">Track Humanoids</a> - non combat
        <a href="#" data-wowhead="spell=019884">Track Undead</a> - non combat
        <a href="#" data-wowhead="spell=002641">Dismiss Pet</a>
        <a href="#" data-wowhead="spell=001462">Beast Lore</a>
        <a href="#" data-wowhead="spell=083242">Call Pet 2</a>
        <a href="#" data-wowhead="spell=006991">Feed Pet</a>
        <a href="#" data-wowhead="spell=000136">Mend Pet</a>
        <a href="#" data-wowhead="spell=001515">Tame Beast</a>
        <a href="#" data-wowhead="spell=006197">Eagle Eye</a>
        <a href="#" data-wowhead="spell=186257">Aspect of the Cheetah</a>
        <a href="#" data-wowhead="spell=005384">Feign Death</a>
        <a href="#" data-wowhead="spell=210000">Wake Up</a>
        <a href="#" data-wowhead="spell=083243">Call Pet 3</a>
        <a href="#" data-wowhead="spell=272651">Command Pet</a>
        <a href="#" data-wowhead="spell=001543">Flare</a>
        <a href="#" data-wowhead="spell=061648">Aspect of the Chameleon</a>
        <a href="#" data-wowhead="spell=125050">Fetch</a>
        <a href="#" data-wowhead="spell=127933">Fireworks</a>
        <a href="#" data-wowhead="spell=209997">Play Dead</a>
        <a href="#" data-wowhead="spell=083244">Call Pet 4</a>
        <a href="#" data-wowhead="spell=186265">Aspect of the Turtle</a>
        <a href="#" data-wowhead="spell=083245">Call Pet 5</a>
        Hunter Talents
        <a href="#" data-wowhead="spell=131894">A Murder of Crows</a>
        <a href="#" data-wowhead="spell=120360">Barrage</a> - Beast Mastery or Marksmanship spec
        <a href="#" data-wowhead="spell=109248">Binding Shot</a>
        <a href="#" data-wowhead="spell=212436">Butchery</a> - Survival spec
        <a href="#" data-wowhead="spell=199483">Camouflage</a>
        <a href="#" data-wowhead="spell=259391">Chakrams</a> - Survival spec
        <a href="#" data-wowhead="spell=053209">Chimaera Shot</a> - Beast Mastery spec
        <a href="#" data-wowhead="spell=120679">Dire Beast</a> - Beast Mastery spec
        <a href="#" data-wowhead="spell=260402">Double Tap</a> - Marksmanship spec
        <a href="#" data-wowhead="spell=212431">Explosive Shot</a> - Marksmanship spec
        <a href="#" data-wowhead="spell=269751">Flanking Strike</a> - Survival spec
        <a href="#" data-wowhead="spell=257284">Hunter's Mark</a> - Marksmanship spec
        <a href="#" data-wowhead="spell=259387">Mongoose Bite</a> - Survival spec
        <a href="#" data-wowhead="spell=198670">Piercing Shot</a> - Marksmanship spec
        <a href="#" data-wowhead="spell=271788">Serpent Sting</a> - Marksmanship spec
        <a href="#" data-wowhead="spell=194407">Spitting Cobra</a> - Beast Mastery spec
        <a href="#" data-wowhead="spell=201430">Stampede</a> - Beast Mastery spec
        <a href="#" data-wowhead="spell=162488">Steel Trap</a> - Survival spec
        Hunter PvP Talents
        <a href="#" data-wowhead="spell=205691">Dire Beast: Basilisk</a> - Beast Mastery spec
        <a href="#" data-wowhead="spell=208652">Dire Beast: Hawk</a> - Beast Mastery spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=236776">Hi-Explosive Trap</a>
        <a href="#" data-wowhead="spell=248518">Interlope</a> - Beast Mastery spec
        <a href="#" data-wowhead="spell=212640">Mending Bandage</a> - Survival spec
        <a href="#" data-wowhead="spell=053480">Roar of Sacrifice</a>
        <a href="#" data-wowhead="spell=213691">Scatter Shot</a> - Marksmanship spec
        <a href="#" data-wowhead="spell=202900">Scorpid Sting</a>
        <a href="#" data-wowhead="spell=203155">Sniper Shot</a> - Marksmanship spec
        <a href="#" data-wowhead="spell=202914">Spider Sting</a>
        <a href="#" data-wowhead="spell=212638">Tracker's Net</a> - Survival spec
        <a href="#" data-wowhead="spell=202797">Viper Sting</a>
      </pre>
      <pre v-if='chosenKlass === "Mage"'>
        Mage Abilities
        <a href="#" data-wowhead="spell=131784">Illusion</a> - non combat
        <a href="#" data-wowhead="spell=061780">Polymorph</a>
        <a href="#" data-wowhead="spell=126819">Polymorph</a>
        <a href="#" data-wowhead="spell=161353">Polymorph</a>
        <a href="#" data-wowhead="spell=161354">Polymorph</a>
        <a href="#" data-wowhead="spell=161355">Polymorph</a>
        <a href="#" data-wowhead="spell=000122">Frost Nova</a>
        <a href="#" data-wowhead="spell=000118">Polymorph</a>
        <a href="#" data-wowhead="spell=031707">Waterbolt</a>
        <a href="#" data-wowhead="spell=190336">Conjure Refreshment</a>
        <a href="#" data-wowhead="spell=193759">Teleport: Hall of the Guardian</a> - non combat
        <a href="#" data-wowhead="spell=001953">Blink</a> - (T)
        <a href="#" data-wowhead="spell=003565">Teleport: Darnassus</a> - non combat
        <a href="#" data-wowhead="spell=032271">Teleport: Exodar</a> - non combat
        <a href="#" data-wowhead="spell=003562">Teleport: Ironforge</a> - non combat
        <a href="#" data-wowhead="spell=003567">Teleport: Orgrimmar</a> - non combat
        <a href="#" data-wowhead="spell=032272">Teleport: Silvermoon</a> - non combat
        <a href="#" data-wowhead="spell=003561">Teleport: Stormwind</a> - non combat
        <a href="#" data-wowhead="spell=049359">Teleport: Theramore</a> - non combat
        <a href="#" data-wowhead="spell=003566">Teleport: Thunder Bluff</a> - non combat
        <a href="#" data-wowhead="spell=003563">Teleport: Undercity</a> - non combat
        <a href="#" data-wowhead="spell=002139">Counterspell</a>
        <a href="#" data-wowhead="spell=000475">Remove Curse</a>
        <a href="#" data-wowhead="spell=033395">Freeze</a>
        <a href="#" data-wowhead="spell=000130">Slow Fall</a>
        <a href="#" data-wowhead="spell=011419">Portal: Darnassus</a> - non combat
        <a href="#" data-wowhead="spell=032266">Portal: Exodar</a> - non combat
        <a href="#" data-wowhead="spell=011416">Portal: Ironforge</a> - non combat
        <a href="#" data-wowhead="spell=011417">Portal: Orgrimmar</a> - non combat
        <a href="#" data-wowhead="spell=032267">Portal: Silvermoon</a> - non combat
        <a href="#" data-wowhead="spell=010059">Portal: Stormwind</a> - non combat
        <a href="#" data-wowhead="spell=049360">Portal: Theramore</a> - non combat
        <a href="#" data-wowhead="spell=011420">Portal: Thunder Bluff</a> - non combat
        <a href="#" data-wowhead="spell=011418">Portal: Undercity</a> - non combat
        <a href="#" data-wowhead="spell=045438">Ice Block</a>
        <a href="#" data-wowhead="spell=049361">Portal: Stonard</a> - non combat
        <a href="#" data-wowhead="spell=049358">Teleport: Stonard</a> - non combat
        <a href="#" data-wowhead="spell=001459">Arcane Intellect</a>
        <a href="#" data-wowhead="spell=061305">Polymorph</a>
        <a href="#" data-wowhead="spell=061721">Polymorph</a>
        <a href="#" data-wowhead="spell=028271">Polymorph</a>
        <a href="#" data-wowhead="spell=277787">Polymorph</a>
        <a href="#" data-wowhead="spell=277792">Polymorph</a>
        <a href="#" data-wowhead="spell=161372">Polymorph</a>
        <a href="#" data-wowhead="spell=028272">Polymorph</a>
        <a href="#" data-wowhead="spell=053140">Teleport: Dalaran - Northrend</a> - non combat
        <a href="#" data-wowhead="spell=033690">Teleport: Shattrath</a> - non combat
        <a href="#" data-wowhead="spell=035715">Teleport: Shattrath</a> - non combat
        <a href="#" data-wowhead="spell=033691">Portal: Shattrath</a> - non combat
        <a href="#" data-wowhead="spell=035717">Portal: Shattrath</a> - non combat
        <a href="#" data-wowhead="spell=030449">Spellsteal</a>
        <a href="#" data-wowhead="spell=120145">Ancient Teleport: Dalaran</a> - non combat
        <a href="#" data-wowhead="spell=224869">Teleport: Dalaran - Broken Isles</a> - non combat
        <a href="#" data-wowhead="spell=120146">Ancient Portal: Dalaran</a> - non combat
        <a href="#" data-wowhead="spell=053142">Portal: Dalaran - Northrend</a> - non combat
        <a href="#" data-wowhead="spell=080353">Time Warp</a> - Hero
        <a href="#" data-wowhead="spell=088346">Portal: Tol Barad</a> - non combat
        <a href="#" data-wowhead="spell=088345">Portal: Tol Barad</a> - non combat
        <a href="#" data-wowhead="spell=088344">Teleport: Tol Barad</a> - non combat
        <a href="#" data-wowhead="spell=088342">Teleport: Tol Barad</a> - non combat
        <a href="#" data-wowhead="spell=132626">Portal: Vale of Eternal Blossoms</a> - non combat
        <a href="#" data-wowhead="spell=132620">Portal: Vale of Eternal Blossoms</a> - non combat
        <a href="#" data-wowhead="spell=132621">Teleport: Vale of Eternal Blossoms</a> - non combat
        <a href="#" data-wowhead="spell=132627">Teleport: Vale of Eternal Blossoms</a> - non combat
        <a href="#" data-wowhead="spell=176246">Portal: Stormshield</a> - non combat
        <a href="#" data-wowhead="spell=176244">Portal: Warspear</a> - non combat
        <a href="#" data-wowhead="spell=176248">Teleport: Stormshield</a> - non combat
        <a href="#" data-wowhead="spell=176242">Teleport: Warspear</a> - non combat
        <a href="#" data-wowhead="spell=281400">Portal: Boralus</a> - non combat
        <a href="#" data-wowhead="spell=281402">Portal: Dazar'alor</a> - non combat
        <a href="#" data-wowhead="spell=281403">Teleport: Boralus</a> - non combat
        <a href="#" data-wowhead="spell=281404">Teleport: Dazar'alor</a> - non combat
        Mage Talents
        <a href="#" data-wowhead="spell=205022">Arcane Familiar</a> - Arcane spec
        <a href="#" data-wowhead="spell=153626">Arcane Orb</a> - Arcane spec
        <a href="#" data-wowhead="spell=157981">Blast Wave</a> - Fire spec
        <a href="#" data-wowhead="spell=205032">Charged Up</a> - Arcane spec
        <a href="#" data-wowhead="spell=153595">Comet Storm</a> - Frost spec
        <a href="#" data-wowhead="spell=257537">Ebonbolt</a> - Frost spec
        <a href="#" data-wowhead="spell=199786">Glacial Spike</a> - Frost spec
        <a href="#" data-wowhead="spell=108839">Ice Floes</a> - Frost spec
        <a href="#" data-wowhead="spell=157997">Ice Nova</a> - Frost spec
        <a href="#" data-wowhead="spell=044457">Living Bomb</a> - Fire spec
        <a href="#" data-wowhead="spell=153561">Meteor</a> - Fire spec
        <a href="#" data-wowhead="spell=055342">Mirror Image</a>
        <a href="#" data-wowhead="spell=114923">Nether Tempest</a> - Arcane spec
        <a href="#" data-wowhead="spell=257541">Phoenix Flames</a> - Fire spec
        <a href="#" data-wowhead="spell=205021">Ray of Frost</a> - Frost spec
        <a href="#" data-wowhead="spell=113724">Ring of Frost</a>
        <a href="#" data-wowhead="spell=116011">Rune of Power</a>
        <a href="#" data-wowhead="spell=212653">Shimmer</a> - replaces Blink - Fast move (T)
        <a href="#" data-wowhead="spell=157980">Supernova</a> - Arcane spec
        Mage PvP Talents
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=203286">Greater Pyroblast</a> Fire spec
        <a href="#" data-wowhead="spell=198144">Ice Form</a> - Frost spec
        <a href="#" data-wowhead="spell=198158">Mass Invisibility</a> - Arcane spec
        <a href="#" data-wowhead="spell=198111">Temporal Shield</a> - Shield
      </pre>
      <pre v-if='chosenKlass === "Monk"'>
        Monk Abilities
        <a href="#" data-wowhead="spell=196061">Crosswinds</a>
        <a href="#" data-wowhead="spell=100780">Tiger Palm</a>
        <a href="#" data-wowhead="spell=125883">Zen Flight</a> - (T)
        <a href="#" data-wowhead="spell=100784">Blackout Kick</a>
        <a href="#" data-wowhead="spell=109132">Roll</a> - Fast move (4)
        <a href="#" data-wowhead="spell=209525">Soothing Mist</a>
        <a href="#" data-wowhead="spell=115546">Provoke</a> - Taunt
        <a href="#" data-wowhead="spell=115178">Resuscitate</a> - Ressurect
        <a href="#" data-wowhead="spell=126892">Zen Pilgrimage</a>
        <a href="#" data-wowhead="spell=117952">Crackling Jade Lightning</a>
        <a href="#" data-wowhead="spell=115078">Paralysis</a> - Crowd control
        <a href="#" data-wowhead="spell=126895">Zen Pilgrimage: Return</a>
        <a href="#" data-wowhead="spell=101643">Transcendence</a>
        <a href="#" data-wowhead="spell=119996">Transcendence: Transfer</a>
        Monk Talents
        <a href="#" data-wowhead="spell=115399">Black Ox Brew</a> - Brewmaster spec
        <a href="#" data-wowhead="spell=123986">Chi Burst</a>
        <a href="#" data-wowhead="spell=115008">Chi Torpedo</a> - replaces Roll - Fast move
        <a href="#" data-wowhead="spell=115098">Chi Wave</a> - Chain healing
        <a href="#" data-wowhead="spell=122278">Dampen Harm</a> - Damage reduction
        <a href="#" data-wowhead="spell=122783">Diffuse Magic</a> - Windwalker/Mistweaver spec
        <a href="#" data-wowhead="spell=115288">Energizing Elixir</a> - Windwalker spec
        <a href="#" data-wowhead="spell=261947">Fist of the White Tiger</a> - Windwalker spec
        <a href="#" data-wowhead="spell=115295">Guard</a> - Brewmaster spec
        <a href="#" data-wowhead="spell=198664">Invoke Chi-Ji, the Red Crane</a> - Mistweaver spec
        <a href="#" data-wowhead="spell=132578">Invoke Niuzao, the Black Ox</a> - Brewmaster spec
        <a href="#" data-wowhead="spell=123904">Invoke Xuen, the White Tiger</a> - Windwalker spec
        <a href="#" data-wowhead="spell=197908">Mana Tea</a> - Mistweaver spec
        <a href="#" data-wowhead="spell=196725">Refreshing Jade Wind</a> - Mistweaver spec
        <a href="#" data-wowhead="spell=116844">Ring of Peace</a> - replaces Disabling Technique
        <a href="#" data-wowhead="spell=116847">Rushing Jade Wind</a> - Brewmaster spec
        <a href="#" data-wowhead="spell=261715">Rushing Jade Wind</a> - Windwalker spec
        <a href="#" data-wowhead="spell=152173">Serenity</a> - Windwalker spec - replaces Storm, Earth, and Fire
        <a href="#" data-wowhead="spell=198898">Song of Chi-Ji</a> - Mistweaver spec - replaces Disabling Technique
        <a href="#" data-wowhead="spell=115315">Summon Black Ox Statue</a> - Brewmaster spec - replaces Disabling Technique
        <a href="#" data-wowhead="spell=115313">Summon Jade Serpent Statue</a> - Mistweave spec
        <a href="#" data-wowhead="spell=116841">Tiger's Lust</a>
        <a href="#" data-wowhead="spell=152175">Whirling Dragon Punch</a> - Windwalker spec
        Monk PvP Talents
        <a href="#" data-wowhead="spell=207025">Admonishment</a> - Brewmaster spec
        <a href="#" data-wowhead="spell=202162">Avert Harm</a> - Brewmaster spec
        <a href="#" data-wowhead="spell=202335">Double Barrel</a> - Brewmaster spec
        <a href="#" data-wowhead="spell=201318">Fortifying Brew</a> - Windwalker spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=233759">Grapple Weapon</a> - Windwalker/Mistweaver spec
        <a href="#" data-wowhead="spell=205234">Healing Sphere</a> - Mistweaver spec
        <a href="#" data-wowhead="spell=202370">Mighty Ox Kick</a> - Brewmaster spec
        <a href="#" data-wowhead="spell=227344">Surging Mist</a> - Mistweaver spec
        <a href="#" data-wowhead="spell=247483">Tigereye Brew</a> - Windwalker spec
        <a href="#" data-wowhead="spell=216113">Way of the Crane</a> - Mistweaver spec
        <a href="#" data-wowhead="spell=209584">Zen Focus Tea</a> - Mistweave spec
        <a href="#" data-wowhead="spell=213658">Craft: Nimble Brew</a> - Brewmaster spec
      </pre>
      <pre v-if='chosenKlass === "Paladin"'>
        Paladin Abilities
        <a href="#" data-wowhead="spell=200654">Tyr's Deliverance</a> - Heal HoT
        <a href="#" data-wowhead="spell=035395">Crusader Strike</a>
        <a href="#" data-wowhead="spell=062124">Hand of Reckoning</a> - Taunt
        <a href="#" data-wowhead="spell=007328">Redemption</a> - Ressurect
        <a href="#" data-wowhead="spell=000642">Divine Shield</a> - Immunity (damage reduction)
        <a href="#" data-wowhead="spell=270562">Summon Darkforge Ram</a> - Summon mount
        <a href="#" data-wowhead="spell=270564">Summon Dawnforge Ram</a> - Summon mount
        <a href="#" data-wowhead="spell=073629">Summon Exarch's Elekk</a> - Summon mount
        <a href="#" data-wowhead="spell=069820">Summon Sunwalker Kodo</a> - Summon mount
        <a href="#" data-wowhead="spell=034769">Summon Thalassian Warhorse</a> - Summon mount
        <a href="#" data-wowhead="spell=013819">Summon Warhorse</a> - Summon mount
        <a href="#" data-wowhead="spell=190784">Divine Steed</a> - Fast move (4)
        <a href="#" data-wowhead="spell=001044">Blessing of Freedom</a>
        <a href="#" data-wowhead="spell=121183">Contemplation</a> - non comat - cosmetic
        <a href="#" data-wowhead="spell=023214">Summon Charger</a> - Summon mount
        <a href="#" data-wowhead="spell=073630">Summon Great Exarch's Elekk</a> - Summon mount
        <a href="#" data-wowhead="spell=069826">Summon Great Sunwalker Kodo</a> - Summon mount
        <a href="#" data-wowhead="spell=034767">Summon Thalassian Charger</a> - Summon mount
        <a href="#" data-wowhead="spell=000633">Lay on Hands</a> - Heal (big)
        Paladin Talents
        <a href="#" data-wowhead="spell=204150">Aegis of Light</a> - Protection spec
        <a href="#" data-wowhead="spell=216331">Avenging Crusader</a> - Holy spec
        <a href="#" data-wowhead="spell=204035">Bastion of Light</a> - Protection spec
        <a href="#" data-wowhead="spell=156910">Beacon of Faith</a> - Holy spec
        <a href="#" data-wowhead="spell=200025">Beacon of Virtue</a> - Holy spec
        <a href="#" data-wowhead="spell=223306">Bestow Faith</a> - Holy spec
        <a href="#" data-wowhead="spell=204019">Blessed Hammer</a> - Protection spec
        <a href="#" data-wowhead="spell=204018">Blessing of Spellwarding</a> - Protection spec
        <a href="#" data-wowhead="spell=115750">Blinding Light</a>
        <a href="#" data-wowhead="spell=205228">Consecration</a> - Retribution spec
        <a href="#" data-wowhead="spell=231895">Crusade</a> - Retribution spec
        <a href="#" data-wowhead="spell=267798">Execution Sentence</a> - Retribution spec
        <a href="#" data-wowhead="spell=205191">Eye for an Eye</a> - Retribution spec
        <a href="#" data-wowhead="spell=024275">Hammer of Wrath</a> - Retribution spec
        <a href="#" data-wowhead="spell=213652">Hand of the Protector</a> - Protection spec
        <a href="#" data-wowhead="spell=105809">Holy Avenger</a> - Holy spec
        <a href="#" data-wowhead="spell=114165">Holy Prism</a> - Holy spec
        <a href="#" data-wowhead="spell=084963">Inquisition</a> - Retribution spec
        <a href="#" data-wowhead="spell=215661">Justicar's Vengeance</a> - Retribution spec
        <a href="#" data-wowhead="spell=114158">Light's Hammer</a> - Holy spec
        <a href="#" data-wowhead="spell=020066">Repentance</a> - Sleep
        <a href="#" data-wowhead="spell=214202">Rule of Law</a> - Holy spec
        <a href="#" data-wowhead="spell=152262">Seraphim</a> - Protection spec
        <a href="#" data-wowhead="spell=255937">Wake of Ashes</a> - Retribution spec
        <a href="#" data-wowhead="spell=210191">Word of Glory</a> - Retribution spec
        Paladin PvP Talents
        <a href="#" data-wowhead="spell=210256">Blessing of Sanctuary</a> - Retribution spec
        <a href="#" data-wowhead="spell=236186">Cleansing Light</a> - Protection/Retribution spec
        <a href="#" data-wowhead="spell=210294">Divine Favor</a> - Holy spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=228049">Guardian of the Forgotten Queen</a> - Protection spec
        <a href="#" data-wowhead="spell=247675">Hammer of Reckoning</a> - Retribution spec
        <a href="#" data-wowhead="spell=207028">Inquisition</a> - Protection spec
        <a href="#" data-wowhead="spell=215652">Shield of Virtue</a> - Protection spec
      </pre>
      <pre v-if='chosenKlass === "Priest"'>
        Priest Abilities
        <a href="#" data-wowhead="spell=00585">Smite</a>
        <a href="#" data-wowhead="spell=81782">Power Word: Barrier</a>
        <a href="#" data-wowhead="spell=02006">Resurrection</a> - Ressurect
        <a href="#" data-wowhead="spell=21562">Power Word: Fortitude</a>
        <a href="#" data-wowhead="spell=09484">Shackle Undead</a>
        <a href="#" data-wowhead="spell=00605">Mind Control</a>
        <a href="#" data-wowhead="spell=00586">Fade</a>
        <a href="#" data-wowhead="spell=00528">Dispel Magic</a>
        <a href="#" data-wowhead="spell=32375">Mass Dispel</a>
        Priest Talents
        <a href="#" data-wowhead="spell=121536">Angelic Feather</a> - Discipline/Holy spec
        <a href="#" data-wowhead="spell=200183">Apotheosis</a> - Holy spec
        <a href="#" data-wowhead="spell=032546">Binding Heal</a> - Holy spec
        <a href="#" data-wowhead="spell=204883">Circle of Healing</a> - Holy spec
        <a href="#" data-wowhead="spell=280711">Dark Ascension</a> - Shadow spec
        <a href="#" data-wowhead="spell=263346">Dark Void</a> - Shadow spec
        <a href="#" data-wowhead="spell=110744">Divine Star</a> - Discipline/Holy spec
        <a href="#" data-wowhead="spell=246287">Evangelism</a> - Discipline spec
        <a href="#" data-wowhead="spell=120517">Halo</a> - Discipline/Holy spec
        <a href="#" data-wowhead="spell=265202">Holy Word: Salvation</a> - Holy spec
        <a href="#" data-wowhead="spell=271466">Luminous Barrier</a> - replaces Power Word: Barrier - requires Discipline spec
        <a href="#" data-wowhead="spell=205369">Mind Bomb</a> - replaces Psychic Scream
        <a href="#" data-wowhead="spell=123040">Mindbender</a> - Discipline spec
        <a href="#" data-wowhead="spell=200174">Mindbender</a> - Shadow spec
        <a href="#" data-wowhead="spell=129250">Power Word: Solace</a> - Discipline spec
        <a href="#" data-wowhead="spell=064044">Psychic Horror</a> - Shadow spec
        <a href="#" data-wowhead="spell=204197">Purge the Wicked</a> - Discipline spec
        <a href="#" data-wowhead="spell=214621">Schism</a> - Discipline spec
        <a href="#" data-wowhead="spell=204065">Shadow Covenant</a> - Discipline spec
        <a href="#" data-wowhead="spell=205385">Shadow Crash</a> - Shadow spec
        <a href="#" data-wowhead="spell=032379">Shadow Word: Death</a> - Shadow spec
        <a href="#" data-wowhead="spell=205351">Shadow Word: Void</a> - Shadow spec
        <a href="#" data-wowhead="spell=204263">Shining Force</a> - Discipline/Holy spec
        <a href="#" data-wowhead="spell=193223">Surrender to Madness</a> - Shadow spec
        <a href="#" data-wowhead="spell=263165">Void Torrent</a> - Shadow spec
        Priest PvP Talents
        <a href="#" data-wowhead="spell=197862">Archangel</a> - Discipline spec
        <a href="#" data-wowhead="spell=197871">Dark Archangel</a> - Discipline spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=213602">Greater Fade</a> - Holy spec
        <a href="#" data-wowhead="spell=213610">Holy Ward</a> - Holy spec
        <a href="#" data-wowhead="spell=196762">Inner Focus</a> - Holy spec
        <a href="#" data-wowhead="spell=209780">Premonition</a> - Discipline spec
        <a href="#" data-wowhead="spell=211522">Psyfiend</a> - Shadow spec
        <a href="#" data-wowhead="spell=197268">Ray of Hope</a> - Holy spec
        <a href="#" data-wowhead="spell=108968">Void Shift</a> - Shadow spec
      </pre>
      <pre v-if='chosenKlass === "Rogue"'>
        Rogue Abilities
        <a href="#" data-wowhead="spell=056814">Detection</a> - Track
        <a href="#" data-wowhead="spell=185311">Crimson Vial</a> - Self heal
        <a href="#" data-wowhead="spell=001766">Kick</a> - Interrupt
        <a href="#" data-wowhead="spell=001804">Pick Lock</a> - non combat
        <a href="#" data-wowhead="spell=002983">Sprint</a> - Fast move (4)
        <a href="#" data-wowhead="spell=001966">Feint</a>
        <a href="#" data-wowhead="spell=114018">Shroud of Concealment</a> - Mass stealth
        <a href="#" data-wowhead="spell=057934">Tricks of the Trade</a> - Redirect threat
        <a href="#" data-wowhead="spell=031224">Cloak of Shadows</a> - Remove all debuffs + immune
        Rogue Talents
        <a href="#" data-wowhead="spell=271877">Blade Rush</a> - Outlaw spec
        <a href="#" data-wowhead="spell=111240">Blindside</a> - Assassination spec
        <a href="#" data-wowhead="spell=121411">Crimson Tempest</a> - Assassination spec
        <a href="#" data-wowhead="spell=200806">Exsanguinate</a> - Assassination spec
        <a href="#" data-wowhead="spell=196937">Ghostly Strike</a> - Outlaw spec
        <a href="#" data-wowhead="spell=200758">Gloomblade</a> - Subtlety spec
        <a href="#" data-wowhead="spell=051690">Killing Spree</a> - Outlaw spec
        <a href="#" data-wowhead="spell=137619">Marked for Death</a>
        <a href="#" data-wowhead="spell=280719">Secret Technique</a> - Subtlety spec
        <a href="#" data-wowhead="spell=277925">Shuriken Tornado</a> - Subtlety spec
        <a href="#" data-wowhead="spell=005171">Slice and Dice</a> - Outlaw spec
        <a href="#" data-wowhead="spell=245388">Toxic Blade</a> - Assassination spec
        Rogue PvP Talents
        <a href="#" data-wowhead="spell=213981">Cold Blood</a> - Subtlety spec
        <a href="#" data-wowhead="spell=269513">Death from Above</a> - Air attack
        <a href="#" data-wowhead="spell=207777">Dismantle</a> - Outlaw spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=206328">Neurotoxin</a>
        <a href="#" data-wowhead="spell=198529">Plunder Armor</a>
        <a href="#" data-wowhead="spell=207736">Shadowy Duel</a>
        <a href="#" data-wowhead="spell=248744">Shiv</a>
        <a href="#" data-wowhead="spell=212182">Smoke Bomb</a>
      </pre>
      <pre v-if='chosenKlass === "Shaman"'>
        Shaman Abilities
        <a href="#" data-wowhead="spell=002484">Earthbind Totem</a> - Slow enemies
        <a href="#" data-wowhead="spell=006196">Far Sight</a> - Farseeing
        <a href="#" data-wowhead="spell=002008">Ancestral Spirit</a> - Ressurect
        <a href="#" data-wowhead="spell=002645">Ghost Wolf</a> - Fast running
        <a href="#" data-wowhead="spell=000546">Water Walking</a> - Waterwalk
        <a href="#" data-wowhead="spell=051514">Hex</a> - Polymorph
        <a href="#" data-wowhead="spell=269352">Hex</a> - Polymorph
        <a href="#" data-wowhead="spell=277778">Hex</a> - Polymorph
        <a href="#" data-wowhead="spell=211015">Hex</a> - Polymorph
        <a href="#" data-wowhead="spell=211010">Hex</a> - Polymorph
        <a href="#" data-wowhead="spell=277784">Hex</a> - Polymorph
        <a href="#" data-wowhead="spell=211004">Hex</a> - Polymorph
        <a href="#" data-wowhead="spell=210873">Hex</a> - Polymorph
        <a href="#" data-wowhead="spell=000556">Astral Recall</a> - non combat - Hearthstone
        <a href="#" data-wowhead="spell=192058">Capacitor Totem</a> - Stun (mass)
        <a href="#" data-wowhead="spell=002825">Bloodlust</a> - Hero
        <a href="#" data-wowhead="spell=032182">Heroism</a> - Hero
        <a href="#" data-wowhead="spell=108271">Astral Shift</a> - Damage reduction
        <a href="#" data-wowhead="spell=008143">Tremor Totem</a> - Remove sleep/fear
        <a href="#" data-wowhead="spell=000370">Purge</a> - Remove buff from target
        Shaman Talents
        <a href="#" data-wowhead="spell=108281">Ancestral Guidance</a> - Elemental spec
        <a href="#" data-wowhead="spell=207399">Ancestral Protection Totem</a> - Restoration spec
        <a href="#" data-wowhead="spell=114050">Ascendance</a> - Elemental spec
        <a href="#" data-wowhead="spell=114051">Ascendance</a> - Enhancement spec
        <a href="#" data-wowhead="spell=114052">Ascendance</a> - Restoration spec
        <a href="#" data-wowhead="spell=157153">Cloudburst Totem</a> - Restoration spec
        <a href="#" data-wowhead="spell=207778">Downpour</a> - Restoration spec
        <a href="#" data-wowhead="spell=000974">Earth Shield</a>
        <a href="#" data-wowhead="spell=188089">Earthen Spike</a> - Enhancement spec
        <a href="#" data-wowhead="spell=198838">Earthen Wall Totem</a> - Restoration spec
        <a href="#" data-wowhead="spell=051485">Earthgrab Totem</a> - Restoration spec
        <a href="#" data-wowhead="spell=117014">Elemental Blast</a> - Elemental spec
        <a href="#" data-wowhead="spell=196884">Feral Lunge</a> - Enhancement spec
        <a href="#" data-wowhead="spell=197211">Fury of Air</a> - Enhancement spec
        <a href="#" data-wowhead="spell=210714">Icefury</a> - Elemental spec
        <a href="#" data-wowhead="spell=192106">Lightning Shield</a> - Enhancement spec
        <a href="#" data-wowhead="spell=192222">Liquid Magma Totem</a> - Elemental spec
        <a href="#" data-wowhead="spell=192249">Storm Elemental</a> - Elemental spec
        <a href="#" data-wowhead="spell=191634">Stormkeeper</a> - Elemental spec
        <a href="#" data-wowhead="spell=197214">Sundering</a> - Enhancement spec
        <a href="#" data-wowhead="spell=210643">Totem Mastery</a> - Elemental spec
        <a href="#" data-wowhead="spell=262395">Totem Mastery</a> - Enhancement spec
        <a href="#" data-wowhead="spell=197995">Wellspring</a> - Restoration spec
        <a href="#" data-wowhead="spell=192077">Wind Rush Totem</a>
        Shaman PvP Talents
        <a href="#" data-wowhead="spell=204331">Counterstrike Totem</a>
        <a href="#" data-wowhead="spell=210918">Ethereal Form</a> - Enhancement spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=204336">Grounding Totem</a>
        <a href="#" data-wowhead="spell=204437">Lightning Lasso</a> - Elemental spec
        <a href="#" data-wowhead="spell=204330">Skyfury Totem</a>
        <a href="#" data-wowhead="spell=204293">Spirit Link</a> - Restoration spec
        <a href="#" data-wowhead="spell=204366">Thundercharge</a> - Enhancement spec
      </pre>
      <pre v-if='chosenKlass === "Warlock"'>
        Warlock Abilities
        <a href="#" data-wowhead="spell=115746">Felbolt</a>
        <a href="#" data-wowhead="spell=000688">Summon Imp</a>
        <a href="#" data-wowhead="spell=005782">Fear</a>
        <a href="#" data-wowhead="spell=006201">Create Healthstone</a>
        <a href="#" data-wowhead="spell=005784">Felsteed</a> - Summon mount
        <a href="#" data-wowhead="spell=000697">Summon Voidwalker</a>
        <a href="#" data-wowhead="spell=000755">Health Funnel</a>
        <a href="#" data-wowhead="spell=000126">Eye of Kilrogg</a> - Farseeing
        <a href="#" data-wowhead="spell=005697">Unending Breath</a>
        <a href="#" data-wowhead="spell=000712">Summon Succubus</a>
        <a href="#" data-wowhead="spell=000710">Banish</a> - Crowd control
        <a href="#" data-wowhead="spell=000691">Summon Felhunter</a>
        <a href="#" data-wowhead="spell=119898">Command Demon</a>
        <a href="#" data-wowhead="spell=023161">Dreadsteed</a> - Summon mount
        <a href="#" data-wowhead="spell=000698">Ritual of Summoning</a>
        <a href="#" data-wowhead="spell=020707">Soulstone</a> - allow BR (SHIFT-W)
        <a href="#" data-wowhead="spell=104773">Unending Resolve</a> - Damage reduction (barkskin)
        <a href="#" data-wowhead="spell=001098">Enslave Demon</a> - Capture
        <a href="#" data-wowhead="spell=029893">Create Soulwell</a> - Feed party
        <a href="#" data-wowhead="spell=111771">Demonic Gateway</a>
        Warlock Talents
        <a href="#" data-wowhead="spell=267211">Bilescourge Bombers</a> - Demonology spec
        <a href="#" data-wowhead="spell=111400">Burning Rush</a>
        <a href="#" data-wowhead="spell=152108">Cataclysm</a> - Destruction spec
        <a href="#" data-wowhead="spell=196447">Channel Demonfire</a>
        <a href="#" data-wowhead="spell=108416">Dark Pact</a> - Shield
        <a href="#" data-wowhead="spell=113858">Dark Soul: Instability</a> - Destruction spec
        <a href="#" data-wowhead="spell=113860">Dark Soul: Misery</a> - Affliction spec
        <a href="#" data-wowhead="spell=264106">Deathbolt</a> - Affliction spec
        <a href="#" data-wowhead="spell=268358">Demonic Circle</a>
        <a href="#" data-wowhead="spell=267171">Demonic Strength</a> - Demonology spec
        <a href="#" data-wowhead="spell=265412">Doom</a> - Demonology spec
        <a href="#" data-wowhead="spell=198590">Drain Soul</a> - Affliction spec
        <a href="#" data-wowhead="spell=108503">Grimoire of Sacrifice</a> - Affliction/Destruction spec
        <a href="#" data-wowhead="spell=111898">Grimoire: Felguard</a> - Demonology spec
        <a href="#" data-wowhead="spell=048181">Haunt</a> - Affliction spec
        <a href="#" data-wowhead="spell=006789">Mortal Coil</a> - Fear
        <a href="#" data-wowhead="spell=267217">Nether Portal</a> - Demonology spec
        <a href="#" data-wowhead="spell=205179">Phantom Singularity</a> - Affliction spec
        <a href="#" data-wowhead="spell=264130">Power Siphon</a> - Demonology spec
        <a href="#" data-wowhead="spell=017877">Shadowburn</a> - Destruction spec
        <a href="#" data-wowhead="spell=006353">Soul Fire</a> - Destruction spec
        <a href="#" data-wowhead="spell=264057">Soul Strike</a> - Demonology spec
        <a href="#" data-wowhead="spell=264119">Summon Vilefiend</a> - Demonology spec
        <a href="#" data-wowhead="spell=278350">Vile Taint</a> - Affliction spec
        Warlock PvP Talents
        <a href="#" data-wowhead="spell=200546">Bane of Havoc</a> - Destruction spec - Replaces Havoc
        <a href="#" data-wowhead="spell=212459">Call Fel Lord</a> - Demonology spec
        <a href="#" data-wowhead="spell=212619">Call Felhunter</a> - Demonology spec
        <a href="#" data-wowhead="spell=201996">Call Observer</a> - Demonology spec
        <a href="#" data-wowhead="spell=221703">Casting Circle</a>
        <a href="#" data-wowhead="spell=199954">Curse of Fragility</a>
        <a href="#" data-wowhead="spell=234877">Curse of Shadows</a> - Afflication spec
        <a href="#" data-wowhead="spell=199890">Curse of Tongues</a> - Debuff
        <a href="#" data-wowhead="spell=199892">Curse of Weakness</a> - Debuff
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=212295">Nether Ward</a>
        <a href="#" data-wowhead="spell=212623">Singe Magic</a> - Demonology spec
        <a href="#" data-wowhead="spell=212356">Soulshatter</a> - Affliction spec
      </pre>
      <pre v-if='chosenKlass === "Warrior"'>
        Warrior Abilities
        <a href="#" data-wowhead="spell=088163">Attack</a>
        <a href="#" data-wowhead="spell=115767">Deep Wounds</a>
        <a href="#" data-wowhead="spell=000100">Charge</a> - Charge
        <a href="#" data-wowhead="spell=000355">Taunt</a> - Taunt
        <a href="#" data-wowhead="spell=057755">Heroic Throw</a> - Ranged taunt/threat
        <a href="#" data-wowhead="spell=006552">Pummel</a> - Interrupt
        <a href="#" data-wowhead="spell=006544">Heroic Leap</a> - Air leap
        <a href="#" data-wowhead="spell=006673">Battle Shout</a> - Buff
        Warrior Talents
        <a href="#" data-wowhead="spell=107574">Avatar</a> - Protection spec
        <a href="#" data-wowhead="spell=046924">Bladestorm</a> - Fury spec
        <a href="#" data-wowhead="spell=000845">Cleave</a> - Arms spec
        <a href="#" data-wowhead="spell=262228">Deadly Calm</a> - Arms spec
        <a href="#" data-wowhead="spell=197690">Defensive Stance</a> - Arms spec
        <a href="#" data-wowhead="spell=118000">Dragon Roar</a> - Fury/Protection spec
        <a href="#" data-wowhead="spell=100130">Furious Slash</a> - Fury spec
        <a href="#" data-wowhead="spell=202168">Impending Victory</a>
        <a href="#" data-wowhead="spell=152277">Ravager</a> - Arms spec
        <a href="#" data-wowhead="spell=228920">Ravager</a> - Protection spec
        <a href="#" data-wowhead="spell=000772">Rend</a> - Arms spec
        <a href="#" data-wowhead="spell=280772">Siegebreaker</a> - Fury spec
        <a href="#" data-wowhead="spell=260643">Skullsplitter</a> - Arms spec
        <a href="#" data-wowhead="spell=107570">Storm Bolt</a>
        <a href="#" data-wowhead="spell=262161">Warbreaker</a> - Arms spec
        Warrior PvP Talents
        <a href="#" data-wowhead="spell=213871">Bodyguard</a> - Protection spec
        <a href="#" data-wowhead="spell=199261">Death Wish</a> - Fury spec
        <a href="#" data-wowhead="spell=236077">Disarm</a>
        <a href="#" data-wowhead="spell=206572">Dragon Charge</a> - Protection spec
        <a href="#" data-wowhead="spell=236273">Duel</a> - Arms spec
        <a href="#" data-wowhead="spell=208683">Gladiator's Medallion</a> - any class
        <a href="#" data-wowhead="spell=213915">Mass Spell Reflection</a> - Protection spec - replaces Spell Reflection
        <a href="#" data-wowhead="spell=205800">Oppressor</a> - Protection spec - replaces Taunt
        <a href="#" data-wowhead="spell=198817">Sharpen Blade</a> -  Arms spec
        <a href="#" data-wowhead="spell=198912">Shield Bash</a> - Protection spec
        <a href="#" data-wowhead="spell=216890">Spell Reflection</a> - Arms/Fury spec
        <a href="#" data-wowhead="spell=236320">War Banner</a> - Arms spec
      </pre>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Spell from './Spell.vue';

@Component({
  components: {
    Spell,
  },
})
export default class Spells extends Vue {
  get chosenKlass() {
    return this.$store.getters.chosenKlass;
  }
  get chosenSpec() {
    return this.$store.getters.chosenSpec;
  }
}
</script>