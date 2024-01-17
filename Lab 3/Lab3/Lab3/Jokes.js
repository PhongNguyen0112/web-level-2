// Array containing some light-hearted jokes with authors
const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
       
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
       
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
     
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
       
        "author": "Nature Lover"
    },
    {
        "joke": "Why don't skeletons fight each other? They don't have the guts!",
        "author": "John Doe"
    },
    {
    "joke": "Parallel lines have so much in common. It's a shame they'll never meet.",
    "author": "Sara Johnson"
    },
    {
    "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "author": "Mike Adams"
    },
    {
    "joke": "How do you organize a space party? You 'planet'!",
    "author": "Emily White"
    },
    {
    "joke": "I'm on a seafood diet. I see food, and I eat it!",
    "author": "Tom Green"
    }
];
const buttonElement = document.getElementById("button");
buttonElement.addEventListener('click', playJokes)

function playJokes(){
    const numberOfJokes = jokesArray.length;
    const randomIndex = Math.floor(Math.random() * numberOfJokes);
    const randomJoke = jokesArray[randomIndex];
    const jokestextElement = document.getElementById('jokestext');
    const authorElement = document.getElementById('author');
        jokestextElement.innerText = randomJoke.joke;
        authorElement.innerText = "Author: " + randomJoke.author;
}
