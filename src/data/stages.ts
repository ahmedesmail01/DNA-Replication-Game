export interface EnzymeOption {
  name: string;
  description: string;
  correct: boolean;
}

export interface Stage {
  title: string;
  question: string;
  options: EnzymeOption[];
  hint?: string;
}

export const stages: Stage[] = [
  {
    title: "Initiation",
    question: "Which enzyme unwinds the DNA double helix to start replication?",
    options: [
      { name: "Helicase", description: "Unwinds DNA", correct: true },
      { name: "Ligase", description: "Joins fragments", correct: false },
      { name: "Primase", description: "Adds RNA primer", correct: false },
    ],
  },
  {
    title: "Elongation",
    question: "Which enzyme synthesizes new DNA strands by adding nucleotides?",
    options: [
      { name: "Telomerase", description: "Extends telomeres", correct: false },
      {
        name: "DNA-Polymerase",
        description: "Adds nucleotides",
        correct: true,
      },
      { name: "Primase", description: "Adds RNA primer", correct: false },
    ],
  },
  {
    title: "Termination",
    question: "Which enzyme joins Okazaki fragments on the lagging strand?",
    options: [
      { name: "Helicase", description: "Unwinds DNA", correct: false },
      { name: "Ligase", description: "Seals gaps in DNA", correct: true },
      { name: "Primase", description: "Adds primer", correct: false },
    ],
  },
];
