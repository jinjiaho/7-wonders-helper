import type { StepProps } from "./types";

export const PLAYER_LIMIT = 7;
export const PLAYER_CHAR_LIMITS = { min: 1, max: 2 };

export const PLAYER_COLORS = [
  "#6d887e",
  "#94aa9e",
  "#8a8583",
  "#c1a160",
  "#4c6583",
  "#cd8b62",
  "#475c6c",
];

export const SCORE_SEGMENTS: StepProps[] = [
  {
    name: "Military Conflicts",
    key: "military",
    description:
      "Adds your Victory and Defeat tokens (this total can be negative!)",
    note: "Example: Alex has finished the game with the following tokens: +1, +3, +5, -1, -1, -1 for a total of 6 points.",
    imgPath: "/images/military.webp",
  },
  {
    name: "Treasury Contents",
    key: "treasure",
    description:
      "Score 1 VP for every 3 coins in your possession at the end of the game. Leftover coins score no points.",
    note: "Example: Alex has finished the game with 14 coins in her treasury, which earns her 4 victory points (4 sets of 3 coins).",
    imgPath: "/images/treasury.webp",
  },
  {
    name: "Wonders",
    key: "wonder",
    description: "Sum the victory points from completed stages of your wonder.",
    note: "Example: Alex has built all 3 stages of her Wonder; 10 victory points (3 for the first phase and 7 for the third) are added to her total.",
    imgPath: "/images/wonder.webp",
  },
  {
    name: "Civilian Structures",
    key: "blueCards",
    description:
      "Sum the victory points indicated on each of your Civilian structures (blue cards).",
    note: "Example: Alex has built the following civilian structures: Altar (2VP), Aqueduct (5VP) and Town Hall (6VP) for a total of 13 victory points.",
    imgPath: "/images/civilian.webp",
  },
  {
    name: "Scientific Structures",
    key: "greenCards",
    description:
      "VPs from green cards are calculated from sets of identical symbols (n^2 VP, where n is the number of cards in a set of identical symbols) AND sets of 3 different symbols (7VP per set).",
    note: "The victory points earned by both methods are cumulative!",
    imgPath: "/images/science.webp",
  },
  {
    name: "Commercial Structures",
    key: "yellowCards",
    description:
      "Sum victory points from commercial structures (yellow cards), if any.",
    note: "Example: Alex has built the Chamber of Commerce. This structure is worth 2 victory points for each gray card present in her City. Alex has played two gray cards, so she gets 4 victory points.",
    imgPath: "/images/commercial.webp",
  },
  {
    name: "Guilds",
    key: "purpleCards",
    description:
      "Each Guild is worth a number of victory points depending on the configuration of your city and/or that of your two neighboring cities (see description of the structures).",
    imgPath: "/images/guilds.webp",
  },
];
