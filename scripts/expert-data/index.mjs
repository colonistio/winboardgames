import { classicsExpert } from "./classics.mjs";
import { eurosExpert } from "./euros.mjs";
import { cardsExpert } from "./cards.mjs";
import { diceExpert } from "./dice.mjs";
import { wordsExpert } from "./words.mjs";
import { partyExpert } from "./party.mjs";
import { cooperativeExpert } from "./cooperative.mjs";
import { strategyWarExpert } from "./strategyWar.mjs";

export const expertData = {
  ...classicsExpert,
  ...eurosExpert,
  ...cardsExpert,
  ...diceExpert,
  ...wordsExpert,
  ...partyExpert,
  ...cooperativeExpert,
  ...strategyWarExpert
};
