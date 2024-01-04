import { Header } from "../components/Header"
import { Image } from "../components/Image"
import { InfoText } from "../components/InfoText"
import { BulletPoints } from "../components/BulletPoints"
import { EmailInput } from "../components/EmailInput"
import { Button } from "../components/Button"
import { Data } from "../utilities/Data"

export const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:p-6 rounded-b-2xl md:rounded-2xl pb-6 gap-4 bg-white text-black">
      <Image />
      <div className="flex flex-col md:justify-center px-4 gap-3">
        <Header />
        <InfoText />
        {Data.map((updates, idx) => {
          return <BulletPoints key={idx} {...updates} />
        })}
        <form className="flex flex-col gap-4">
          <EmailInput />
          <Button text="Subscribe to the newsletter" url={"success"} />
        </form>
      </div>
    </div>
  )
}
