import { useState } from "react";
import { QuizPage } from "./QuizPage";
import { CustomizeQuizPage } from "./CustomizeQuizPage";
import { HomePage } from "./HomePage";
import { Button } from "./Button";

export const ques = [
  [
    {
      field: "Geography",
      questions: [
        {
          question: "What is the capital of Japan?",
          optionsArray: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
          correctAnswer: "Tokyo",
        },
        {
          question: "What is the largest ocean on Earth?",
          optionsArray: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
          ],
          correctAnswer: "Pacific Ocean",
        },
        {
          question: "Which river is the longest in the world?",
          optionsArray: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          correctAnswer: "Nile",
        },
        {
          question: "In which country would you find the Great Barrier Reef?",
          optionsArray: ["Brazil", "Thailand", "Australia", "Egypt"],
          correctAnswer: "Australia",
        },
        {
          question:
            "Which mountain range runs along the west coast of South America?",
          optionsArray: ["Rocky Mountains", "Himalayas", "Andes", "Alps"],
          correctAnswer: "Andes",
        },
        {
          question: "What is the capital city of Canada?",
          optionsArray: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
          correctAnswer: "Ottawa",
        },
        {
          question: "Which African country is known as the 'Pearl of Africa'?",
          optionsArray: ["Kenya", "Tanzania", "Uganda", "Nigeria"],
          correctAnswer: "Uganda",
        },
        {
          question: "Which city is located on two continents?",
          optionsArray: ["Panama City", "Istanbul", "Singapore", "Alexandria"],
          correctAnswer: "Istanbul",
        },
        {
          question: "What is the driest desert in the world?",
          optionsArray: ["Sahara", "Gobi", "Arabian", "Atacama"],
          correctAnswer: "Atacama",
        },
        {
          question: "Which country has the most lakes in the world?",
          optionsArray: ["United States", "Russia", "Canada", "China"],
          correctAnswer: "Canada",
        },
      ],
    },
  ],
  [
    {
      field: "Programming",
      questions: [
        {
          question:
            "Which programming language is primarily used for styling web pages?",
          optionsArray: ["HTML", "CSS", "JavaScript", "Python"],
          correctAnswer: "CSS",
        },
        {
          question:
            "Which data structure in JavaScript uses a Last-In-First-Out (LIFO) principle?",
          optionsArray: ["Queue", "Stack", "Tree", "Graph"],
          correctAnswer: "Stack",
        },
        {
          question: "What does API stand for in web development?",
          optionsArray: [
            "Advanced Programming Interface",
            "Application Programming Interface",
            "Automated Personal Identifier",
            "Application Personal Integrator",
          ],
          correctAnswer: "Application Programming Interface",
        },
        {
          question: "Which of these is NOT a programming paradigm?",
          optionsArray: [
            "Object-Oriented",
            "Functional",
            "Procedural",
            "Cylindrical",
          ],
          correctAnswer: "Cylindrical",
        },
        {
          question: "In Python, which of these is used to define a function?",
          optionsArray: ["func", "define", "def", "function"],
          correctAnswer: "def",
        },
        {
          question: "What does SQL stand for?",
          optionsArray: [
            "Strong Query Language",
            "Structured Question Language",
            "Structured Query Language",
            "Sequential Query Logic",
          ],
          correctAnswer: "Structured Query Language",
        },
        {
          question: "Which company developed the Java programming language?",
          optionsArray: ["Microsoft", "Sun Microsystems", "IBM", "Apple"],
          correctAnswer: "Sun Microsystems",
        },
        {
          question: "What is the purpose of a 'git commit' command?",
          optionsArray: [
            "To upload code to a remote repository",
            "To save changes to the local repository",
            "To merge branches",
            "To create a new branch",
          ],
          correctAnswer: "To save changes to the local repository",
        },
        {
          question: "Which symbol is used for single-line comments in C++?",
          optionsArray: ["//", "/* */", "#", "--"],
          correctAnswer: "//",
        },
        {
          question: "What does IDE stand for in programming?",
          optionsArray: [
            "Integrated Development Environment",
            "Interface Design Element",
            "Intelligent Debugging Engine",
            "Interactive Development Ecosystem",
          ],
          correctAnswer: "Integrated Development Environment",
        },
      ],
    },
  ],
  [
    {
      field: "History",
      questions: [
        {
          question:
            "In which year did Christopher Columbus first reach the Americas?",
          optionsArray: ["1492", "1588", "1607", "1776"],
          correctAnswer: "1492",
        },
        {
          question: "Who painted the Mona Lisa?",
          optionsArray: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Michelangelo",
          ],
          correctAnswer: "Leonardo da Vinci",
        },
        {
          question: "Which ancient wonder of the world is located in Egypt?",
          optionsArray: [
            "Hanging Gardens of Babylon",
            "Statue of Zeus",
            "Great Pyramid of Giza",
            "Temple of Artemis",
          ],
          correctAnswer: "Great Pyramid of Giza",
        },
        {
          question: "Who was the first Emperor of Rome?",
          optionsArray: ["Julius Caesar", "Nero", "Augustus", "Constantine"],
          correctAnswer: "Augustus",
        },
        {
          question: "In what year did World War II end?",
          optionsArray: ["1943", "1945", "1947", "1950"],
          correctAnswer: "1945",
        },
        {
          question: "Which civilization built the city of Machu Picchu?",
          optionsArray: ["Aztec", "Maya", "Inca", "Olmec"],
          correctAnswer: "Inca",
        },
        {
          question: "Who wrote 'The Art of War'?",
          optionsArray: ["Confucius", "Sun Tzu", "Lao Tzu", "Mao Zedong"],
          correctAnswer: "Sun Tzu",
        },
        {
          question:
            "During which dynasty was the Great Wall of China largely built?",
          optionsArray: ["Han", "Tang", "Ming", "Song"],
          correctAnswer: "Ming",
        },
        {
          question:
            "Who was the primary author of the Declaration of Independence?",
          optionsArray: [
            "George Washington",
            "Benjamin Franklin",
            "John Adams",
            "Thomas Jefferson",
          ],
          correctAnswer: "Thomas Jefferson",
        },
        {
          question:
            "Which event marked the beginning of the French Revolution?",
          optionsArray: [
            "Battle of Waterloo",
            "Storming of the Bastille",
            "Execution of Louis XVI",
            "Rise of Napoleon",
          ],
          correctAnswer: "Storming of the Bastille",
        },
      ],
    },
  ],
  [
    {
      field: "Science",
      questions: [
        {
          question: "What is the chemical symbol for gold?",
          optionsArray: ["Go", "Gd", "Au", "Ag"],
          correctAnswer: "Au",
        },
        {
          question: "Which planet is known as the 'Red Planet'?",
          optionsArray: ["Venus", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Mars",
        },
        {
          question: "What is the largest mammal in the world?",
          optionsArray: [
            "African Elephant",
            "Blue Whale",
            "Giraffe",
            "Hippopotamus",
          ],
          correctAnswer: "Blue Whale",
        },
        {
          question: "Which of these is NOT a type of blood cell?",
          optionsArray: [
            "Red Blood Cell",
            "White Blood Cell",
            "Platelet",
            "Stem Cell",
          ],
          correctAnswer: "Stem Cell",
        },
        {
          question: "What is the hardest natural substance on Earth?",
          optionsArray: ["Steel", "Diamond", "Titanium", "Quartz"],
          correctAnswer: "Diamond",
        },
        {
          question: "Which element is most abundant in Earth's atmosphere?",
          optionsArray: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
          correctAnswer: "Nitrogen",
        },
        {
          question: "What is the study of earthquakes called?",
          optionsArray: [
            "Volcanology",
            "Seismology",
            "Tectonics",
            "Geomorphology",
          ],
          correctAnswer: "Seismology",
        },
        {
          question: "Which of these is NOT a state of matter?",
          optionsArray: ["Solid", "Liquid", "Gas", "Element"],
          correctAnswer: "Element",
        },
        {
          question: "What is the nearest galaxy to the Milky Way?",
          optionsArray: [
            "Andromeda",
            "Triangulum",
            "Centaurus A",
            "Large Magellanic Cloud",
          ],
          correctAnswer: "Andromeda",
        },
        {
          question:
            "Which scientist is known as the 'Father of Modern Physics'?",
          optionsArray: [
            "Isaac Newton",
            "Galileo Galilei",
            "Albert Einstein",
            "Niels Bohr",
          ],
          correctAnswer: "Albert Einstein",
        },
      ],
    },
  ],
  [
    {
      field: "Arts & Culture",
      questions: [
        {
          question: "Who wrote the play 'Romeo and Juliet'?",
          optionsArray: [
            "Jane Austen",
            "William Shakespeare",
            "Charles Dickens",
            "Oscar Wilde",
          ],
          correctAnswer: "William Shakespeare",
        },
        {
          question: "In music theory, how many semitones are in an octave?",
          optionsArray: ["8", "10", "12", "14"],
          correctAnswer: "12",
        },
        {
          question: "Which art movement did Salvador Dalí belong to?",
          optionsArray: ["Impressionism", "Cubism", "Surrealism", "Pop Art"],
          correctAnswer: "Surrealism",
        },
        {
          question: "Who composed the opera 'The Marriage of Figaro'?",
          optionsArray: [
            "Johann Sebastian Bach",
            "Wolfgang Amadeus Mozart",
            "Ludwig van Beethoven",
            "Giuseppe Verdi",
          ],
          correctAnswer: "Wolfgang Amadeus Mozart",
        },
        {
          question:
            "Which of these is NOT a style of traditional Japanese theater?",
          optionsArray: ["Noh", "Kabuki", "Bunraku", "Bolshoi"],
          correctAnswer: "Bolshoi",
        },
        {
          question: "Who wrote the novel 'One Hundred Years of Solitude'?",
          optionsArray: [
            "Pablo Neruda",
            "Jorge Luis Borges",
            "Gabriel García Márquez",
            "Isabel Allende",
          ],
          correctAnswer: "Gabriel García Márquez",
        },
        {
          question: "Which country is credited with inventing paper?",
          optionsArray: ["Egypt", "China", "Greece", "India"],
          correctAnswer: "China",
        },
        {
          question: "Who designed the famous 'Little Black Dress'?",
          optionsArray: [
            "Christian Dior",
            "Coco Chanel",
            "Gianni Versace",
            "Yves Saint Laurent",
          ],
          correctAnswer: "Coco Chanel",
        },
        {
          question: "What is the main language spoken in Brazil?",
          optionsArray: ["Spanish", "Portuguese", "French", "Italian"],
          correctAnswer: "Portuguese",
        },
        {
          question:
            "Which film won the first Academy Award for Best Animated Feature?",
          optionsArray: [
            "Toy Story",
            "Beauty and the Beast",
            "Shrek",
            "The Lion King",
          ],
          correctAnswer: "Shrek",
        },
      ],
    },
  ],
  [
    {
      field: "General Knowledge",
      questions: [
        {
          question: "What is the main ingredient in guacamole?",
          optionsArray: ["Tomato", "Avocado", "Onion", "Lime"],
          correctAnswer: "Avocado",
        },
        {
          question: "In economics, what does GDP stand for?",
          optionsArray: [
            "Global Development Plan",
            "Gross Domestic Product",
            "General Demographic Profile",
            "Gross Dividend Payment",
          ],
          correctAnswer: "Gross Domestic Product",
        },
        {
          question: "Which of these is a primary color?",
          optionsArray: ["Green", "Orange", "Purple", "Blue"],
          correctAnswer: "Blue",
        },
        {
          question: "How many sides does a hexagon have?",
          optionsArray: ["4", "6", "8", "10"],
          correctAnswer: "6",
        },
        {
          question: "Which sport is played at Wimbledon?",
          optionsArray: ["Golf", "Tennis", "Cricket", "Polo"],
          correctAnswer: "Tennis",
        },
        {
          question: "What is the currency of Switzerland?",
          optionsArray: ["Euro", "Swiss Franc", "Swiss Mark", "Swiss Dollar"],
          correctAnswer: "Swiss Franc",
        },
        {
          question: "Who is credited with inventing the telephone?",
          optionsArray: [
            "Thomas Edison",
            "Nikola Tesla",
            "Alexander Graham Bell",
            "Guglielmo Marconi",
          ],
          correctAnswer: "Alexander Graham Bell",
        },
        {
          question: "Which organ in the human body produces insulin?",
          optionsArray: ["Liver", "Kidney", "Pancreas", "Thyroid"],
          correctAnswer: "Pancreas",
        },
        {
          question: "In which year did the Titanic sink?",
          optionsArray: ["1905", "1912", "1920", "1931"],
          correctAnswer: "1912",
        },
        {
          question:
            "What is the busiest airport in the world by passenger traffic?",
          optionsArray: [
            "Beijing Capital",
            "Dubai International",
            "London Heathrow",
            "Hartsfield-Jackson Atlanta",
          ],
          correctAnswer: "Hartsfield-Jackson Atlanta",
        },
      ],
    },
  ],
];
const numQuesCategories = ques.length;

function App() {
  const quesCategory = Math.floor(Math.random() * numQuesCategories);
  const [activePage, setActivePage] = useState("home");
  const [numberOfQues, setNumberOfQues] = useState(3);

  const catArr = ques[quesCategory][0];

  function handleNumOfQuesChange(newQuesNumber) {
    setNumberOfQues(newQuesNumber);
  }
  function handlePageChange(pageName, event) {
    if (event.target.innerHTML === "Let's Go") setActivePage("custQuiz");
    else if (event.target.innerHTML === "Start Quiz") setActivePage("quiz");
    else setActivePage("home");
  }

  return (
    <div className="App">
      {activePage === "home" && (
        <HomePage>
          <Button
            onButtonClick={handlePageChange}
            bgClr="rgb(169, 127, 255)"
            pad="15px 20px"
          >
            Let's Go
          </Button>
        </HomePage>
      )}
      {activePage === "custQuiz" && (
        <CustomizeQuizPage
          onNumOfQuesChange={handleNumOfQuesChange}
          numberOfQues={numberOfQues}
        >
          <Button
            bgClr="rgb(169, 127, 255)"
            onButtonClick={handlePageChange}
            margin="30px 0 0 0"
          >
            Start Quiz
          </Button>
        </CustomizeQuizPage>
      )}
      {activePage === "quiz" && (
        <QuizPage
          onPageChange={handlePageChange}
          numberOfQues={numberOfQues}
          catArr={catArr}
        ></QuizPage>
      )}
    </div>
  );
}

export default App;
