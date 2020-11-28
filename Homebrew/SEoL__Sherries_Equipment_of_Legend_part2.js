/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Weapons
	Effect:		This script adds a Chicken to the Companion list
				(https://homebrewery.naturalcrit.com/share/84NhwLJotElc)
	Code by:	du0drag0n
	Date:		2020-11-23 (sheet v13.0.05)

	*/

var iFileName = "Sherries Equipment of Legend - The Chicken.js";
RequiredSheetVersion("13.0.05");

SourceList.j = {
	name : "Sherries Equipment of Legend -  The Chicken",
	abbreviation : "SEoL",
	group : "Homebrew",
	url : "https://www.gmbinder.com/share/-MMtA1wskpsgDZsV5314",
	date : "2020/11/26"
};

CreatureList["chicken"] = {
	name : "Chicken",
	source : ["j", 3],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 3,
	hd : [1, 4], //[#, die]
	speed : "25 ft, fly 15 ft",
	scores : [2, 14, 8, 2, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Senses if other chickens are in 15ft",
	passivePerception : 11,
	languages : "Chicken",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
  attacks : [{
			name : "Peck",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
  features : [{
		name : "Command Familiar",
		description : "As a bonus action, I can command the familiar to make an attack or to use the Help Action."
	},
/*  {
		name : "Primal Rebirth",
		description : "If the chicken died within the last hour, I can use my action, touch it and expend a spell slot of 1st level or higher. The chicken returns to life after 1 minute with max hp."
	}],
	actions : [{
			name : "Pheonix Fire",
			description : "1/day the chicken explodes casting fireball where it stands. At the end of a long rest Chicken is reborn.",
		},*/
	],

	traits : [
		{
    name : "Harmlessly Cute",
    description : "Making them undetectable as a threat, unless a successful Insight check is done. Save DC = 10+prof+wis."
		},{
		name : "Clumsy Flyer",
		description : "A chicken cannot sustain flight for more than one turn."
  	},

	]
};
