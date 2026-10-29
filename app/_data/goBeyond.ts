import { detailedListType } from "../_components/CardDetailedList";

export type assessmentType = {
  image: string;
  subtitle: string;
  info: string;
  imageDescription: string;
  steps: stepType[];
  buttonText: string;
  footer: string;
};

export type stepType = {
  number?: string;
  heading: string;
  content: string;
};

export const goBeyondData: detailedListType[] = [
  {
    heading: "Identity verification",
    description:
      "Checks that the person on the call is the person who took the campaign assessment.",
  },
  {
    heading: "Deepfake detection",
    description:
      "Looks for a synthetic or altered feed, off-screen reading, and speech that doesn't match lip movement.",
  },
  {
    heading: "Campaign assessment",
    description:
      "Compares the interview with the candidate's recorded assessment session.",
  },
];
