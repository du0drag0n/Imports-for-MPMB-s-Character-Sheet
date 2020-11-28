/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Weapons
	Effect:		This script adds a number of weapons from Sherries homebrew weapons list "Sherries Equipment of Legends"
				(https://homebrewery.naturalcrit.com/share/84NhwLJotElc)
	Code by:	du0drag0n
	Date:		2020-11-11 (sheet v13.0.05)

	*/

var iFileName = "Sherries Equipment of Legend.js";
RequiredSheetVersion("13.0.05");

SourceList.j = {
	name : "Sherries Equipment of Legend",
	abbreviation : "SEoL",
	group : "Homebrew",
	url : "https://homebrewery.naturalcrit.com/share/84NhwLJotElc",
	date : "2020/11/11"
};


MagicItemsList["clanes helm sword"] = {
	name : "Clanes Helm Sword",
	source : ["j", 1],
	type : "weapon (sword)",
	rarity : "rare",
	description : "An iron sword that is surprisingly light, which appears to have the remains of a cardiovascular system in it. When a liquid is attached to via a small hole in its handle, it leaks out of the blade like dew off of grass. See Notes Page",
	descriptionFull: "Refer to Notes section for canister types you can add",
	toNotesPage : [{
	name : "Clan-Helm Sword",
	note : "\n   Various strange things can happen whenever I cast a spell.",
	note : [
		"Vial: 3, Flask: 5, Anything Bigger: 8",
		"Acid: 1d6 Acid Damage",
		"Basic Poison: 1d4 Poision Damage",
		"Holy Water: 1d6 Radiant Damage (Fiend or Undead)",
		"Oil: 5 Fire Damage (when lit, for 1 minute)",
		"Alchemist's Fire: 1d4 Fire Damage (start of creatures turn)",
		"Perfume: They now smell nice",
		]
	}],
	attunement : false,
	weight : 4,
	action : [["bonus action", "Add/Remove Canister"]],
	weaponsAdd : ["Clanes-Helm Sword"],
	weaponOptions : {
		baseWeapon : "shortsword",
		regExpSearch : /^(?=.*clanes)(?=.*helm).*$/i,
		name : "Clanes-Helm Sword",
		source : ["j", 1],
		list : "Melee",
		ability : 1,
		type : "Martial",
		damage : [1, 6, "piercing"],
		range : "Melee",
		weight : 4,
		description : "Finesse, light, +liquid damage (see notes)",
		abilitytodamage : true,
	}
};

MagicItemsList["sunmote arrow"] = {
	name : "Sunmote Arrow",
	source : ["j", 1],
	type : "weapon (any ammunition)",
	rarity : "Rare",
	description : "This magical arrow deals an additional 2d6 radiant damage when it hits. The target rolls a DC 14 Constitution saving throw; on a failure, they are blinded until the beginning of your next turn. This arrow disappears when used and reappears in your possession the next morning at dawn.",
	descriptionFull : "The rare and precious arrows known as sunmotes are made by the Keepers of the Sun, for the exclusive use of archers who have pledged themselves to the protection of the planar city of Amraoth. The Keepers of the Sun would sooner see these arrows destroyed than wielded by anyone they deem unworthy",
	allowDuplicates : true,
	attunement : true,
	action : ["action", ' (2d6 Radiant)'],
	usages : 1,
	recovery : "dawn",
};

MagicItemsList["dragonskin quiver"] = {
	name : "Dragonskin Quiver",
	source : ["j", 1],
	type : "weapon",
	description : "Has charges equal to your level. As a bonus action you can draw an arrow or bolt holstered in this quiver, main action to shoot. Using these arrows grant you an extra d8 elemental damage (determined by the skin type) to the damage roll.",
	descriptionFull : "Has charges equal to your level. As a bonus action you can draw an arrow or bolt holstered in this quiver, main action to shoot. Using these arrows grant you an extra d8 elemental damage (determined by the skin type) to the damage roll.",
	allowDuplicates : true,
		choices : ["Brass","Bronze", "Silver", "Gold"],
			"brass" : {
				name : "Brass Dragonskin Quiver",
				rarity : "Rare",
				description : "Has charges equal to your level. As a bonus action you can draw an arrow or bolt from the quiver, use your main action to shoot. Using these arrows grant you an extra 1d8 Fire Damage to the damage roll.",
				descriptionFull : "Has charges equal to your level. As a bonus action you can draw an arrow or bolt from the quiver, use your main action to shoot. Using these arrows grant you an extra 1d8 Fire Damage to the damage roll.",
				attunement : true,
				action : ["bonus action", "Dragon Quiver (1d8 Fire)"],
				usages : levels.map(function (n) { return n;}),
				recovery : "long rest"
			},
			"bronze" : {
				name : "Bronze Dragonskin Quiver",
				rarity : "Rare",
				description : "Has charges equal to your level. As a bonus action you can draw an arrow or bolt from the quiver, use your main action to shoot. Using these arrows grant you an extra 1d8 Thunder Damage to the damage roll.",
				descriptionFull : "",
				attunement : true,
				action : ["bonus action", "Dragon Quiver (1d8 Thunder)"],
				usages : levels.map(function (n) { return n;}),
				recovery : "long rest"
			},
			"silver" : {
				name : "Silver Dragonskin Quiver",
				rarity : "very rare",
				description : "Has charges equal to your level. As a bonus action you can draw an arrow or bolt from the quiver, use your main action to shoot. Using these arrows grant you an extra 1d8 Ice Damage to the damage roll.",
				descriptionFull : "",
				attunement : true,
				action : ["bonus action", "Dragon Quiver (1d8 Ice)"],
				usages : levels.map(function (n) { return n;}),
				recovery : "long rest"
			},
			"gold" : {
				name : "Gold Dragonskin Quiver",
				rarity : "legendary",
				description : "Has charges equal to your level. As a bonus action you can draw an arrow or bolt from the quiver, use your main action to shoot. Using these arrows grant you an extra 2d8 Fire Damage to the damage roll.",
				descriptionFull : "",
				attunement : true,
				action : ["bonus action", "Dragon Quiver (2d8 Fire)"],
				usages : levels.map(function (n) { return n;}),
				recovery : "long rest"
			},
};
