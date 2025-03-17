export type Type = 'feat' | 'docs' | 'style' | 'refactor' | 'test' | 'chore' | 'bug';

export type ItemTypeType = { type: Type; description: string };

export const types: ItemTypeType[] = [
  {
    type: 'feat',
    description: 'new feature for the user, not a new feature for build script',
  },
  {
    type: 'bug',
    description: 'bug fix for the user, not a fix to a build script',
  },
  {
    type: 'docs',
    description: 'changes to the documentation',
  },
  {
    type: 'style',
    description: 'formatting, missing semi colons, etc; no production code change',
  },
  {
    type: 'refactor',
    description: 'refactoring production code, eg. renaming a variable',
  },
  {
    type: 'test',
    description: 'adding missing tests, refactoring tests; no production code change',
  },
  {
    type: 'chore',
    description: 'updating grunt tasks etc; no production code change',
  },
];
