/*
Given a certain currency exchange rate,
Find out exchange rate from EU to USD
*/

let currencyList = [
    ['EU', 'BTP', 1.3],
    ['EU', 'JPY', 1.1],
    ['JPY', 'CHY', 1.2],
    ['JPY', 'KOR', 1.2],
    ['KOR', 'USD', 2]
]

const exchange = (start, end, money) =>{
    let adjList = {};
    for(let [s,e,m] of currencyList){
        if(!adjList[s]) adjList[s] = [];
        if(!adjList[e]) adjList[e] = [];

        adjList[s].push([e,m])
        adjList[e].push([s,m])

    }
    let visited = {};

    const dfs = (start, end, money) =>{
        if(start === end) return money
        visited[start] = true;
        for(let [nextCountry, exchangeRate] of adjList[start]){
            if(!visited[nextCountry]){
                let result = dfs(nextCountry, end, money*exchangeRate)
                if(typeof result === "number"){
                    return result;
                }
            }
        }
    }

    return dfs(start, end, money)
}

exchange('USD', 'JPY', 1)