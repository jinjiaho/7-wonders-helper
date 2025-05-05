import type { TallyProps } from "./types";

export const PLAYER_LIMIT = 7;

export const TALLY_COMPONENTS: TallyProps[] = [
  {
    name: "Military Conflicts",
    key: "military",
    description:
      "Each player adds their Victory and Defeat tokens (this total can be negative !).",
    note: "Example : Alexandria has fi nished the game with the following tokens: +1, +3, +5, -1, -1, -1 for a total of 6 points.",
  },
  {
    name: "Treasury Contents",
    key: "treasure",
    description:
      "For every 3 coins in their possession at the end of the game, players score 1 victory point. Leftover coins score no points.",
    note: "Example : Alexandria has fi nished the game with 14 coins in their treasury, which earns them 4 victory points (4 sets of 3 coins plus one partial set).",
  },
  {
    name: "Wonders",
    key: "wonder",
    description:
      "Each player adds to their score the victory points from their wonder.",
    note: "Example : Alexandria has built all 3 stages of their Wonder (side A); 10 victory points (3 for the fi rst phase and 7 for the third) are added to their total.",
  },
  {
    name: "Civilian Structures",
    key: "blueCards",
    description:
      "Each player adds the victory points of their Civilian structures (blue cards). This amount is indicated on each Civilian structure.",
    note: "Example : Alexandria has built the following civilian structures: Altar (2VP), Aqueduct (5VP) and Town Hall (6VP) for a total of 13 victory points.",
  },
  {
    name: "Scientific Structures",
    key: "greenCards",
    description:
      "The scientific (green) cards earn victory points in two very different ways: from sets of identical symbols and from sets of 3 different symbols.",
    note: "The victory points earned by both methods are cumulative!",
  },
  {
    name: "Commercial Structures",
    key: "yellowCards",
    description:
      "Some commercial structures (yellow cards) from Age III grant victory points.",
    note: "Example : Alexandria has built the Chamber of Commerce. This structure is worth 2 victory points for each gray card present in their City. Alexandria has played two gray cards, so she gets 4 victory points.",
  },
  {
    name: "Guilds",
    key: "purpleCards",
    description:
      "Each Guild is worth a number of victory points depending on the configuration of the player’s city and/or that of the two neighboring cities (see description of the structures).",
  },
];
