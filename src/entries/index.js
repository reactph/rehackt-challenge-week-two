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
    title: "Change Me",
    description:
      "Change Me",
    author: "Change Me",
    email: "change@me.com",
    linkedIn: "https://www.linkedin.com/in/changeme/",
    website: "https://change.me",
  }
]

export default entries
