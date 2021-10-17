import { lazy } from "react"

// FORMAT
// component: your component  (required)
// slug: your component name (must be unique) (required)
// title:  (required)
// description: limit to 256 characters.
// author: your name/alias (required)
// email: your email address
// linkedin: your LinkedIn URL
// website: your website

const entries = [
  {
    component: lazy(() => import("./SampleEntry/SampleEntry")),
    slug: "SampleEntry",
    title: "(Sample) Retro Google",
    description:
      "The Google homepage as it launched in 1998 recreated using React",
    author: "Miguel N. Galace",
    email: "galacemiguel@gmail.com",
    linkedIn: "https://linkedin.com/in/galacemiguel/",
    website: "https://galacemiguel.com/",
  },
  {
    title: "DVD Logo",
    slug: "DVDLogo",
    description: "Bouncing DVD Logo",
    author: "Insidiae",
    email: "insidiae423@gmail.com",
    linkedIn: "https://www.linkedin.com/in/insidiae423/",
    website: "https://github.com/Insidiae",
    component: lazy(() => import("./DVDLogo/DVDLogo")),
  },
  {
    title: "Just A Maze ;)",
    slug: "JustAMaze",
    description: "Hehe.",
    author: "Franrey Saycon",
    email: "franreysaycon@gmail.com",
    linkedIn: "https://www.linkedin.com/in/fssaycon/",
    website: "https://github.com/franreysaycon",
    component: lazy(() => import("./Maze/Maze")),
  },
  {
    title: "Bokia 3210",
    slug: "BokiaPhone",
    description:
      "Your old, trusty brick phone. Use the buttons (cancel, accept, up, down) to control the phone. Use the keyboard to type your message and the direction keys to play a game of Snek.",
    author: "Carl de Guia",
    email: "carl.2795@gmail.com",
    linkedIn: "https://www.linkedin.com/in/carl-justin-de-guia-b40a1b97/",
    website: "https://twitter.com/carldegs",
    component: lazy(() => import("./BokiaPhone/BokiaPhone")),
  },
]

export default entries
