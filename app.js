// Enhanced Paramount+ Jeopardy Game with 24 Players

// Game Data - Question Database
const questionDatabase = {
    "CBS": [
        {
            "question": "This drama series follows the elite Naval Special Warfare unit as they execute high-stakes missions worldwide.",
            "answer": "What is SEAL Team?"
        },
        {
            "question": "This long-running CBS procedural about Navy criminal investigators is currently in its 22nd season on Paramount+.",
            "answer": "What is NCIS?"
        },
        {
            "question": "This Justin Hartley drama became CBS's #1 new series in 2024",
            "answer": "What is Tracker?"
        },
        {
            "question": "This reality competition show pits contestants against each other to survive in remote locations.",
            "answer": "What is Survivor?"
        },
        {
            "question": "This reboot of a 1980s legal drama stars Kathy Bates as a brilliant attorney returning to practice law.",
            "answer": "What is Matlock?"
        },
        {
            "question": "This police procedural is set in Hawaii and is a reboot of the 1968 series of the same name.",
            "answer": "What is Hawaii Five-0?"
        },
        {
            "question": "Shemar Moore left this series after 11 seasons to join SWAT",
            "answer": "What is Criminal Minds?"
        },
        {
            "question": "This sitcom stars Iain Armitage as the childhood version of a character from another popular CBS series (The Big Bang Theory).",
            "answer": "What is Young Sheldon?"
        },
        {
            "question": "Morris Chestnut plays this modern detective solving medical mysteries",
            "answer": "What is Watson?"
        },
        {
            "question": "This series stars Tom Selleck as the police commissioner of New York City in a family of law enforcement officers.",
            "answer": "What is Blue Bloods?"
        }
    ],
    "SHOWTIME": [
        {
            "question": "This series starring William H. Macy follows the dysfunctional Gallagher family on Chicago's South Side.",
            "answer": "What is Shameless?"
        },
        {
            "question": "This prequel series explores young Dexter Morgan's origins",
            "answer": "What is Dexter: Original Sin?"
        },
        {
            "question": "This series created by Lena Waithe chronicles the life of young Black residents in a South Side Chicago neighborhood.",
            "answer": "What is The Chi?"
        },
        {
            "question": "This dark comedy stars Don Cheadle as a management consultant team navigating the world of big business.",
            "answer": "What is House of Lies?"
        },
        {
            "question": "This series follows high school girls stranded in the wilderness after a plane crash, with parallel timelines in the present day.",
            "answer": "What is Yellowjackets?"
        },
        {
            "question": "This series stars Michael C. Hall as a forensics expert who moonlights as a vigilante serial killer.",
            "answer": "What is Dexter?"
        },
        {
            "question": "This historical drama depicts the reign of Henry VIII through the perspective of his advisors.",
            "answer": "What is The Tudors?"
        },
        {
            "question": "This series stars Paul Giamatti as a U.S. Attorney going after a hedge fund king played by Damian Lewis.",
            "answer": "What is Billions?"
        },
        {
            "question": "This comedy follows a management consultant played by Kristen Bell who navigates corporate America.",
            "answer": "What is House of Lies?"
        },
        {
            "question": "This documentary series features psychotherapist Dr. Orna Guralnik conducting therapy sessions with real couples.",
            "answer": "What is Couples Therapy?"
        }
    ],
    "PARAMOUNT+ ORIGINAL": [
        {
            "question": "This competition series hosted by RuPaul featured its 10th All Stars season, which premiered in May 2025.",
            "answer": "What is RuPaul's Drag Race All Stars?"
        },
        {
            "question": "Tulsa King stars this actor as a New York mafia capo who rebuilds his criminal empire in Oklahoma.",
            "answer": "Who is Sylvester Stallone?"
        },
        {
            "question": "This blue video game character's movies are available on Paramount+.",
            "answer": "What is Sonic the Hedgehog?"
        },
        {
            "question": "The Paramount+ Original series '1883' is a prequel to which popular drama series?",
            "answer": "What is Yellowstone?"
        },
        {
            "question": "Billy Bob Thornton stars in this oil industry drama about securing land and mineral rights in West Texas boomtowns.",
            "answer": "What is Landman?"
        },
        {
            "question": "This series based on a video game franchise follows Master Chief, a cybernetically enhanced supersoldier.",
            "answer": "What is Halo?"
        },
        {
            "question": "This series follows the McLusky family, power brokers in a Michigan town where incarceration is the only thriving industry.",
            "answer": "What is Mayor of Kingstown?"
        },
        {
            "question": "This comedy series starring Kelsey Grammer as a psychiatrist was rebooted for Paramount+ in 2023, and cancelled in 2025.",
            "answer": "What is Frasier?"
        },
        {
            "question":  "This 2025 animated film explores the origin story of Optimus Prime and Megatron.",
            "answer": "What is Transformers: One?"
        },
        {
            "question": "This legal drama starring Christine Baranski continues the story of a character from 'The Good Wife'.",
            "answer": "What is The Good Fight?"
        }
    ],
    "SPORT": [
        {
            "question": "This major European soccer tournament's exclusive U.S. broadcasting rights are held by Paramount+ through 2030.",
            "answer": "What is the UEFA Champions League?"
        },
        {
            "question": "Paramount+ subscribers can stream this major American football league's games that air on CBS.",
            "answer": "What is the NFL?"
        },
        {
            "question": "This prestigious golf tournament can be streamed on Paramount+ with the Showtime plan.",
            "answer": "What is The Masters?"
        },
        {
            "question": "Paramount+ has exclusive rights to this U.S. women's professional soccer league through 2027.",
            "answer": "What is the NWSL (National Women's Soccer League)?"
        },
        {
            "question": "This Italian football league's matches are available exclusively on Paramount+ in the United States.",
            "answer": "What is Serie A?"
        },
        {
            "question": "This annual college basketball tournament is partially streamed on Paramount+.",
            "answer": "What is the NCAA Tournament (March Madness)?"
        },
        {
            "question": "This 24/7 streaming channel on Paramount+ is dedicated exclusively to soccer coverage.",
            "answer": "What is CBS Sports Golazo Network?"
        },
        {
            "question": "David Beckham hosts this UEFA Champions League alternate broadcast",
            "answer": "What is Beckham & Friends Live?"
        },
        {
            "question": "This Scottish football league's exclusive US rights are held by Paramount+ through 2024/25.",
            "answer": "What is the Scottish Premiership?"
        },
        {
            "question": "These three divisions of English football below the Premier League have matches on Paramount+.",
            "answer": "What is the EFL Championship, EFL League One, and EFL League Two?"
        }
    ],
    "BRANDS": [
        {
            "question": "This streaming service owned by Paramount Global launched in 2021, rebranding from CBS All Access.",
            "answer": "What is Paramount+?"
        },
        {
            "question": "This premium cable network owned by Paramount Global is known for shows like 'Billions' and 'Yellowjackets'.",
            "answer": "What is Showtime?"
        },
        {
            "question": "This children's TV channel owned by Paramount Global features SpongeBob SquarePants and PAW Patrol.",
            "answer": "What is Nickelodeon?"
        },
        {
            "question": "This music-focused TV network owned by Paramount launched in 1981 with 'Video Killed the Radio Star'.",
            "answer": "What is MTV?"
        },
        {
            "question": "This cable network owned by Paramount Global focuses on comedy programming and South Park.",
            "answer": "What is Comedy Central?"
        },
        {
            "question": "This brand's logo features an eyeball and is the flagship broadcast television network of Paramount Global.",
            "answer": "What is CBS?"
        },
        {
            "question": "This Paramount-owned cable channel rebranded from Spike TV in 2018 and focuses on unscripted programming.",
            "answer": "What is Paramount Network?"
        },
        {
            "question": "This streaming service partnership between Paramount and BET offers content targeting African American audiences.",
            "answer": "What is BET+?"
        },
        {
            "question": "This Paramount-owned free streaming service features hundreds of linear channels and on-demand content.",
            "answer": "What is Pluto TV?"
        },
        {
            "question": "This MTV reality show follows participants competing in physical challenges and strategic gameplay.",
            "answer": "What is The Challenge?"
        }
    ],
    "CLASSIC MOVIES": [
        {
            "question": "This 1972 Paramount film directed by Francis Ford Coppola follows the Corleone crime family.",
            "answer": "What is The Godfather?"
        },
        {
            "question": "This 1994 Paramount film stars Tom Hanks as a man with low IQ who witnesses key historical events.",
            "answer": "What is Forrest Gump?"
        },
        {
            "question": "This 1986 Paramount action film starred Tom Cruise as a Naval aviator pilot trainee.",
            "answer": "What is Top Gun?"
        },
        {
            "question": "This 1997 Paramount blockbuster about the sinking of the RMS __________ starred Leonardo DiCaprio and Kate Winslet, was the first film directed by James Cameron to gross over $1 billion worldwide.",
            "answer": "What is Titanic?"
        },
        {
            "question": "This 1953 Paramount film starred Audrey Hepburn as a princess who explores Rome with a journalist.",
            "answer": "What is Roman Holiday?"
        },
        {
            "question": "This 1927 silent film from Paramount was the first winner of the Academy Award for Best Picture.",
            "answer": "What is Wings?"
        },
        {
            "question":  "This 1984 Eddie Murphy comedy spawned three sequels",
            "answer": "What is Beverly Hills Cop?"
        },
        {
            "question": "Al Pacino plays a Cuban refugee in this 1983 crime drama",
            "answer": "What is Scarface?"
        },
        {
            "question": "This 2001 Paramount comedy follows male models who become involved in an assassination plot.",
            "answer": "What is Zoolander?"
        },
        {
            "question": "John Travolta and Samuel L. Jackson star in this Tarantino film",
            "answer": "What is Pulp Fiction?"
        }
    ],

};

// Final Jeopardy questions
const finalJeopardyDB = [
    {
        "category": "PARAMOUNT+ ORIGINALS",
        "question": "This Paramount+ series is the seventh Star Trek series and follows the crew of the USS Discovery.",
        "answer": "What is Star Trek: Discovery?"
    },
    {
        "category": "CLASSIC MOVIES",
        "question": "This 1972 film's famous line 'I'm gonna make him an offer he can't refuse' was ranked #2 on AFI's 100 Years...100 Movie Quotes list.",
        "answer": "What is The Godfather?"
    },
    {
        "category": "CBS TELEVISION",
        "question": "Running from 1972 to 1983, this CBS sitcom set in Korea remains one of the highest-rated shows in U.S. television history.",
        "answer": "What is M*A*S*H?"
    },
    {
        "category": "SHOWTIME SERIES",
        "question": "This Showtime series ending in 2013 featured Michael C. Hall as a blood spatter analyst for the Miami police who moonlights as a vigilante serial killer.",
        "answer": "What is Dexter?"
    },
    {
        "category": "SPORTS BROADCASTING",
        "question": "This announcer, 'the voice of CBS Sports' for over 35 years, is known for his work on NFL games, the Masters, and March Madness.",
        "answer": "Who is Jim Nantz?"
    }
];

// Function to randomly select categories and questions
function generateRandomGame() {
    // Get all available category names
    const allCategories = Object.keys(questionDatabase);
    
    // Shuffle the categories
    const shuffledCategories = [...allCategories].sort(() => 0.5 - Math.random());
    
    // Take the first 6 categories
    const selectedCategories = shuffledCategories.slice(0, 6);
    
    // Build game data object
    const gameCategories = {};
    
    // For each selected category
    selectedCategories.forEach(category => {
        // Shuffle the questions for this category
        const shuffledQuestions = [...questionDatabase[category]].sort(() => 0.5 - Math.random());
        
        // Take the first 5 questions (or fewer if that's all we have)
        const selectedQuestions = shuffledQuestions.slice(0, 5);
        
        // Create the category object with 5 questions
        gameCategories[category] = {};
        
        // Add questions with values 1-5
        selectedQuestions.forEach((q, index) => {
            const value = (index + 1).toString();
            gameCategories[category][value] = q;
        });
    });
    
    return {
        categories: gameCategories
    };
}

// Generate random game data on initialization
let gameData = generateRandomGame();

// Game State
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    usedQuestions: new Set(),
    questionsAnswered: 0,
    totalQuestions: 30,
    currentQuestion: null,
    gameStarted: false,
    audioEnabled: true,
    bestVoice: null,
    countdownInterval: null,
    countdownTime: 30,
    countdownRunning: false
};

// DOM Elements
const elements = {
    startScreen: document.getElementById('startScreen'),
    gameScreen: document.getElementById('gameScreen'),
    playersList: document.getElementById('playersList'),
    startGameBtn: document.getElementById('startGameBtn'),
    audioToggle: document.getElementById('audioToggle'),
    resetBtn: document.getElementById('resetBtn'),
    showLeaderboardBtn: document.getElementById('showLeaderboardBtn'),
    currentPlayerName: document.getElementById('currentPlayerName'),
    currentScore: document.getElementById('currentScore'),
    currentBreakTime: document.getElementById('currentBreakTime'),
    valuesGrid: document.getElementById('valuesGrid'),
    questionModal: document.getElementById('questionModal'),
    questionCategory: document.getElementById('questionCategory'),
    modalPlayerName: document.getElementById('modalPlayerName'),
    questionText: document.getElementById('questionText'),
    countdownTimer: document.getElementById('countdownTimer'),
    showAnswerBtn: document.getElementById('showAnswerBtn'),
    answerSection: document.getElementById('answerSection'),
    answerText: document.getElementById('answerText'),
    correctBtn: document.getElementById('correctBtn'),
    incorrectBtn: document.getElementById('incorrectBtn'),
    leaderboardModal: document.getElementById('leaderboardModal'),
    closeLeaderboardBtn: document.getElementById('closeLeaderboardBtn'),
    leaderboardContent: document.getElementById('leaderboardContent'),
    finalResultsModal: document.getElementById('finalResultsModal'),
    finalLeaderboard: document.getElementById('finalLeaderboard'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    exportResultsBtn: document.getElementById('exportResultsBtn'),
    breakNotification: document.getElementById('breakNotification'),
    breakMessage: document.getElementById('breakMessage'),
    dismissBreakBtn: document.getElementById('dismissBreakBtn')
};

// Initialize the game
function initGame() {
    // Make sure DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initializeGameComponents();
        });
    } else {
        initializeGameComponents();
    }
}

// Initialize game components 
function initializeGameComponents() {
    try {
        // Re-get DOM elements to ensure they're available
        refreshDOMElements();
        
        // Check if critical elements are available
        const criticalElements = ['startScreen', 'gameScreen', 'playersList', 'startGameBtn'];
        const missingElements = criticalElements.filter(el => !elements[el]);
        
        if (missingElements.length > 0) {
            console.error('Missing critical elements for initialization:', missingElements);
            alert('There was a problem initializing the game. Please refresh the page.');
            return;
        }
        
        // Generate random game data for this session
        gameData = generateRandomGame();
        console.log('Generated new random questions and categories');
        
        // Reset game state
        gameState = {
            players: [],
            currentPlayerIndex: 0,
            usedQuestions: new Set(),
            questionsAnswered: 0,
            totalQuestions: 30, // May need to recalculate based on categories & questions
            currentQuestion: null,
            gameStarted: false,
            audioEnabled: gameState ? gameState.audioEnabled : true,
            bestVoice: null,
            countdownInterval: null,
            countdownTime: 30,
            countdownRunning: false
        };
        
        // Update total questions count
        const categoryCount = Object.keys(gameData.categories).length;
        gameState.totalQuestions = categoryCount * 5; // 5 questions per category
        
        // Setup components
        setupPlayers();
        setupVoice();
        setupEventListeners();
        createGameBoard();
        showStartScreen();
        
        // Log successful initialization
        console.log('Game initialized successfully with', categoryCount, 'categories');
    } catch (error) {
        console.error('Error initializing game:', error);
        alert('There was a problem initializing the game. Please refresh the page.');
    }
}

// Refresh DOM elements references
function refreshDOMElements() {
    try {
        // Game screens
        elements.startScreen = document.getElementById('startScreen');
        elements.gameScreen = document.getElementById('gameScreen');
        elements.playersList = document.getElementById('playersList');
        elements.playerInputs = document.getElementById('playerInputs');
        
        // Buttons
        elements.startGameBtn = document.getElementById('startGameBtn');
        elements.audioToggle = document.getElementById('audioToggle');
        elements.resetBtn = document.getElementById('resetBtn');
        elements.showLeaderboardBtn = document.getElementById('showLeaderboardBtn');
        elements.addPlayerFieldBtn = document.getElementById('addPlayerFieldBtn');
        elements.removePlayerFieldBtn = document.getElementById('removePlayerFieldBtn');
        elements.useDefaultNamesBtn = document.getElementById('useDefaultNamesBtn');
        
        // Current player info
        elements.currentPlayerName = document.getElementById('currentPlayerName');
        elements.currentScore = document.getElementById('currentScore');
        elements.currentBreakTime = document.getElementById('currentBreakTime');
        
        // Game board
        elements.valuesGrid = document.getElementById('valuesGrid');
        
        // Question modal
        elements.questionModal = document.getElementById('questionModal');
        elements.questionCategory = document.getElementById('questionCategory');
        elements.modalPlayerName = document.getElementById('modalPlayerName');
        elements.questionText = document.getElementById('questionText');
        elements.countdownTimer = document.getElementById('countdownTimer');
        elements.showAnswerBtn = document.getElementById('showAnswerBtn');
        elements.answerSection = document.getElementById('answerSection');
        elements.answerText = document.getElementById('answerText');
        elements.correctBtn = document.getElementById('correctBtn');
        elements.incorrectBtn = document.getElementById('incorrectBtn');
        
        // Leaderboard
        elements.leaderboardModal = document.getElementById('leaderboardModal');
        elements.closeLeaderboardBtn = document.getElementById('closeLeaderboardBtn');
        elements.leaderboardContent = document.getElementById('leaderboardContent');
        
        // Results
        elements.finalResultsModal = document.getElementById('finalResultsModal');
        elements.finalLeaderboard = document.getElementById('finalLeaderboard');
        elements.playAgainBtn = document.getElementById('playAgainBtn');
        elements.exportResultsBtn = document.getElementById('exportResultsBtn');
        
        // Notifications
        elements.breakNotification = document.getElementById('breakNotification');
        elements.breakMessage = document.getElementById('breakMessage');
        elements.dismissBreakBtn = document.getElementById('dismissBreakBtn');
        
        // Missing critical elements check
        const criticalElements = ['startScreen', 'gameScreen', 'playersList', 'startGameBtn'];
        const missingCritical = criticalElements.filter(el => !elements[el]);
        if (missingCritical.length > 0) {
            console.warn(`Missing critical DOM elements: ${missingCritical.join(', ')}`);
        }
        
        return true;
    } catch (error) {
        console.error('Error refreshing DOM elements:', error);
        return false;
    }
}

// Setup players with individual stats
function setupPlayers() {
    // Get player names from input fields if available
    const inputFields = document.querySelectorAll('.player-name-input');

    // If input fields exist and have values, use those names
    if (inputFields.length > 0) {
        const customNames = Array.from(inputFields)
            .map(input => input.value.trim())
            .filter(name => name !== '');

        // Use custom names for player setup
        gameState.players = customNames.map((name, index) => ({
            id: index,
            name: name,
            score: 0,
            breakTime: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            incorrectAnswers: 0
        }));
    } else {
        // No players yet, will be populated from input fields
        gameState.players = [];
    }
}

// Setup realistic English voice
function setupVoice() {
    if ('speechSynthesis' in window) {
        // Wait for voices to load
        const loadVoices = () => {
            const voices = speechSynthesis.getVoices();

            // Prioritize English voices with specific criteria
            const preferredVoices = voices.filter(voice => {
                const name = voice.name.toLowerCase();
                const lang = voice.lang.toLowerCase();

                // Look for high-quality English voices
                return (
                    (lang.includes('en-us') || lang.includes('en-gb') || lang.includes('en-')) &&
                    (name.includes('english') || name.includes('british') || name.includes('american') ||
                     name.includes('daniel') || name.includes('alex') || name.includes('david') ||
                     name.includes('natural') || name.includes('premium') || name.includes('neural'))
                );
            });

            // Fallback to any English voice
            const englishVoices = voices.filter(voice =>
                voice.lang.toLowerCase().startsWith('en-')
            );

            // Select the best available voice
            gameState.bestVoice = preferredVoices[0] || englishVoices[0] || voices[0];

            console.log('Selected voice:', gameState.bestVoice?.name || 'Default');
        };

        // Load voices immediately if available
        loadVoices();

        // Also load when voices change (some browsers need this)
        speechSynthesis.addEventListener('voiceschanged', loadVoices);
    }
}

// Enhanced text-to-speech with realistic settings
function speak(text, options = {}) {
    try {
        // Guard clauses
        if (!text || typeof text !== 'string') {
            console.warn('Invalid text passed to speak function');
            return;
        }
        
        if (!gameState || !gameState.audioEnabled) return;
        
        if (!window.speechSynthesis) {
            console.warn('Speech synthesis not available');
            return;
        }
    
        // Cancel any ongoing speech
        try {
            speechSynthesis.cancel();
        } catch (error) {
            console.warn('Error canceling speech synthesis:', error);
        }
    
        const utterance = new SpeechSynthesisUtterance(text);
    
        // Use the best available voice
        if (gameState.bestVoice) {
            utterance.voice = gameState.bestVoice;
        }
    
        // Optimal settings for game show atmosphere
        utterance.rate = options.rate || 0.8;
        utterance.pitch = options.pitch || 0.9;
        utterance.volume = options.volume || 0.8;
        
        // Add error handling
        utterance.onerror = function(event) {
            console.error('Speech synthesis error:', event);
        };
    
        speechSynthesis.speak(utterance);
        
        return utterance;
    } catch (error) {
        console.error('Error in speak function:', error);
        return null;
    }
}

// Setup event listeners
function setupEventListeners() {
    elements.startGameBtn.addEventListener('click', validateAndStartGame);
    elements.audioToggle.addEventListener('click', toggleAudio);
    elements.resetBtn.addEventListener('click', resetGame);
    elements.showLeaderboardBtn.addEventListener('click', showLeaderboard);
    elements.closeLeaderboardBtn.addEventListener('click', hideLeaderboard);
    elements.showAnswerBtn.addEventListener('click', showAnswer);
    elements.correctBtn.addEventListener('click', () => handleAnswer(true));
    elements.incorrectBtn.addEventListener('click', () => handleAnswer(false));
    elements.playAgainBtn.addEventListener('click', resetGame);
    elements.exportResultsBtn.addEventListener('click', exportResults);
    elements.dismissBreakBtn.addEventListener('click', dismissBreakNotification);

    // Player input field management
    const addPlayerFieldBtn = document.getElementById('addPlayerFieldBtn');
    const removePlayerFieldBtn = document.getElementById('removePlayerFieldBtn');
    const useDefaultNamesBtn = document.getElementById('useDefaultNamesBtn');

    if (addPlayerFieldBtn) {
        addPlayerFieldBtn.addEventListener('click', () => {
            const currentInputs = document.querySelectorAll('.player-name-input');
            addPlayerInputField(currentInputs.length);
        });
    }

    if (removePlayerFieldBtn) {
        removePlayerFieldBtn.addEventListener('click', () => {
            const inputContainer = document.getElementById('playerInputs');
            if (inputContainer.lastChild && inputContainer.children.length > 1) {
                inputContainer.removeChild(inputContainer.lastChild);
            }
        });
    }

    if (useDefaultNamesBtn) {
        useDefaultNamesBtn.addEventListener('click', useDefaultPlayerNames);
    }

    // Close modals when clicking outside
    elements.questionModal.addEventListener('click', (e) => {
        if (e.target === elements.questionModal) {
            // Don't allow closing during active question
        }
    });

    elements.leaderboardModal.addEventListener('click', (e) => {
        if (e.target === elements.leaderboardModal) {
            hideLeaderboard();
        }
    });
}

// Create game board
function createGameBoard() {
    const categories = Object.keys(gameData.categories);
    const values = ['1', '2', '3', '4', '5'];
    
    // First create the category headers
    const categoriesRow = document.querySelector('.categories-row');
    if (categoriesRow) {
        categoriesRow.innerHTML = '';
        
        categories.forEach(category => {
            const categoryCell = document.createElement('div');
            categoryCell.className = 'category-cell';
            
            // Format category name with line breaks for better display
            const formattedCategory = category.replace(' ', '<br>');
            categoryCell.innerHTML = formattedCategory;
            
            categoriesRow.appendChild(categoryCell);
        });
    }

    // Then create the value cells
    elements.valuesGrid.innerHTML = '';

    values.forEach(value => {
        categories.forEach(category => {
            const cell = document.createElement('div');
            cell.className = 'value-cell';
            cell.textContent = `${value} min`;
            cell.dataset.category = category;
            cell.dataset.value = value;
            cell.addEventListener('click', () => selectQuestion(category, value, cell));
            elements.valuesGrid.appendChild(cell);
        });
    });
}

// Show start screen with player list and name inputs
function showStartScreen() {
    elements.playersList.innerHTML = '';

    // Only show player list if game has players already
    if (gameState.players.length > 0) {
        gameState.players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player-item';
            playerDiv.textContent = player.name;
            elements.playersList.appendChild(playerDiv);
        });
    }

    // Set up player input fields
    setupPlayerInputFields();

    elements.startScreen.classList.remove('hidden');
    elements.gameScreen.classList.add('hidden');
}

// Setup player input fields
function setupPlayerInputFields() {
    const inputContainer = document.getElementById('playerInputs');
    inputContainer.innerHTML = '';

    // Create default number of input fields (24)
    const numPlayers = 24;

    for (let i = 0; i < numPlayers; i++) {
        addPlayerInputField(i);
    }
}

// Add a single player input field
function addPlayerInputField(index) {
    const inputContainer = document.getElementById('playerInputs');

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'player-input-wrapper';

    const label = document.createElement('label');
    label.textContent = `Player ${index + 1}:`;
    label.htmlFor = `player-input-${index}`;

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `player-input-${index}`;
    input.className = 'player-name-input';
    input.placeholder = `Enter name`;
    input.value = '';

    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);
    inputContainer.appendChild(inputWrapper);
}

// Validate and start the game
function validateAndStartGame() {
    try {
        // Refresh DOM elements first
        refreshDOMElements();
        
        // Check if game is already started - if so, don't try to start again
        if (gameState.gameStarted) {
            console.warn('Game already started, ignoring start request');
            return;
        }
        
        const inputs = document.querySelectorAll('.player-name-input');
        
        // Make sure inputs exist
        if (!inputs || inputs.length === 0) {
            console.error('Player input fields not found');
            alert('There was a problem initializing the game. Please try refreshing the page.');
            return;
        }
        
        const filledInputs = Array.from(inputs).filter(input => input.value.trim() !== '');

        // Require at least 2 players
        if (filledInputs.length < 2) {
            alert('Please enter at least 2 player names to start the game.');
            return;
        }

        // Make sure we have all required elements before starting
        const requiredElements = [
            'gameScreen', 'questionModal', 'countdownTimer', 'currentPlayerName', 
            'currentScore', 'currentBreakTime', 'valuesGrid'
        ];
        const missingElements = requiredElements.filter(el => !elements[el]);
        
        if (missingElements.length > 0) {
            console.error('Missing required elements:', missingElements);
            alert('There was a problem initializing the game. Please try refreshing the page.');
            return;
        }
        
        // Setup players before starting
        setupPlayers();
        
        // Double check that we have players
        if (gameState.players.length < 2) {
            alert('Please enter at least 2 player names to start the game.');
            return;
        }
        
        console.log('Starting game with', gameState.players.length, 'players');
        startGame();
    } catch (error) {
        console.error('Error in validateAndStartGame:', error);
        alert('There was a problem starting the game. Please try refreshing the page.');
    }
}

// Use default player names
function useDefaultPlayerNames() {
    const inputs = document.querySelectorAll('.player-name-input');
    
    // Generate simple default names (Player 1, Player 2, etc.)
    inputs.forEach((input, index) => {
        input.value = `Player ${index + 1}`;
    });
}

// Start the game
function startGame() {
    try {
        // Set game state
        gameState.gameStarted = true;
        gameState.currentPlayerIndex = 0;
        
        // Make sure elements exist
        if (!elements.startScreen || !elements.gameScreen) {
            console.error('Critical game screens missing');
            refreshDOMElements();
            
            if (!elements.startScreen || !elements.gameScreen) {
                alert('There was a problem starting the game. Please try refreshing the page.');
                return;
            }
        }
    
        // Show game screen
        elements.startScreen.classList.add('hidden');
        elements.gameScreen.classList.remove('hidden');
    
        // Make sure the player display is updated
        updateCurrentPlayerDisplay();
    
        // Sound and speech
        playSound('clickSound');
        
        // Welcome speech
        speak("Welcome to Jeopardy! Today we are showcasing the finest entertainment from Paramount Plus, and our contestants will be competing for break time!", {
            rate: 0.8,
            pitch: 0.9
        }); 
    
        // Clear any existing timeouts
        if (window._gameTimeouts) {
            window._gameTimeouts.forEach(id => clearTimeout(id));
        }
        window._gameTimeouts = [];
    
        // Use tracked timeout
        const timeoutId = setTimeout(() => {
            try {
                const categories = Object.keys(gameData.categories);
                const categoryText = categories.join(', ');
                
                const currentPlayer = getCurrentPlayer();
                if (!currentPlayer) {
                    console.error('No current player in startGame timeout');
                    return;
                }
                
                speak(`Our categories today are: ${categoryText}....  Good luck, and remember to phrase your response in the form of a question!..  ..,. ${currentPlayer.name}, you're up first. Please select a category and break time value.`, {
                    rate: 0.8
                });
            } catch (error) {
                console.error('Error in startGame timeout:', error);
            }
        }, 10000); 
        
        // Track timeout
        if (!window._gameTimeouts) window._gameTimeouts = [];
        window._gameTimeouts.push(timeoutId);
        
        console.log('Game started successfully');
    } catch (error) {
        console.error('Error in startGame:', error);
        alert('There was a problem starting the game. Please try refreshing the page.');
    }
}

// Toggle audio
function toggleAudio() {
    gameState.audioEnabled = !gameState.audioEnabled;
    elements.audioToggle.textContent = gameState.audioEnabled ? '🔊 Audio Enabled' : '🔇 Audio Disabled';

    if (!gameState.audioEnabled) {
        speechSynthesis.cancel();
    }
}

// Get current player
function getCurrentPlayer() {
    return gameState.players[gameState.currentPlayerIndex];
}

// Update current player display
function updateCurrentPlayerDisplay() {
    try {
        const player = getCurrentPlayer();
        
        // Make sure we have a player and the necessary DOM elements
        if (!player) {
            console.error('No current player in updateCurrentPlayerDisplay');
            return;
        }
        
        // Check for DOM elements and refresh if needed
        if (!elements.currentPlayerName || !elements.currentScore || !elements.currentBreakTime) {
            console.warn('Missing player display elements');
            refreshDOMElements();
        }
        
        // Update display if elements exist
        if (elements.currentPlayerName) elements.currentPlayerName.textContent = player.name;
        if (elements.currentScore) elements.currentScore.textContent = `${player.score} min`;
        if (elements.currentBreakTime) elements.currentBreakTime.textContent = `${player.breakTime} min`;
    } catch (error) {
        console.error('Error in updateCurrentPlayerDisplay:', error);
    }
}

// Select a question
function selectQuestion(category, value, cell) {
    if (!gameState.gameStarted || cell.classList.contains('used')) return;

    const questionKey = `${category}-${value}`;
    if (gameState.usedQuestions.has(questionKey)) return;

    playSound('clickSound');
    cell.classList.add('used');
    gameState.usedQuestions.add(questionKey);

    const questionData = gameData.categories[category][value];
    gameState.currentQuestion = {
        category,
        value: parseInt(value),
        question: questionData.question,
        answer: questionData.answer
    };

    showQuestionModal();
}

// Show question modal
function showQuestionModal() {
    try {
        // Make sure we have a current player and question
        const player = getCurrentPlayer();
        if (!player || !gameState.currentQuestion) {
            console.error('No current player or question in showQuestionModal');
            return;
        }
        
        // Make sure we have required elements
        if (!elements.questionCategory || !elements.modalPlayerName || 
            !elements.questionText || !elements.answerSection || 
            !elements.showAnswerBtn || !elements.questionModal) {
            console.error('Missing required DOM elements in showQuestionModal');
            refreshDOMElements();
        }
    
        // Set content
        if (elements.questionCategory) elements.questionCategory.textContent = gameState.currentQuestion.category;
        if (elements.modalPlayerName) elements.modalPlayerName.textContent = player.name;
        if (elements.questionText) elements.questionText.textContent = gameState.currentQuestion.question;
    
        // Reset modal state
        if (elements.answerSection) elements.answerSection.classList.add('hidden');
        if (elements.showAnswerBtn) elements.showAnswerBtn.style.display = 'inline-flex';
    
        if (elements.questionModal) elements.questionModal.style.display = 'block';
    
        // First stop any existing countdown to avoid duplicates
        stopCountdown();
        
        // Announce the question
        speak(`${player.name}, for ${gameState.currentQuestion.value} minutes of break time, in the category ${gameState.currentQuestion.category}: ${gameState.currentQuestion.question}`, {
            rate: 0.8,
            pitch: 0.9
        });
        
        // Start the countdown timer after a short delay to ensure speech has started
        const timeoutId = setTimeout(() => {
            startCountdown();
        }, 500);
        
        // Track timeout for clean reset
        if (!window._gameTimeouts) window._gameTimeouts = [];
        window._gameTimeouts.push(timeoutId);
    } catch (error) {
        console.error('Error in showQuestionModal:', error);
    }
}

// Start countdown timer
function startCountdown() {
    // Only start if not already running
    if (gameState.countdownRunning) {
        console.log('Countdown already running, stopping existing one first');
        stopCountdown();
    }
    
    // Refresh elements to ensure we have the latest reference
    elements.countdownTimer = document.getElementById('countdownTimer');
    
    // Check if countdown element exists
    if (!elements.countdownTimer) {
        console.error('Countdown timer element not found');
        return;
    }
    
    // Set initial time
    gameState.countdownTime = 30;
    elements.countdownTimer.textContent = gameState.countdownTime;
    elements.countdownTimer.className = 'countdown-timer';
    
    console.log('Starting countdown timer');
    
    // Start the interval
    gameState.countdownRunning = true;
    gameState.countdownInterval = setInterval(() => {
        try {
            gameState.countdownTime--;
            
            // Re-check if element still exists
            if (!elements.countdownTimer) {
                elements.countdownTimer = document.getElementById('countdownTimer');
            }
            
            // Update display if element exists
            if (elements.countdownTimer) {
                elements.countdownTimer.textContent = gameState.countdownTime;
                
                // Add warning class when time is running low
                if (gameState.countdownTime <= 10 && gameState.countdownTime > 5) {
                    elements.countdownTimer.className = 'countdown-timer warning';
                    // Play warning sound with increasing frequency
                    playTimerWarningSound(gameState.countdownTime);
                } else if (gameState.countdownTime <= 5) {
                    elements.countdownTimer.className = 'countdown-timer danger';
                    // Play warning sound with increasing frequency
                    playTimerWarningSound(gameState.countdownTime);
                }
            } else {
                console.error('Countdown timer element lost during countdown');
            }
            
            // Time's up!
            if (gameState.countdownTime <= 0) {
                stopCountdown();
                stopWarningSound(); 
                timeUp();
            }
        } catch (error) {
            console.error('Error in countdown interval:', error);
            stopCountdown(); // Safety: stop the interval if there's an error
        }
    }, 1000);
}

// Stop countdown timer
function stopCountdown() {
    if (gameState.countdownInterval) {
        clearInterval(gameState.countdownInterval);
        gameState.countdownInterval = null;
        gameState.countdownRunning = false;
    }
}

// Time's up function
function timeUp() {
    try {
        // If answer section exists and hasn't been shown yet, show it
        if (elements.answerSection && elements.answerSection.classList.contains('hidden')) {
            showAnswer();
        } else if (!elements.answerSection) {
            console.error('Answer section element not found');
        }
        
        // Get the correct answer and construct the time's up message
        const correctAnswer = gameState.currentQuestion.answer;
        //const breakTimeLost = 1; // Same as in handleAnswer function
        //const player = getCurrentPlayer(); // 

        speak(`Time's up. The correct answer is ${correctAnswer}.`, { rate: 0.8, pitch: 0.9 });
        
        // Automatically mark as incorrect after 4 seconds
        setTimeout(() => {
           handleAnswer(false);
        }, 4000);
    } catch (error) {
        console.error('Error in timeUp function:', error);
        // Try to recover from error
        if (gameState.currentQuestion) {
            speak("Sorry, there was a problem with the timer. Let's try to continue.", { rate: 0.8, pitch: 0.9 });
        }
    }
}

// Show answer
function showAnswer() {
    // Stop the countdown timer
    stopCountdown();
    
    try {
        // Make sure we have all the elements and data we need
        if (!gameState.currentQuestion || !gameState.currentQuestion.answer) {
            console.error('Current question or answer is missing');
            return;
        }
        
        if (elements.answerText && elements.answerSection && elements.showAnswerBtn) {
            elements.answerText.textContent = gameState.currentQuestion.answer;
            elements.answerSection.classList.remove('hidden');
            elements.showAnswerBtn.style.display = 'none';
            
            // Only speak the answer if it wasn't revealed due to time running out
            // (We don't want to duplicate the announcement with timeUp function)
            if (gameState.countdownTime > 0) {
                speak(`The correct answer is: ${gameState.currentQuestion.answer}`, {
                    rate: 0.8,
                    pitch: 0.9
                });
            }
        } else {
            console.error('Answer elements missing from the DOM');
        }
    } catch (error) {
        console.error('Error in showAnswer function:', error);
    }
}

// Handle correct/incorrect answer
function handleAnswer(isCorrect) {
    // Stop the countdown timer
    stopCountdown();
    
    const player = getCurrentPlayer();
    const value = parseInt(gameState.currentQuestion.value);

    player.questionsAnswered++;

    if (isCorrect) {
        // Correct answer: add break time directly
        player.score += value;
        player.breakTime += value;
        player.correctAnswers++;

        playSound('correctSound');
        showBreakNotification(`${player.name} earned ${value} minutes of break time!`, 'correct');

        speak(` ${player.name} got it right, and earns ${value} minutes of break time!`, {
            rate: 0.8,
            pitch: 1.0
        });

        // Add visual feedback
        elements.questionModal.classList.add('correct-animation');
        setTimeout(() => elements.questionModal.classList.remove('correct-animation'), 500);

    } else {
        // Incorrect answer: lose break time
        player.incorrectAnswers++;

        // Lose break minute for being wrong
        const breakTimeLost = value;
    
        player.breakTime = (player.breakTime - breakTimeLost);
        player.score = ( player.score - breakTimeLost); 

        playSound('incorrectSound');
        showBreakNotification(`${player.name} lost ${breakTimeLost} minute of break time.`, 'incorrect');

        speak(`${player.name} got it wrong, and loses ${breakTimeLost} minute of break time.`, {
            rate: 0.8,
            pitch: 0.85
        });

        // Add visual feedback
        elements.questionModal.classList.add('incorrect-animation');
        setTimeout(() => elements.questionModal.classList.remove('incorrect-animation'), 500);
    }

    updateCurrentPlayerDisplay();
    gameState.questionsAnswered++;

    // Close modal and either stay with current player (if correct) or move to next player (if incorrect)
    setTimeout(() => {
        elements.questionModal.style.display = 'none';
        
        // Only move to next player if answer was incorrect
        if (!isCorrect) {
            nextPlayer();
        } else {
            // For correct answers, keep the same player but announce they get to go again
            const player = getCurrentPlayer();
            speak(`${player.name} gets to go again! Please select another category.`, {
                rate: 0.8,
                pitch: 1.0
            });
        }
    }, 5000);
}

// Show break time notification
function showBreakNotification(message, type) {
    elements.breakMessage.textContent = message;
    elements.breakNotification.classList.remove('hidden');

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        dismissBreakNotification();
    }, 7000);
}

// Dismiss break notification
function dismissBreakNotification() {
    elements.breakNotification.classList.add('hidden');
}

// Move to next player
function nextPlayer() {
    try {
        // Make sure we have players
        if (!gameState.players || gameState.players.length === 0) {
            console.error('No players in nextPlayer function');
            return;
        }
        
        // Move to next player
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
        updateCurrentPlayerDisplay();
    
        // Check if game is complete
        if (gameState.questionsAnswered >= gameState.totalQuestions) {
            endGame();
            return;
        }
    
        // Announce next player
        const nextPlayer = getCurrentPlayer();
        if (!nextPlayer) {
            console.error('No next player found');
            return;
        }
        
        speak(`${nextPlayer.name}, you're up next. Please select a category and break time value.`, {
            rate: 0.8
        });
    } catch (error) {
        console.error('Error in nextPlayer:', error);
    }
}

// Show leaderboard
function showLeaderboard() {
    const sortedPlayers = [...gameState.players].sort((a, b) => {
        // Sort by score first, then by break time
        if (b.score !== a.score) return b.score - a.score;
        return b.breakTime - a.breakTime;
    });

    let html = `
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Score (min)</th>
                    <th>Break Time (min)</th>
                    <th>Correct</th>
                    <th>Incorrect</th>
                </tr>
            </thead>
            <tbody>
    `;

    sortedPlayers.forEach((player, index) => {
        const isCurrentPlayer = player.id === getCurrentPlayer().id;
        const rankClass = index === 0 ? 'top-player' : index === 1 ? 'second-player' : index === 2 ? 'third-player' : '';
        const highlightClass = isCurrentPlayer ? 'highlight-row' : '';

        html += `
            <tr class="player-row ${rankClass} ${highlightClass}">
                <td class="player-rank">${index + 1}</td>
                <td>${player.name}${isCurrentPlayer ? ' (Current)' : ''}</td>
                <td>${player.score} min</td>
                <td>${player.breakTime} min</td>
                <td>${player.correctAnswers}</td>
                <td>${player.incorrectAnswers}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    elements.leaderboardContent.innerHTML = html;
    elements.leaderboardModal.style.display = 'block';

    playSound('clickSound');
}

// Hide leaderboard
function hideLeaderboard() {
    elements.leaderboardModal.style.display = 'none';
}

// End game and show final results
function endGame() {
    const sortedPlayers = [...gameState.players].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.breakTime - a.breakTime;
    });

    let html = `
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Final Rank</th>
                    <th>Player</th>
                    <th>Final Score (min)</th>
                    <th>Total Break Time (min)</th>
                    <th>Questions Answered</th>
                    <th>Accuracy</th>
                </tr>
            </thead>
            <tbody>
    `;

    sortedPlayers.forEach((player, index) => {
        const rankClass = index === 0 ? 'top-player' : index === 1 ? 'second-player' : index === 2 ? 'third-player' : '';
        const accuracy = player.questionsAnswered > 0 ? Math.round((player.correctAnswers / player.questionsAnswered) * 100) : 0;

        html += `
            <tr class="player-row ${rankClass}">
                <td class="player-rank">${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.score} min</td>
                <td>${player.breakTime} min</td>
                <td>${player.questionsAnswered}</td>
                <td>${accuracy}%</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    elements.finalLeaderboard.innerHTML = html;
    elements.finalResultsModal.style.display = 'block';

    playSound('applauseSound');

    // Announce final results
    const winner = sortedPlayers[0];
    speak(`Congratulations to our champion, ${winner.name}, with a final score of ${winner.score} minutes and ${winner.breakTime} minutes of break time! Thank you all for playing Paramount Plus Jeopardy!`, {
        rate: 0.8,
        pitch: 1.0
    });
}

// Export results
function exportResults() {
    const sortedPlayers = [...gameState.players].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.breakTime - a.breakTime;
    });

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Rank,Player,Score (min),Break Time (min),Questions Answered,Correct Answers,Incorrect Answers,Accuracy\n";

    sortedPlayers.forEach((player, index) => {
        const accuracy = player.questionsAnswered > 0 ? Math.round((player.correctAnswers / player.questionsAnswered) * 100) : 0;
        csvContent += `${index + 1},${player.name},${player.score},${player.breakTime},${player.questionsAnswered},${player.correctAnswers},${player.incorrectAnswers},${accuracy}%\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "jeopardy_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    playSound('clickSound');
}

// Reset game
function resetGame() {
    try {
        // Stop any running countdown and speech
        stopCountdown();
        if (window.speechSynthesis) {
            speechSynthesis.cancel();
        }
        
        // Clear any pending timeouts
        if (window._gameTimeouts) {
            window._gameTimeouts.forEach(id => clearTimeout(id));
        }
        window._gameTimeouts = [];
        
        // Generate new random game data
        gameData = generateRandomGame();
        console.log('Generated new random questions and categories for reset');
        
        // Refresh DOM elements
        refreshDOMElements();
        
        // Make sure critical elements are available after refresh
        const criticalElements = ['startScreen', 'gameScreen', 'playersList'];
        const missingElements = criticalElements.filter(el => !elements[el]);
        
        if (missingElements.length > 0) {
            console.error('Missing critical elements during reset:', missingElements);
            alert('There was a problem resetting the game. Please refresh the page.');
            return;
        }
        
        // Save audio settings
        const audioEnabled = gameState ? gameState.audioEnabled : true;
        const bestVoice = gameState ? gameState.bestVoice : null;
        
        // Update total questions based on new categories
        const categoryCount = Object.keys(gameData.categories).length;
        const totalQuestions = categoryCount * 5; // 5 questions per category
        
        // Reset game state
        gameState = {
            players: [],
            currentPlayerIndex: 0,
            usedQuestions: new Set(),
            questionsAnswered: 0,
            totalQuestions: totalQuestions,
            currentQuestion: null,
            gameStarted: false,
            audioEnabled: audioEnabled,
            bestVoice: bestVoice,
            countdownInterval: null,
            countdownTime: 30,
            countdownRunning: false
        };
    
        // Re-initialize components
        setupPlayers();
        setupEventListeners(); // Re-bind events to be safe
        createGameBoard();
    
        // Hide all modals if the elements exist
        if (elements.questionModal) elements.questionModal.style.display = 'none';
        if (elements.leaderboardModal) elements.leaderboardModal.style.display = 'none';
        if (elements.finalResultsModal) elements.finalResultsModal.style.display = 'none';
        if (elements.breakNotification) elements.breakNotification.classList.add('hidden');
        
        // Reset any countdown UI
        if (elements.countdownTimer) {
            elements.countdownTimer.textContent = '30';
            elements.countdownTimer.className = 'countdown-timer';
        }
    
        // Go back to start screen
        showStartScreen();
        playSound('clickSound');
        
        console.log('Game reset successfully');
    } catch (error) {
        console.error('Error resetting game:', error);
        alert('There was a problem resetting the game. Please refresh the page.');
    }
}

// Play sound effect
function playSound(soundId) {
    if (!gameState.audioEnabled) return;

    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0;
        
        // Don't reset warning sound volume as it's controlled by the playTimerWarningSound function
        if (soundId !== 'warningSound') {
            sound.volume = 0.7; // Default volume for other sounds
        }
        
        sound.play().catch(e => console.warn('Sound play failed:', e));
    }
}

function stopWarningSound() {
    const sound = document.getElementById('warningSound');
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
    }
}

// Play warning sound with increasing frequency as timer gets lower
function playTimerWarningSound(secondsRemaining) {
    // Play warning sound at exactly 10 seconds
    if (secondsRemaining === 10) {
        const sound = document.getElementById('warningSound');
        if (sound) {
            sound.volume = 0.8; // Set to 80% volume
            playSound('warningSound');
        }
        console.log('Playing 10-second warning sound');
    } 
    // Play warning at 7 seconds
    else if (secondsRemaining === 7) {
        const sound = document.getElementById('warningSound');
        if (sound) {
            sound.volume = 0.9; // Set to 90% volume
            playSound('warningSound');
        }
    }
    // Play every second when 5 seconds or less remain
    else if (secondsRemaining <= 5) {
        const sound = document.getElementById('warningSound');
        if (sound) {
            sound.volume = 1.0; // Set to 100% volume (maximum)
            playSound('warningSound');
        }
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded, initializing game');
    // Wait a short moment to ensure all scripts and resources are loaded
    setTimeout(() => {
        try {
            initGame();
        } catch (error) {
            console.error('Error during game initialization:', error);
            alert('There was a problem initializing the game. Please refresh the page.');
        }
    }, 100);
});

// Handle page visibility changes (for speech synthesis and timer)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        speechSynthesis.cancel();
        // Pause countdown if page is hidden
        if (gameState.countdownRunning) {
            stopCountdown();
        }
    }
});

// Handle window focus
window.addEventListener('focus', () => {
    // Resume any paused speech synthesis functionality
    if (gameState.audioEnabled) {
        // Speech synthesis will resume automatically when speaking
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Only handle shortcuts when not in an input field
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    switch (e.key) {
        case ' ':
            // Spacebar to show answer
            if (elements.questionModal.style.display === 'block' && !elements.answerSection.classList.contains('hidden') === false) {
                e.preventDefault();
                showAnswer();
            }
            break;
        case 'c':
        case 'C':
            // C for correct
            if (!elements.answerSection.classList.contains('hidden')) {
                e.preventDefault();
                handleAnswer(true);
            }
            break;
        case 'x':
        case 'X':
            // X for incorrect
            if (!elements.answerSection.classList.contains('hidden')) {
                e.preventDefault();
                handleAnswer(false);
            }
            break;
        case 'l':
        case 'L':
            // L for leaderboard
            if (gameState.gameStarted) {
                e.preventDefault();
                showLeaderboard();
            }
            break;
        case 'Escape':
            // Escape to close modals
            if (elements.leaderboardModal.style.display === 'block') {
                hideLeaderboard();
            }
            break;
    }
});
