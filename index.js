// Your code here
function saturdayFun (activity = `roller-skate`){
    return (`This Saturday, I want to ${activity}!`)
}

saturdayFun("bathe my dog")

const mondayWork = function (work= 'go to the office'){
    return(`This Monday, I will ${work}.`)
}

mondayWork("work from home")

function wrapAdjective(result = '*'){
    return function (emphatic = 'special') {
        return (`You are ${result}${emphatic}${result}!`) 
    }
} 

wrapAdjective('*')("a hard worker")
wrapAdjective('||')("a dedicated programmer")