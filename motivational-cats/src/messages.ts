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
    "Yaaaaaas Queen"
]

export const getRandomMessage = (): string => {
    return messages[Math.floor(Math.random()*messages.length)];
}
