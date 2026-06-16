export const testimonials = [
  {
    name: 'Sundar Gurung',
    role: 'Marketing Lead, Fonepay Pokhara',
    quote:
      'Prajowola brought genuine energy to every campus activation. Her content ideas consistently outperformed our usual student-ambassador material, and she was reliable under tight deadlines.',
    initials: 'SG'
  },
  {
    name: 'Aastha Karki',
    role: 'Faculty Coordinator, Kanya Campus Pokhara',
    quote:
      'One of the most proactive students in her cohort. Prajowola approaches every group project like a real campaign brief — objective, audience, and outcome always mapped out first.',
    initials: 'AK'
  },
  {
    name: 'Bipin Thapa',
    role: 'Peer Project Partner',
    quote:
      'She has a sharp eye for what makes content actually land with a youth audience, not just what looks good in a deck. Great collaborator and always open to feedback.',
    initials: 'BT'
  }
];

// Coding projects — small browser games I built with plain HTML, CSS, and JavaScript.
// Each game also ships as a single self-contained HTML file you can download and run.
export const games = [
  {
    slug: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    tagline: 'Play against three levels of computer opponent.',
    description:
      'A classic 3×3 game with Easy, Medium, and Hard computer opponents — Hard uses the minimax algorithm and can never be beaten.',
    tech: ['JavaScript', 'React', 'Minimax AI'],
    emoji: '⭕',
    sourceFile: '/source/tic-tac-toe.html',
    languages: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Three AI difficulties: Easy (random), Medium (blocks and takes wins), Hard (unbeatable minimax).',
      'Automatic win and draw detection with the winning line highlighted.',
      'Pure DOM — no canvas, no libraries, no build step.'
    ]
  },
  {
    slug: 'snake',
    title: 'Snake',
    tagline: 'The arcade classic, rendered on canvas.',
    description:
      'Steer the snake with the arrow keys or on-screen controls, eat the food to grow, and avoid hitting the walls or yourself. Built with the HTML canvas and a game loop.',
    tech: ['JavaScript', 'Canvas', 'Game Loop'],
    emoji: '🐍',
    sourceFile: '/source/snake.html',
    languages: ['HTML', 'CSS', 'JavaScript (Canvas)'],
    features: [
      'Fixed-step game loop driving smooth grid-based movement.',
      'Arrow-key, WASD, and on-screen touch controls.',
      'Live score and instant restart after game over.'
    ]
  },
  {
    slug: 'pac-man',
    title: 'Pac-Man',
    tagline: 'Eat the pellets, grab a power pellet, then chase the ghosts.',
    description:
      'A compact maze muncher with three difficulty levels and power pellets that flip the chase — eat a big pellet and the ghosts turn blue and edible for a few seconds.',
    tech: ['JavaScript', 'Canvas', 'Maze AI'],
    emoji: '🟡',
    sourceFile: '/source/pac-man.html',
    languages: ['HTML', 'CSS', 'JavaScript (Canvas)'],
    features: [
      'Three difficulties that change ghost speed, count, and intelligence.',
      'Power pellets that frighten the ghosts and let you eat them for bonus points.',
      'Grid maze with pellet counting, score, and chasing ghost AI.'
    ]
  }
];
