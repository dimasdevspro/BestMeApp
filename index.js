const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = ( index = 0) => {
    process.stdout.write("\n\n" + questions[index] + ">")
}

ask()

const answers = [

]
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    }else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Bacana Dimas!

    ${questions[0]}:
    ${answers[0]}

    ${questions[1]}:
    ${answers[1]}

    ${questions[2]}:
    ${answers[2]}

    ${questions[3]}:
    ${answers[3]}

    Volte amanhã para novas reflexões!
    `)
})