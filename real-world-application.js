/*Imagine you work for Crayola and your boss just told you that the Crayola1990 API needs to have a url slug generated for all of the colors names.
* To do this you need to lowercase and hyphenate each color in the following array.
* You can not edit the values in the array by hand as your boss is wanting a loop that can be applied to any set of crayola boxes in the future
*/
var crayola1990 = [
	'scarlet',
	'sunset Orange',
	'vivid Tangerine',
	'macaroni and Cheese',
	'mango Tango',
	'banana Mania',
	'dandelion',
	'canary',
	'inchworm',
	'asparagus',
	'granny Smith Apple',
	'fern',
	'shamrock',
	'mountain Meadow',
	'jungle Green',
	'caribbean Green',
	'tropical Rain Forest',
	'rrobins Egg Blue',
	'teal Blue',
	'outer Space',
	'pacific Blue',
	'cerulean',
	'denim',
	'wild Blroyal Purple',
	'wisteria',
	'vivid Violet',
	'purple Mountains Majesty',
	'fuchsia',
	'pink Flamingo',
	'jazzberry Jam',
	'eggplant',
	'cerise',
	'wild Strawberry',
	'cotton Candy',
	'razzmatazz',
	'pig Pink',
	'blush',
	'tickle Me Pink',
	'mauvelous',
	'pink Sherbert',
	'fuzzy Wuzzy',
	'beaver',
	'tumbleweed',
	'desert Sand',
	'almond',
	'shadow',
	'timberwolf',
	'antique Brass'
];

//create a loop that will iterate over each item in the array and then use the String methods to modify the value at the current position in the array

/***** HINTS *******
 * remember strings are immutable but the value of a variable can be adjusted as often as needed.
 * take advantage of the methods available on stings http://www.w3schools.com/js/js_string_methods.asp
 * there are multiple ways to do something like this but you might consider using split and join
 */ 