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

function currencyExchange(currencyList, capital, startNation, targetNation){
    let countryObj = {};
    let visitedCountry = {};

    for(let i = 0; i<currencyList.length; i++){
        if(!countryObj[currencyList[i][0]]){
            countryObj[currencyList[i][0]] = []
        }
        if(!countryObj[currencyList[i][1]]){
            countryObj[currencyList[i][1]] = []
        }
        countryObj[currencyList[i][0]].push([currencyList[i][1], currencyList[i][2]])
        countryObj[currencyList[i][1]].push([currencyList[i][0], currencyList[i][2]])
    }

    function dfs(startNation, targetNation, exchangeRate){
        let output = 1;
        if(startNation === targetNation){
            output = exchangeRate
            return output
        }
        if(!visitedCountry[startNation]) visitedCountry[startNation] = true
        for(nations of countryObj[startNation]){
            if(visitedCountry[nations[0]] === undefined) output = dfs(nations[0], targetNation, exchangeRate*nations[1]);
        }
        return output
    }

    return capital * dfs(startNation, targetNation, 1)    
    
}

currencyExchange(currencyList, 1000, 'EU', 'KOR')