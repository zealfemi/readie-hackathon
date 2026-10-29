# Readie Platform UI

A clean, responsive, and component-driven web application built with Next.js, Typescript and styled with Tailwind CSS. This project focuses on a modular architecture, making it easy to scale and maintain as new features are added.

🔗 **Live Preview:** <https://readie-hackathon.vercel.app>

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **AI Assistance:** Gemini was used to generate a custom Tailwind theme—specifically the color palette for the text and backgrounds—ensuring a cohesive and modern look. Gemini was also utilized to draft and structure the JSON data that populates several components across the app.

I used Gemini to help with the design and content:

- **Tailwind theme:** Gemini helped create the colour theme used for text, backgrounds, accents, and borders. The theme colours are defined in `app/globals.css`.
- **Data files:** Gemini also helped draft and organise content for some sections. I moved that content into typed TypeScript arrays and objects in `app/_data/` so it is easier to update. These are `.ts` files, not separate `.json` files.

## Fonts and icons

I used three fonts from Google Fonts through Next.js in `app/layout.tsx`:

- **Inter** — the main font used for page text.
- **Inter Tight** — an additional font available for the design.
- **JetBrains Mono** — a mono-spaced font available for the design.

I used **React Icons** (`react-icons`) for icons across the app. The icons come from sets such as Heroicons, Font Awesome, Ionicons, Material Design Icons, Simple Line Icons, and GitHub Octicons.

## Component breakdown

I split the page into smaller components so each one has a clear job.

### 1. Banner compound component and Context API

I built a reusable compound component in `app/_components/Banner.tsx`. It uses the **React Context API** to share layout settings, such as the image width and content width, with its child components. This lets each banner use the same layout while choosing how much space the image and text should take.

The compound Banner is used by these sections:

- `BannerEveryCandidate.tsx`
- `BannerEvidence.tsx`
- `BannerGoBeyond.tsx`
- `BannerTargetedAssessments.tsx`

These sections use `Banner`, `Banner.Image`, and `Banner.Content` (also exported as `BannerImage` and `BannerContent`). `CVLieBanner.tsx` and `BannerNextHire.tsx` are separate sections and do not use this compound component.

### 2. Other reusable components

- **`Button.tsx`** — a shared button used for actions in sections such as `Hero`, `Header`, `FAQs`, `BannerGoBeyond`, `BannerNextHire`, and `Footer`.
- **`Faq.tsx`** — displays one expandable question. `FAQs.tsx` reuses it to build the full FAQ list and uses React state to track which question is open.
- **`PlanCard.tsx`** — displays one pricing plan. `OurPlans.tsx` loops through the plan data and renders a card for each one.
- **`CardSimpleList.tsx`** — displays a heading, description, and list of features. It is used in `RecruitmentHub.tsx` and `BannerEveryCandidate.tsx`.
- **`CardDetailedList.tsx`** — displays a detailed feature or process step. It is used in `BannerTargetedAssessments.tsx`, `BannerEvidence.tsx`, and `BannerGoBeyond.tsx`.
- **`CardDetailedListHeader.tsx`** — displays a heading and introduction for a detailed list. It is used in `BannerTargetedAssessments.tsx` and `BannerEvidence.tsx`.
- **`CardImageWithText.tsx`** — combines an image with labels and a description. It is used in `RecruitmentHub.tsx`, `BannerTargetedAssessments.tsx`, and `BannerGoBeyond.tsx`.

### 3. Main page sections

The page is put together in `app/page.tsx` and includes:

- `Hero` — the main introduction.
- `CVLieBanner` — shows statistics about hiring problems.
- `TalentPool` — groups the `RecruitmentHub`, `BannerTargetedAssessments`, `BannerEvidence`, `BannerGoBeyond`, `BannerEveryCandidate`, and `RevealConsent` sections.
- `OurPlans` — shows the available pricing plans.
- `FAQs` — shows expandable questions and answers.
- `BannerNextHire` — the final call to action.

`Header` and `Footer` are added to the shared page layout in `app/layout.tsx`.

## Data management

I moved the content for several sections into separate files in `app/_data/`. This makes it easier to change the words, lists, and plan details without editing the layout code for those sections.

- **`app/_data/faqs.ts`** — FAQ questions and answers, used by `FAQs.tsx` and `Faq.tsx`.
- **`app/_data/goBeyond.ts`** — the feature details shown in `BannerGoBeyond.tsx`.
- **`app/_data/ourPlans.ts`** — plan names, prices, billing details, and feature lists used by `OurPlans.tsx` and `PlanCard.tsx`.
- **`app/_data/recruitmentHub.ts`** — content for the Recruiter Hub and Talent Discovery cards used by `RecruitmentHub.tsx`.
- **`app/_data/revealConsent.ts`** — icons, headings, and descriptions used by `RevealConsent.tsx`.
- **`app/_data/targetedAssesments.ts`** — the campaign steps used by `BannerTargetedAssessments.tsx` and the evidence details used by `BannerEvidence.tsx`. The file name is spelled `targetedAssesments.ts` in the project.

Some content is still written directly in its component, including the CV statistics in `CVLieBanner.tsx` and the feature list in `BannerEveryCandidate.tsx`. The FAQ answers currently contain placeholder text, so they should be replaced with the final answers in `app/_data/faqs.ts`.

## Tech stack

- **Next.js** with the App Router
- **React** and **TypeScript**
- **Tailwind CSS** for layout, responsive styling, and theme colours
- **React Context API** for the Banner compound component
- **React Icons** for icons
- **Next.js Fonts, Image, and Link** for fonts, images, and navigation

## Run locally

Install the project dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. Keep the project's `public/images/` assets in place, because several components use images from that folder.
