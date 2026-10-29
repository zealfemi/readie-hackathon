export type recruitmentHubDataType = {
  image: string;
  heading: string;
  subtitle: string;
  card: string;
  description: string;
  content: string;
  features: string[];
  footer: string;
};

export const recruitmentHubData: recruitmentHubDataType[] = [
  {
    image: "/images/recruiter-hub.svg",
    heading: "Recruiter Hub",
    subtitle: "Hover to run the index",
    card: "Card 07 of 16 · Passport verified",
    description:
      "Every card in the drawer is a candidate with a Readie Passport. Run the rider along the index and the matching card lifts, seal showing.",
    content:
      "Verified candidates from the Readie community. Each one holds a Passport, so their experience and skills are checked before you see the profile.",
    features: [
      "Professionals with Readie Passports",
      "Filter by skill, experience and skill confidence",
      "Shortlist in one click",
    ],
    footer: "Best when you need verified candidates fast.",
  },
  {
    image: "/images/talent-discovery.svg",
    heading: "Talent Discovery",
    subtitle: "Hover to steer the probe",
    card: "8 of 8 profiles found",
    description:
      "The bed is the open web. The probe stops over one hole after another, and a pin rises for every profile that matches the search.",
    content:
      "Niche talent across the internet. Search by role, skills and location, and AI-powered matching finds hard-to-reach professionals across 30+ public professional sites, from GitHub to Google Scholar.",
    features: [
      "AI-powered search across public sources",
      "A match score on every result",
      "Save results to a shortlist by role",
    ],
    footer: "Best when the people you need aren't on Readie yet.",
  },
];
