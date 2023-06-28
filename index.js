// code your solution here
function saturdayFun(thing='roller-skate') {
    return `This Saturday, I want to ${thing}!`;
}

function mondayWork(thing = 'go to the office') {
    return `This Monday, I will ${thing}.`;
}

function wrapAdjective(flair="*") {
    return function(detail="special") {
      return `You are ${flair}${detail}${flair}!`;
    };
}
