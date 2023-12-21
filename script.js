const messageObj = {
    messageFirst: ['Today is', 'You will be', 'Everything is'],
    messageSecond: ['A great day', 'An okay circumstance', 'average at best'],
    messageThird: ["you will still be fine", "you will fall apart and come back stronger", "you will work hard and be greater"]
}

let affirmation = [];

const randomNumber = (num) => {
    //gets a random number
    return Math.floor(Math.random() * num)
}

for (let quote in messageObj) {
    let quoteIndex = randomNumber(messageObj[quote].length)

    switch (quote) {
        case 'messageFirst':
            affirmation.push(`Your message is: ${messageObj[quote][quoteIndex]}`)
            break;
        case 'messageSecond':
            affirmation.push(`Your message is: ${messageObj[quote][quoteIndex]}`)
            break;
        case 'messageThird':
            affirmation.push(`Your message is: ${messageObj[quote][quoteIndex]}`)
            break;
        default:
            affirmation.push("Be cautious the outome is unclear.")

    }
}

const displayMessage = (affirm) => {
    const dailyReminder = affirmation.join('\n');
    console.log(dailyReminder);
}

displayMessage(affirmation)