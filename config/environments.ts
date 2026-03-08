export const environments = {
  sk: 'https://www.shirttuning.sk/',
  cz: 'https://www.shirttuning.cz/',
  de: 'https://www.shirttuning.de/',
  nl: 'https://www.shirttuning.nl/',
  it: 'https://www.shirttuning.it/',
} as const;

export type Env = keyof typeof environments;
