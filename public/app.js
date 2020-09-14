const BTN = document.querySelector('.box')
const CONTENT = document.querySelector('.content')

const salam = ['salam che khabar']
const Expressions = [
    'hello whats going on bro',
    'hello there',
    'Hey man',
    'Hey men',
    'hey nigga',
    'hi',
    'hello how are you ',
    'hey whats up men',
    'hi there',
    'doing good homeboi',
    'whats going on homie',
    'whats up bro',
    'How are you doing',
    'Hows it going',
    'What’s new',
    'How’s your day going',
    'Yo', 'Are you OK', 'Howdy',
    'Whazzup',
]
const bye = [
    'good to see you, bye',
    'bye bye', 'See you soon',
    'Talk to you later', 'I am off',
    'goodbye', 'See you later',
    'goodbye too', 'Take care',
    'bye', 'Have a nice day',
]
const Introduction = [
    'my name is Mester-robot i am  a AI man and my creator make me in 2020',
    'im Mester-robot and who are you'
]

const VoiceRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new VoiceRecognition()

Recognition.onstart = () => {
    console.log("voice activated");
}

Recognition.onresult = (e) => {
    const Index = e.resultIndex;
    const Result = e.results[Index][0].transcript;
    CONTENT.textContent = Result
    ReadRecognition(Result)
}

// listener for button
BTN.addEventListener('click', () => {
    Recognition.start()
})


const ReadRecognition = (msg) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i dont know what you said' //default

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('hello there')) {
        const finalResult = Expressions[Math.floor(Math.random() * Expressions.length)]
        speech.text = finalResult
    }
    if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('see you later') || msg.includes('I must ') ||msg.includes('have a nice ')) {
        const finalResult = bye[Math.floor(Math.random() * bye.length)]
        speech.text = finalResult
    }
    if (msg.includes('salam')) {
        const finalResult = salam[Math.floor(Math.random() * salam.length)]
        speech.text = finalResult
    }

    if (msg.includes('hello who are you') || msg.includes('who are you') || msg.includes('bio') || msg.includes('about you')) {
        const finalResult = Introduction[Math.floor(Math.random() * Introduction.length)]
        speech.text = finalResult
    }

    speech.volume = 1
    speech.rate = 1
    speech.pitch = 20

    window.speechSynthesis.speak(speech)
}