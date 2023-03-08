let obj = [1,2,3,4,[{"food": "Hungry"},2,3,[1,2,[1,2]]]]

const jsonDeepCopy = JSON.parse(JSON.stringify(obj));
const structurdClne = structuredClone(obj)



/**
 * Creates a deep clone of value.
 * let users = [{ 'user': 'barney' },{ 'user': 'fred' }];
 * let deepClone = cloneDeep(users)
 * deepClone === users → false
 * deepClone[0] === users[0] → false
 * deepClone[0].user === users[0].user → true
 */
let users = [{ 'user': 'barney', "inside": {"World": "Hello"}},{ 'user': 'fred' }];

function cloneDeep(value) {
   
}

let deepClone = cloneDeep(users)

