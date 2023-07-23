/* eslint-disable react/prop-types */
export const RatingCard = (props) => {
  return (
    <div className={`flex justify-between p-4 ${props.bgclr} rounded-lg`}>
      <div className="flex gap-4">
        <img src={props.icon} alt={props.icon} />
        <p className={`${props.textclr} capitalize font-Hanken md:text-lg`}>{props.name}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-Hanken md:text-lg">{props.ratingScore}</p>
        <p className="text-gray-500 md:text-lg">/ 100</p>
      </div>
    </div>
  )
}
