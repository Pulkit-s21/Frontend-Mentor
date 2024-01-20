import "./App.css"
import { Image } from "./components/Image"
import { Name } from "./components/Name"
import { Address } from "./components/Address"
import { Job } from "./components/Job"
import { LinkBtn } from "./components/LinkBtn"

function App() {
  const links = [
    { link: "https://github.com/Pulkit-s21", site: "Github" },
    {
      link: "https://www.frontendmentor.io/profile/Pulkit-s21",
      site: "Frontend Mentor",
    },
    { link: "https://twitter.com/Pulkit2104", site: "Twitter" },
    {
      link: "https://www.linkedin.com/in/pulkit-saxena-721815169/",
      site: "LinkedIn",
    },
    {
      link: "https://stackoverflow.com/users/16843460/pulkit",
      site: "Stackoverflow",
    },
  ]

  return (
    <div className="flex flex-col gap-3 bg-darkBray p-8 rounded-2xl">
      <Image />
      <Name name={"Pulkit Saxena"} />
      <Address address={"Panchkula, Chandigarh"} />
      <Job job={"Front-end developer and interested in fullstack"} />
      <div className="flex flex-col gap-4">
        {links.map((link, idx) => {
          return <LinkBtn key={idx} link={link.link} site={link.site} />
        })}
      </div>
    </div>
  )
}

export default App
