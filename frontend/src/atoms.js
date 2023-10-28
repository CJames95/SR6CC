import { atom } from 'jotai';

export const primaryHeader = atom('bg-[#800E6E]');
export const secondaryHeader = atom('bg-[#93107F]');
export const peripheralBackground = atom('bg-[#000000]');
export const primaryBackgroundEnd = atom('to-[#061737]');
export const primaryBackgroundStart = atom('from-[#144EB8]');
export const secondaryBackground = atom('bg-[#250420]');
export const secondaryBackgroundBorder = atom('border-[#250420]');
export const textColor = atom('text-[#F3E2EE]');
export const textHoverColor = atom('hover:text-[#A3A3A3]');
export const textBorderColor = atom('border-[#F3E2EE]');
export const textBorderHoverColor = atom('hover:border-[#A3A3A3]');
export const selectedButtonColor = atom('bg-[#651093]');
export const selectedHoverButtonColor = atom('hover:bg-[#590E81]');
export const selectedActiveButtonColor = atom('active:bg-[#7212A5]');
export const buttonColor = atom('bg-gray-200');
export const hoverButtonColor = atom('hover:bg-gray-300');
export const activeButtonColor = atom('active:bg-gray-100');

export const runnerName = atom('Runner Name');
export const settings = atom({
    powerState: 1,
    creatorState: 0,
})
export const page = atom(0);
export const karma = atom(50);                                                                   // Global Karma variable with initial value of 50 to keep track of karma available
export const priorities = atom({                                                                 // Global Priorities object to store selected priority values
  metatype: 0, 
  attribute: 1, 
  skill: 2, 
  magic: 3, 
  resource: 4
});
export const metatype = atom({                                                                   // Global Metatype object to store selected metatype and its cost 
  race: 'Troll', 
  cost: 0 
});
export const qualities = atom([]);                                                               // Global Qualities array with initial empty array to store taken qualities
export const attributes = atom({                                                                 // Global Attributes object to keep track of adjustment, attribute, and karma points spent
  adjustPointsBod: 0, attribPointsBod: 0, karmaPointsBod: 0, bod: 1,
  adjustPointsAgi: 0, attribPointsAgi: 0, karmaPointsAgi: 0, agi: 1,
  adjustPointsRea: 0, attribPointsRea: 0, karmaPointsRea: 0, rea: 1,
  adjustPointsStr: 0, attribPointsStr: 0, karmaPointsStr: 0, str: 1,
  adjustPointsWil: 0, attribPointsWil: 0, karmaPointsWil: 0, wil: 1,
  adjustPointsLog: 0, attribPointsLog: 0, karmaPointsLog: 0, log: 1,
  adjustPointsInt: 0, attribPointsInt: 0, karmaPointsInt: 0, int: 1,
  adjustPointsCha: 0, attribPointsCha: 0, karmaPointsCha: 0, cha: 1,
  adjustPointsEdg: 0, attribPointsEdg: 0, karmaPointsEdg: 0, edg: 1,
  adjustPointsMag: 0, attribPointsMag: 0, karmaPointsMag: 0, mag: 1,
  adjustPointsRes: 0, attribPointsRes: 0, karmaPointsRes: 0, res: 1,
});
const adjustmentValues = atom({
    0: 13,
    1: 11,
    2: 9,
    3: 4,
    4: 1
});
const attributeValues = atom({
    0: 24,
    1: 16,
    2: 12,
    3: 8,
    4: 2
});
export const attributePoints = atom((get) => {
    const currentPriorities = get(priorities);
    const currentAdjustmentValues = get(adjustmentValues);
    const currentAttributeValues = get(attributeValues);
    return {
        maxAdjustment: currentAdjustmentValues[currentPriorities.metatype] || 0,
        adjustment: currentAdjustmentValues[currentPriorities.metatype] || 0,
        maxAttribute: currentAttributeValues[currentPriorities.attribute] || 0,
        attribute: currentAttributeValues[currentPriorities.attribute] || 0
    }
});
export const skills = atom([]);                                                                  // Global Skills array with initial empty array to store taken skills
const skillValues = atom({
    0: 32,
    1: 24,
    2: 20,
    3: 16,
    4: 10
});
export const skillPoints = atom({
  skill: skillValues[priorities.skill] || 0,
  maxSkill: skillValues[priorities.skill] || 0
})
export const knowledge = atom([]);                                                               // Global Knowledge array with initial empty array to store taken knowledge
export const knowledgePoints = atom({
  maxKnowledge: attributes.log,
  knowledge: attributes.log
})
export const language = atom([]);                                                                // Global Language array with initial empty array to store taken languages
const resourcesByPriority = atom({
    0: 450000,
    1: 275000,
    2: 150000,
    3: 50000,
    4: 8000
});
export const resourcePoints = atom({
    resources: resourcesByPriority[priorities.resource] || 0,
    maxResources: resourcesByPriority[priorities.resource] || 0
})