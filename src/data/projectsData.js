import kubler from "../assets/images/kubler-audio-e-commerce-nextjs-project.vercel.app_ (1)-edited-cropped.png";

import kublerHEro from "../assets/images/kubler-static-main-1.png";

import kublerPreview1 from "../assets/images/kubler-static-preview-1.png";

import kublerPreview2 from "../assets/images/kubler-static-preview-2.png";

import moodPortfolio from "../assets/images/mood-tracking-portfolio.png";

import moodHero from "../assets/images/mood-hero.png";
import moodPreview1 from "../assets/images/mood-preview-1.png";
import moodPreview2 from "../assets/images/mood-preview-2.png";

import scooterPortfolio from "../assets/images/scooter-portfolio.png";
import scooterHero from "../assets/images/scooter-hero.png";
import scooterPreview1 from "../assets/images/scooter-preview-1.png";
import scooterPreview2 from "../assets/images/scooter-preview-2.png";

const projectsData = [
  {
    name: "Kubler Audio Shop",
    description:
      "This project involved developing a fully functional front-end for an e-commerce platform using Next.js. I translated design specifications into a responsive, user-friendly interface and implemented key e-commerce features, with a strong focus on usability, performance, and interactive user experiences across the application.",
    background:
      "This project was completed as part of a front-end development challenge based on a detailed design and project brief. The specifications included both mobile and desktop layouts, requiring a responsive and consistent implementation across different screen sizes. Working on projects like this has helped me refine my development workflow, strengthen my problem-solving skills, and gain experience tackling real-world front-end challenges while continuously improving and adapting my approach.",
    previous: "Scooter Multi-page Website",
    next: "Mood Tracking App",
    images: {
      mobile: {
        portfolio: kubler,
        hero: kublerHEro,
        preview1: kublerPreview1,
        preview2: kublerPreview2,
      },
      tablet: {
        portfolio: kubler,
        hero: kublerHEro,
        preview1: kublerPreview1,
        preview2: kublerPreview2,
      },
      desktop: {
        portfolio: kubler,
        hero: kublerHEro,
        preview1: kublerPreview1,
        preview2: kublerPreview2,
      },
    },
    website: "https://kubler-audio-e-commerce-nextjs-project.vercel.app/",
  },
  {
    name: "Mood Tracking App",
    description:
      "This project is a fully interactive health-tracking application that allows users to monitor multiple data points over time, with built-in statistics and visualizations for progress insights. I collaborated closely with software developer Jia He, working within a structured ticket-based workflow, sharing ownership of technical decisions, and maintaining constant communication. The application was built using React and Tailwind CSS, with local storage implemented to ensure persistent user data across sessions.",
    background:
      "This project was completed as part of a front-end development challenge based on a detailed design and project brief. The specifications included both mobile and desktop layouts, requiring a responsive and consistent implementation across different screen sizes. Working on projects like this has helped me refine my development workflow, strengthen my problem-solving skills, and gain experience tackling real-world front-end challenges while continuously improving and adapting my approach.",
    previous: "Kubler Audio Shop",
    next: "Insure",
    images: {
      mobile: {
        portfolio: moodPortfolio,
        hero: moodHero,
        preview1: moodPreview1,
        preview2: moodPreview2,
      },
      tablet: {
        portfolio: moodPortfolio,
        hero: moodHero,
        preview1: moodPreview1,
        preview2: moodPreview2,
      },
      desktop: {
        portfolio: moodPortfolio,
        hero: moodHero,
        preview1: moodPreview1,
        preview2: moodPreview2,
      },
    },

    website: "https://mood-tracking-app-fm-xavi-jia.vercel.app/",
  },
  {
    name: "Scooter Multi-page Website",
    description:
      "This project involved developing a multi-page marketing website from detailed design specifications. The scope included four distinct pages, each implemented with responsive layouts to ensure a consistent user experience across mobile, tablet, and desktop screen sizes. The project provided an opportunity to strengthen my front-end development skills, particularly in building scalable layouts and maintaining design consistency across multiple views.",
    background:
      "This project was completed as part of a front-end development challenge based on a detailed design and project brief. The specifications included both mobile and desktop layouts, requiring a responsive and consistent implementation across different screen sizes. Working on projects like this has helped me refine my development workflow, strengthen my problem-solving skills, and gain experience tackling real-world front-end challenges while continuously improving and adapting my approach.",
    previous: "Mood Tracking App",
    next: "Kubler Audio Shop",
    images: {
      mobile: {
        portfolio: scooterPortfolio,
        hero: scooterHero,
        preview1: "/images/detail/mobile/image-insure-preview-1@2x.jpg",
        preview2: "/images/detail/mobile/image-insure-preview-2@2x.jpg",
      },
      tablet: {
        portfolio: scooterPortfolio,
        hero: scooterHero,
        preview1: scooterPreview1,
        preview2: scooterPreview2,
      },
      desktop: {
        portfolio: scooterPortfolio,
        hero: scooterHero,
        preview1: scooterPreview1,
        preview2: scooterPreview2,
      },
    },
    website:
      "https://scoot-multipage-website-app-frontendmentor-prac.vercel.app/home",
  },
];

export default projectsData;
