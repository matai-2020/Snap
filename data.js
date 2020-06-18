const dex = [
    {id: 1, name: 'Pete' , pokemon: ['Larvitar', 'Pupitar', 'Tyranitar'],type: 'Ground', audio: [], image: ['larvitar.png','pupitar.png','tyranitar.png'], description:[
        'Larvitar, the Rock Skin Pokémon. Larvitar generally hatch deep within the earth and take a long time before coming to the surface.',
        'Pupitar, the Hard Shell Pokémon. Pupitar is encased in a nearly indestructible shell and has enough power to topple a mountain.',
        'A Tyranitar is so overwhelmingly powerful, it can bring down a whole mountain to make its nest. It roams in mountains seeking new opponents to fight.'
    ]},
    {id: 2, name: 'Ariel', pokemon: ['Pichu', 'Pikachu', 'Raichu'], type: 'Electric', audio: [], image: ['pichu.png', 'pikachu.png', 'raichu.png'], 
    description:[
        'Pichu, the Tiny Mouse Pokémon. A pre-evolved form of Pikachu. Despite their size, Pichu release bursts of electricity that can shock even humans. However, Pichu are unskilled at controlling their electricity, and sometimes release it by accident when surprised, or when laughing, and shock themselves.',
        'Pikachu, the Mouse Pokémon, and the evolved form of Pichu. Pikachus tail is sometimes struck by lightning as it raises it to check its surroundings.',
        'Raichu, a Mouse Pokémon of the Electric element. Raichu is the evolved form of Pikachu. It can shock with more than 100,000 volts, enough to render a Dragonite unconscious.'
    ]},
    {id: 3, name: 'Rikke', pokemon: ['Starly', 'Staravia', 'Staraptor'], type: 'Flying', audio: [], image: ['starly.png', 'staravia.png', 'staraptor.png'], description: [
        'Starly, the Starling Pokémon. Starly normally travels in a flock, but when alone, it is hard to notice.',
        'Staravia, the Starling Pokémon. Staravia flies over forests and fields, and travels in large flocks.',
        'Staraptor, the Predator Pokémon, and the evolved form of Staravia. Staraptors ferocious nature means that it has no problem challenging much larger opponents.'
    ]},
    {id: 4, name: 'Keenen', pokemon: ['Bulbasaur', 'Ivysaur', 'Venusaur'], type: 'Grass', audio: [], image: ['bulbasaur.png', 'ivysaur.png', 'venusaur.png'], description: [
        'Bulbasaur. It bears the seed of a plant on its back from birth. The seed slowly develops. Researchers are unsure whether to classify Bulbasaur as a plant or animal. Bulbasaur are extremely tough and very difficult to capture in the wild.',
        'The Seed Pokémon, Ivysaur, Bulbasaurs evolved form. The bulb on its back absorbs nourishment and blooms into a large flower.',
        'Venusaur, the Seed Pokémon. When Venusaur sprouts out its large flower petals and absorbs the rays of the sun, it becomes energized.'
    ]},
    {id: 5, name: 'Kim', pokemon: ['Charmander', 'Charmeleon', 'Charizard'], type: 'Fire' , audio: [], image: ['charmander.png', 'charmeleon.png', 'charizard.png'], description: [
        'Charmander, the Lizard Pokémon. Charmanders health can be gauged by the fire on the tip of its tail, which burns intensely when its in good health.',
        'Charmeleon, the Flame Pokémon and the evolved form of Charmander. Charmeleon knocks down opponents with its tail, then defeats them using razor-sharp claws.',
        'Charizard, the Flame Pokémon. When competing in intense battles, Charizards flame becomes more intense as well.'
    ]},
    {id: 6, name: 'Jonty', pokemon: ['Chikorita', 'Bayleef', 'Meganium'], type: 'Grass' , audio: [], image: ['chikorita.png', 'bayleef.png', 'meganium.png'], description: [
        'Chikorita, the Leaf Pokémon. Chikorita emit pleasant aromas from the leaves on their heads and they love to sunbathe.',
        'Bayleef, the Leaf Pokémon. The evolved form of Chikorita. Bayleef emits a spicy aroma from the leaves around its neck and its Razor Leaf is extremely powerful.',
        'Meganium, the Herb Pokémon. Meganiums breath has the power to revive dead grass and plants, and the fragrance emanating from its flower petals can soothe any angry, hostile emotions.'
    ]},
    {id: 7, name: 'Isaac', pokemon: ['Rowlet', 'Datrix', 'Decidueye'], type: 'Grass' , audio: [], image: ['rowlet.png','dartrix.png','decidueye.png'], description: [
        'Rowlet, the Grass Quill Pokémon. It stores energy during the day from photosynthesis. It swoops down without making a sound and unleashes a powerful kick without being noticed.',
        'Dartrix, the Blade Quill Pokémon. It throws its darts, which are very sharp feathers, at enemies. Quite image-conscious, its always preening.',
        'Decidueye, the Arrow Quill Pokémon. Decidueyes aim is so good that when it fires its arrow quills, it can hit a pebble over a hundred yards away.'
    ]},
    {id: 8, name: 'Ariana', pokemon: ['Pidgey', 'Pidgeotto', 'Pidgeot'], type: 'Flying' , audio: [], image: ['pidgey.png', 'pidgeotto.png', 'pidgeot.png'], description: [
        'Pidgey is a Flying Pokémon. Among all the Flying Pokémon, it is the gentlest and easiest to capture. A perfect target for the beginning Pokémon Trainer to test his Pokémons skills.',
        'Pidgeotto, an evolved form of the Pidgey. It is armed with sharp claws and dives from the sky to capture its prey. Unlike the more gentle Pidgey, Pidgeotto can be dangerous. Approach with extreme caution.',
        'Pidgeot, the Bird Pokémon. The evolved form of Pidgeotto. It can fly at twice the speed of sound at an altitude of nearly one mile.'
    ]},
    {id: 9, name: 'Jake', pokemon: ['Treecko', 'Grovyle', 'Sceptile'], type: 'Grass' , audio: [], image: ['treecko.png', 'grovyle.png', 'sceptile.png'], description: [
        'Treecko, the Wood Gecko Pokémon. Numerous tiny spikes cover the bottoms of Treeckos feet, allowing it to walk on ceilings and walls.',
        'Grovyle, the Wood Gecko Pokémon. Grovyle is the evolved form of Treecko and live deep within forests. Known as tree climbers, they jump easily from one tree to the next.',
        'Sceptile, the Forest Pokémon. Its arms are equipped with razor-sharp leaves, and it moves lightly through tree branches in order to attack its enemies.'
    ]},
    {id: 10, name: 'Johnny', pokemon: ['Rookidee', 'Corvisquire', 'Corviknight'], type: 'Flying' , audio: [], image: ['rookidee.png', 'corvisquire.png', 'corviknight.png'], description: [
        'It will bravely challenge any opponent, no matter how powerful. This Pokémon benefits from every battle—even a defeat increases its strength a bit.',
        'Smart enough to use tools in battle, these Pokémon have been seen picking up rocks and flinging them or using ropes to wrap up enemies.',
        'This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe.'
    ]},
    {id: 11, name: 'Zac', pokemon: ['Totodile', 'Croconaw', 'Feraligatr'], type: 'Water' , audio: [], image: ['totodile.png', 'croconaw.png', 'feraligatr.png'], description: [
        'Totodile, the Big Jaw Pokémon. Its highly developed jaw is so powerful, it can crush practically anything. Trainers beware: this Pokémon loves to use its teeth.',
        'Croconaw, the Big Jaw Pokémon, and the evolved form of Totodile. Once it bites down on something, it wont let go until it loses its fangs. But new fangs grow back quickly.',
        'Feraligatr, the Big Jaw Pokémon. The final evolution of Totodile. Once a Feraligatr has clamped its powerful jaws around an opponent, it wont let go until the opponent is defeated.'
    ]},
    {id: 12, name: 'Louis', pokemon: ['Sandile', 'Krokorok', 'Krookidile'], type: 'Ground' , audio: [], image: ['sandile.png', 'krokorok.png', 'krookodile.png'], description: [
        'They live buried in the sands of the desert. The sun-warmed sands prevent their body temperature from dropping.',
        'Krokorok, the Desert Croc Pokémon, and the evolved form of Sandile. The special membrane that covers Krokoroks eyes detects heat, which allows it to see in the dark.',
        'Krookodile, the Intimidation Pokémon. Krookodile can see the smallest prey from miles away, even in the midst of a sandstorm.'
    ]},
    {id: 13, name: 'Don', pokemon: ['Torchic', 'Combusken', 'Blaziken'], type: 'Fire' , audio: [], image: ['torchic.png', 'combusken.png', 'blaziken.png'], description: [
        'Torchic sticks with its Trainer, following behind with unsteady steps. This Pokémon breathes fire of over 1,800 degrees F, including fireballs that leave the foe scorched black.',
        'Combusken, the Young Fowl Pokémon. Combusken is the evolved form of Torchic. Its quick and powerful legs are capable of dishing out ten kicks in one second.',
        'Blaziken, the Blaze Pokémon. Blaziken is able to easily leap over 30-story buildings with its great lower body strength.'
    ]},
    {id: 14, name: 'Laché', pokemon: ['Pidove', 'Tranquill', 'Unfezant'], type: 'Flying' , audio: [], image: ['pidove.png', 'tranquill.png', 'unfezant.png'], description: [
        'Pidove, the Tiny Pigeon Pokémon. A Pidove flocks cooing can get extremely noisy. Pidove is not attracted to shiny objects.',
        'Tranquill, the Wild Pigeon Pokémon, and the evolved form of Pidove. It is believed that a peaceful place without conflict exists deep in the forest where Tranquill live.',
        'Unfezant, the Proud Pokémon and the evolved form of Tranquill. Male Unfezant threaten their opponents by swinging their heads. Female Unfezants flying skills surpass that of male Unfezant.'
    ]},
    {id: 15, name: 'Emily', pokemon: ['Rhyhorn', 'Rhydon', 'Rhyperior'], type: 'Ground' , audio: [], image: ['rhyhorn.png', 'rhydon.png', 'rhyperior.png'], description: [
        'Rhyhorn, the Spiked Pokémon. Rhyhorn is known for its physical power and its considerable offensive and defensive battle skills.',
        'Rhydon, the evolved form of Rhyhorn. It is known as the Drill Pokémon. Its large horn gives it formidable attack power.',
        'Rhyperior, the Drill Pokémon and the evolved form of Rhydon. Rhyperior can concentrate strength in its body and expand, causing the stone in its hand to launch.'
    ]},
    {id: 16, name: 'Lane', pokemon: ['Mudkip', 'Marshtomp', 'Swampert'], type: 'Water' , audio: [], image: ['mudkip.png', 'marshtomp.png', 'swampert.png'], description: [
        'Mudkip, the Mud Fish Pokémon. Mudkip uses the sensitive radar receptors on its headfin to determine whats going on around it. In a pinch, it can brandish enough power to crush rocks.',
        'Marshtomp, the Mud Fish Pokémon. Marshtomp is the evolved form of Mudkip. It is able to move and swim more quickly through mud than through water.',
        'Swampert, the Mud Fish Pokémon. Swampert is the evolved form of Marshtomp. It is able to easily drag large stone weighing over one ton. It is also able to see through cloudy waters and detect approaching storms with its fin.'
    ]},
    {id: 17, name: 'Dougal', pokemon: ['Cyndaquil', 'Quilava', 'Typhlosion'], type: 'Fire' , audio: [], image: ['cyndaquil.png', 'quilava.png', 'typhlosion.png'], description: [
        'Cyndaquil, the Fire Mouse Pokémon. Normally mild and even-tempered, Cyndaquil will shoot a scorching flame out of its back when upset.',
        'Quilava, the Volcano Pokémon, and the evolved form of Cyndaquil. Its body is covered with fire-proof fur and can withstand any Fire-type attack.',
        'Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.'
    ]},
    {id: 18, name: 'Carolyn', pokemon: ['Squirtle', 'Wartortle', 'Blastoise'], type: 'Water' , audio: [], image: ['squirtle.png', 'wartortle.png', 'blastoise.png'], description: [
        'Squirtle, the Tiny Turtle Pokémon. During battle, Squirtle hides in its shell that sprays water at its opponent whenever it can.',
        'Wartortle, the Turtle Pokémon. The evolved form of Squirtle. A highly sought-after Pokémon because its long fur-covered tail is said to bring good luck.',
        'Blastoise, the Shellfish Pokémon. The evolved form of Wartortle. Blastoises strength lies in its power, rather than its speed. Its shell is like armor and attacks from the hydro cannons on its back are virtually unstoppable.'
    ]},
    {id: 19, name: 'Phoenix', pokemon: ['Elekid', 'Electabuzz', 'Electivire'], type: 'Electric' , audio: [], image: ['elekid.png', 'electabuzz.png', 'electivire.png'], description: [
        'Elekid, the Electric Pokémon. Elekid waves its arms to produce a strong electrical charge and gains strength when lightning is present.',
        'Electabuzz, the Electric Pokémon. Electabuzz is the evolved form of Elekid. With powerful electric currents constantly coursing through its body, Electabuzz appears to glow.',
        'Electivire, the Thunderbolt Pokémon. An Electric type. When Electivire gets excited, it beats its chest, which creates electrical sparks and the sound of thunder.'
    ]}
    
    

]