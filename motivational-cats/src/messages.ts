const messages: string[] = [
    "Keep at it",
    "You can do it",
    "Hang in there",
    "Knock 'em dead",
    "You da boss",
    "You rock!",
    "It's not all shit",
    "Go you!",
    "#Slay",
    "Yaaaaaas Queen",
    "Life is not suffering", 
    "Tomorrow will come",
    "You are a whole human and are allowed feelings",
    "You have a 100% success rate at making it through the day",
    "You are so awesome we fear you",
    "You are the best you",
    "Give yourself a break",
    "Trying your best is what counts",
    "You bring joy to the world"
]

export const getRandomMessage = (): string => {
    return messages[Math.floor(Math.random()*messages.length)];
}
