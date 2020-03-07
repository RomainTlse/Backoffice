export interface CompetenceTechnique {
  name: string;
  image: string;
  interet: number;
  frameworks: Array<Framework>;
}

interface Framework {
  name: string;
  image: string;
}

