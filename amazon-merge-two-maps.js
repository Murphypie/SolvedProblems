/*
The problem statement: Write a logic to merge two Maps. The maps may contains other maps as values.
Constrains:

The key will be string in both the maps.
In case of collision take the value from the first map.
If the same key has maps as value in both the maps, they are merged.

map1 = {
	"a" : 10,
	"b" : {
		"d": "chair",
		"e": 25
	}
}

map2 = {
	"a": 15,
	"b": {
		"d": "table",
		"f": "office"
	},
	"c": 50
}

result = {
	"a": 10,
	"b": {
		"d": "chair",
		"e": 25
		"f": "office"
	},
	"c": 50
}
*/

function mergeTwoMaps(map1, map2){
    for(let key in map2){
        if(!map1[key]){
            map1[key] = map2[key]
        }
        if(typeof map1[key] === 'object'){
            mergeTwoMaps(map1[key], map2[key])
        }
    }
    return map1
}

let map1 = {
	"a" : 10,
	"b" : {
		"d": "chair",
		"e": 25
	}
}

let map2 = {
	"a": 15,
	"b": {
		"d": "table",
		"f": "office",
        "e": 55
	},
	"c": 50
}

mergeTwoMaps(map1, map2)

















<<<<<<< HEAD
=======





>>>>>>> 3392afb8bb6637280a00bf0185f701ce8afe503e
/*
 for(let item in map2){
        if(!map1[item]){
            map1[item] = map2[item]
        }else if(map1[item] && typeof map2[item] === 'object'){
            mergeTwoMaps(map1[item], map2[item]);
        }
    }
    return map1;
*/