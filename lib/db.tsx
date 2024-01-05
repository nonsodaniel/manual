import { MediaContent, PageContent } from "./types";

export const footerProductList = [
  { label: "Popular" },
  { label: "Trending" },
  { label: "Guided" },
  { label: "Products" },
];

export const footerCompanyList = [
  { label: "Press" },
  { label: "Mission" },
  { label: "Strategy" },
  { label: "ABout" },
];

export const footerInfoList = [
  { label: "Support" },
  { label: "Customer Service" },
  { label: "Get Started" },
];

export const questions = {
  questions: [
    {
      question: "Which image best matches your hair loss?",
      type: "ChoiceType",
      options: [
        {
          display:
            '<img alt="Temples" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />',
          value: "Temples",
          isRejection: false,
        },
        {
          display:
            '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402 x.png 2x"/>',
          value: "Temples & Crown",
          isRejection: false,
        },
        {
          display:
            '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>',
          value: "Patchy",
          isRejection: true,
        },
        {
          display:
            '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn g 2x" />',
          value: "Moderate",
          isRejection: false,
        },
        {
          display:
            '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn g 2x"/>',
          value: "Extensive",
          isRejection: true,
        },
        {
          display:
            '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn g 2x" />',
          value: "Complete",
          isRejection: true,
        },
      ],
    },
    {
      question:
        "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
      type: "ChoiceType",
      options: [
        {
          display: "Yes",
          value: true,
          isRejection: true,
        },
        {
          display: "No",
          value: false,
          isRejection: false,
        },
      ],
    },
    {
      question:
        "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
      type: "ChoiceType",
      options: [
        {
          display: "Yes",
          value: true,
          isRejection: true,
        },
        {
          display: "No",
          value: false,
          isRejection: false,
        },
      ],
    },
  ],
};

export const footerSocialLogos: MediaContent[] = [
  { label: "fb", path: "/assets/img/logo-fb.svg" },
  { label: "google", path: "/assets/img/google.svg" },
  { label: "twitter", path: "/assets/img/twitter.svg" },
];

export const aboutPageContent: PageContent[] = [
  {
    label: "Hair loss",
    heading: "Hair loss needn’t be irreversible. We can help! ",
    description:
      "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
    aboutImgPath: "/assets/img/about-1.svg",
    numberImgPath: "/assets/img/01.svg",
  },
  {
    label: "Erecetile dysfunction",
    heading: "Erections can be a tricky thing. But no need to feel down!",
    description:
      "We’re working around the clock to bring you a holistic approach toyour wellness. From top to bottom, inside and out.",
    aboutImgPath: "/assets/img/about-2.svg",
    numberImgPath: "/assets/img/02.svg",
  },
];
