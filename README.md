# Readie Platform UI

A clean, responsive, and component-driven web application built with Next.js, Typescript and styled with Tailwind CSS. This project focuses on a modular architecture, making it easy to scale and maintain as new features are added.

🔗 **Live Preview:** <https://readie-hackathon.vercel.app>

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **AI Assistance:** Gemini was used to generate a custom Tailwind theme—specifically the color palette for the text and backgrounds—ensuring a cohesive and modern look. Gemini was also utilized to draft and structure the JSON data that populates several components across the app.

## Component Breakdown

I split the page into smaller components so each part has a clear job.

### 1. Banner compound component and Context API

I built a reusable `Banner` compound component in `app/_components/Banner.tsx`. It uses the **React Context API** to share layout settings, such as the image width and content width, with its child components. This lets each banner use the same layout while choosing its own column sizes and content.

The compound Banner is used in these sections:

- `BannerTargetedAssessments.tsx`
- `BannerEvidence.tsx`
- `BannerGoBeyond.tsx`
- `BannerEveryCandidate.tsx`

Each section can use `Banner`, `Banner.Image`, and `Banner.Content` (also exported as `BannerImage` and `BannerContent`) to arrange its image and content.

`CVLieBanner.tsx` and `BannerNextHire.tsx` are separate sections; they do not use the compound Banner layout.

### 2. Other reusable components

- **`Button.tsx`** — a shared button used for calls to action in `Hero`, `Header`, `FAQs`, `BannerGoBeyond`, `BannerNextHire`, and `Footer`. It can render as a link or a button.
- **`Faq.tsx`** — displays one expandable FAQ question. `FAQs.tsx` reuses it to build the full FAQ list and uses React state to track which question is open.
- **`PlanCard.tsx`** — displays one pricing plan. `OurPlans.tsx` maps through the plan data and renders a card for each plan.
- **`CardSimpleList.tsx`** — displays a heading, description, and checklist. It is used in `RecruitmentHub.tsx` and `BannerEveryCandidate.tsx`.
- **`CardDetailedList.tsx`** — displays step-by-step feature details. It is used in `BannerTargetedAssessments.tsx`, `BannerEvidence.tsx`, and `BannerGoBeyond.tsx`. **`CardDetailedListHeader.tsx`** displays a feature section heading and introduction, and is used in `BannerTargetedAssessments.tsx` and `BannerEvidence.tsx`.
- **`CardImageWithText.tsx`** — combines an image with labels and a short description. It is used in `RecruitmentHub.tsx`, `BannerTargetedAssessments.tsx`, and `BannerGoBeyond.tsx`.

### 3. Main sections and layout

The home page is arranged in `app/page.tsx` and includes:

- `Header` and `Footer` — shared site layout, added in `app/layout.tsx`.
- `Hero` — the main introduction and calls to action.
- `CVLieBanner` — presents statistics about problems in hiring.
- `TalentPool` — groups the talent and feature sections, including `RecruitmentHub`, `BannerTargetedAssessments`, `BannerEvidence`, `BannerGoBeyond`, `BannerEveryCandidate`, and `RevealConsent`.
- `OurPlans` — shows the available pricing plans.
- `FAQs` — displays common questions in an expandable list.
- `BannerNextHire` — the final call-to-action section.

## Data management

The content is kept close to the components that use it, with the Recruitment Hub data in a separate file:

- **`app/_data/recruitmentHub.ts`** — contains the content for the Recruiter Hub and Talent Discovery cards. `RecruitmentHub.tsx` reads this data to display the images, descriptions, feature lists, and footer text.
- **`app/_components/FAQs.tsx`** — contains the FAQ questions and answers.
- **`app/_components/OurPlans.tsx`** — contains the plan names, prices, features, and other pricing details used by `PlanCard.tsx`.
- **`app/_components/BannerTargetedAssessments.tsx`** — contains the assessment steps.
- **`app/_components/BannerEvidence.tsx`** — contains the evidence and skill-check details.
- **`app/_components/BannerGoBeyond.tsx`** — contains the interview-check details.
- **`app/_components/BannerEveryCandidate.tsx`** — contains the candidate feature list.
- **`app/_components/CVLieBanner.tsx`** — contains the statistics shown in the CV section.
- **`app/_components/Footer.tsx`** — contains the footer link groups.

The FAQ answers currently use placeholder text, so they should be updated with the final answers in `FAQs.tsx`.

## Tech stack

- **Next.js** with the App Router
- **React** and **TypeScript**
- **Tailwind CSS** for layout, responsive styling, and theme colors
- **React Context API** for the Banner compound component
- **React Icons** for interface icons
- **Next.js Image and Link** for images and navigation

## Run locally

Install the project dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. Keep the project's `public/images/` assets in place, as several components use images from that folder.
