import hero from "../assets/images/illustration-woman-online-mobile.svg"
import { Accordian } from "./Accordian"
import datas from "./content.json"

export const Major = () => {
  return (
    <div
      className="
    max-w-[25em]
    md:max-w-[30em]
    lg:max-w-[55em]
    flex 
    flex-col 
    lg:flex-row 
    bg-white 
    place-items-center 
    rounded-2xl 
    shadow-secondary-vdarkGray 
    shadow-xl
    p-4
    "
    >
      <img
        className="
      w-52
      md:w-80
      lg:w-96 
      relative 
      -top-20 
      lg:top-0 
      lg:-left-16
      "
        src={hero}
        alt={hero}
      />
      <div className="grid grid-cols-1 gap-2 text-center">
        <h2 className="font-Kumbh text-primary-darkBlue text-4xl mb-4 lg:text-5xl">
          FAQ
        </h2>
        <Accordian ques={datas[0].ques1} ans={datas[0].ans1} />
        <Accordian ques={datas[1].ques2} ans={datas[1].ans2} />
        <Accordian ques={datas[2].ques3} ans={datas[2].ans3} />
        <Accordian ques={datas[3].ques4} ans={datas[3].ans4} />
        <Accordian ques={datas[4].ques5} ans={datas[4].ans5} />
      </div>
    </div>
  )
}
