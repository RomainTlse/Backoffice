export interface CompetenceOutilsOs {
  os: Array<Os>;
  outils: Array<Outil>;
}

export interface Os {
  name: string;
  image: string;
}

export interface Outil {
  name: string;
  image: string;
}
