const storyElement = document.getElementById('story');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');
const option3Button = document.getElementById('option3');

let storyIndex = 0;

let personalities = [
    { name: "Тёмный голос", advice: "Ты знаешь, что она должна умереть. Иначе..." },
    { name: "Доброжелательный шепот", advice: "Скажи ей, что всё будет хорошо. Она не такая уж плохая." },
    { name: "Страх и сомнение", advice: "Возможно, лучше сбежать и оставить всё как есть." }
];

const stories = [
    {
        text: "Ты снова стоишь в лесу, перед домом. Ты знаешь, что в подвале сидит принцесса. Что ты будешь делать?",
        options: [
            { text: "Спуститься в подвал", nextIndex: 1 },
            { text: "Исследовать дом", nextIndex: 2 },
            { text: "Сбежать в лес", nextIndex: 3 }
        ]
    },
    {
        text: `${personalities[0].advice} Ты спустился в подвал. Принцесса сидит там, испуганная. Что делать дальше?`,
        options: [
            { text: "Убить принцессу", nextIndex: 4 },
            { text: "Попробовать освободить её", nextIndex: 5 },
            { text: "Поговорить с ней", nextIndex: 6 }
        ]
    },
    {
        text: `${personalities[1].advice} Ты исследовал дом, но все пути ведут обратно к принцессе. Что делать?`,
        options: [
            { text: "Спуститься в подвал", nextIndex: 1 },
            { text: "Сбежать в лес", nextIndex: 3 },
            { text: null } // Убираем 3-й вариант для этой сцены
        ]
    },
    {
        text: "Ты решил сбежать в лес, но в конце концов пути ведут обратно к дому. Что делать?",
        options: [
            { text: "Вернуться в дом", nextIndex: 1 },
            { text: "Исследовать лес", nextIndex: 2 },
            { text: null } // Убираем 3-й вариант для этой сцены
        ]
    },
    {
        text: "Ты убил принцессу! Игра закончилась.",
        options: []
    },
    {
        text: `${personalities[2].advice} Ты решил освободить принцессу. Она благодарит тебя, но ты знаешь, что кто-то должен пострадать.`,
        options: [
            { text: "Убить её", nextIndex: 4 },
            { text: "Оставить её и вернуться", nextIndex: 3 },
            { text: null } // Убираем 3-й вариант для этой сцены
        ]
    },
    {
        text: "Ты поговорил с принцессой, но она слишком испугана, чтобы помочь тебе. И всё-таки... " + personalities[0].advice,
        options: [
            { text: "Убить принцессу", nextIndex: 4 },
            { text: "Попробовать снова поговорить с ней", nextIndex: 5 },
            { text: null } // Убираем 3-й вариант для этой сцены
        ]
    }
];

function updateStory() {
    const currentStory = stories[storyIndex];
    storyElement.textContent = currentStory.text;

    option1Button.style.display = currentStory.options[0] ? 'block' : 'none';
    option2Button.style.display = currentStory.options[1] ? 'block' : 'none';
    option3Button.style.display = currentStory.options[2] ? 'block' : 'none';

    if (currentStory.options[0]) {
        option1Button.textContent = currentStory.options[0].text;
        option1Button.onclick = () => {
            storyIndex = currentStory.options[0].nextIndex;
            updateStory();
        };
    }

    if (currentStory.options[1]) {
        option2Button.textContent = currentStory.options[1].text;
        option2Button.onclick = () => {
            storyIndex = currentStory.options[1].nextIndex;
            updateStory();
        };
    }

    if (currentStory.options[2]) {
        option3Button.textContent = currentStory.options[2]?.text || ""; // Проверяем наличие текста
        option3Button.onclick = () => {
            storyIndex = currentStory.options[2]?.nextIndex || 0; // Защита от перехода по несуществующему индексу
            updateStory();
        };
    }
}

// Запуск игры
updateStory();