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
    description: "Drag the red box carefully to do red area to win. Be careful of going out of bounds or else you'll go back again.",
    author: "Franrey Saycon",
    email: "franreysaycon@gmail.com",
    linkedIn: "https://www.linkedin.com/in/fssaycon/",
    website: "https://github.com/franreysaycon",
    component: lazy(() => import("./Maze/Maze")),
  },
]

export default entries
