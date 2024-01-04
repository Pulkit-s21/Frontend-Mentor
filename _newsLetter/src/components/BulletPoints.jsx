/* eslint-disable react/prop-types */
import icon from "../assets/icon-list.svg"

export const BulletPoints = (props) => {
  return (
    <ol className="flex gap-2">
      <img className="w-4 md:w-6" src={icon} alt="Bullet points" />
      <li className={`text-sm md:text-lg text-left`}>{props.update}</li>
    </ol>
  )
}
