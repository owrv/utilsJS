fs = require('fs')

function saveFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err)
        console.log(`Operation completed!\nFile ${fileName} created.`)
    })
}

function replicate(argOne, argTwo) {
    //argOne = deve ser uma string
    //argTwo = pode ser uma matriz
    argTwo.forEach((arg, index) => {
        if (index === 0) {
            argOne += " ( "
        }
        argOne += "'" + arg + "'"

        if (index === (argTwo.length - 1)) {
            argOne += " )"
        } else {
            argOne += ", "
        }
    })
    return argOne
}

/*
*  Examples of use 1: 
*/

function exempleOne() {
    const obj = ["league of legends", "hearthstone", "metin2", "dota2"]
    const query = "delete from games where des_name in"

    const result = replicate(query, obj)

    console.log(result)
    // saveFile('exempleOne.txt', result)
}

/* 
*   Examples of use 2: 
*/

function exempleTwo() {
    const parameterOne = ['RCSL4', 'CIEL3', 'POMO4', 'GFSA3', 'TPIS3', 'COGN3', 'LPSB3', 'TECN3', 'MEAL3', 'PLPL3', 'HBSA3', 'SAPR4', 'BMGB4', 'OPCT3', 'ENJU3', 'LAME3', 'NGRD3', 'IRBR3', 'LAME4', 'RCSL3', 'SHOW3', 'TCSA3', 'AMAR3']
    const parameterTwo = ["1.09", "5.64", "2.76", "7.66", "1.66", "3.18", "2.8", "2.13", "2.34", "4.17", "2.6", "3.85", "2.5", "2.55", "1.16", "#N/A", "1.53", "0.93", "#N/A", "2.04", "2.83", "3.84", "1.99"]
    const query = "insert into smallCaps (code, price) values\n"

    let unity = []
    let result = ""
    parameterOne.forEach((one, indexOne) => {
        parameterTwo.forEach((two, indexTwo) => {
            if (indexOne === indexTwo) {
                unity.push(one)
                unity.push(two)
                result = replicate(result, unity)
                if (indexOne < (parameterOne.length - 1)) {
                    result += ",\n"
                }
                unity = []
            }
        })
    })

    console.log(query + result)
    // saveFile('exempleTwo.txt', query + result)
}

