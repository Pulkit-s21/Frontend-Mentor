import musicIcon from "../assets/images/icon-music.svg"
import datas from "../components/content.json"

const PlanBtn = () => {
  return (
    <div className="bg-secondary-vpblue rounded-lg flex justify-between p-4">
      <div className="flex flex-2 justify-evenly gap-6">
        {/* music icon */}
        <img className="w-10 h-12" src={musicIcon} alt="Music Icon" />
        {/* plan detials */}
        <div className="grid grid-cols-1">
          <p className="text-base md:text-lg text-secondary-darkBlue font-RedHat font-bold">
            {datas.plan_name}
          </p>
          <div className="text-base text-secondary-dblue font-RedHat">
            <p>
              {datas.price}/{datas.time_period}
            </p>
          </div>
        </div>
      </div>

      {/* btn */}
      <div className="flex flex-col justify-center items-end pr-2 underline">
        <a className="text-primary-bblue" href="/">
          Change
        </a>
      </div>
    </div>
  )
}

export default PlanBtn
