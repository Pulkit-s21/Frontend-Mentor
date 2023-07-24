/* eslint-disable react/prop-types */
export const Accordian = (props) => {
  return (
    <div className="border-b-2 border-dividers-lightGray grid grid-cols-1 gap-6 relative overflow-hidden text-left">
      <input
        className="
      peer
      w-full
      absolute
      top-0
      inset-x-0
      h-12
      cursor-pointer
      opacity-0
      "
        type="checkbox"
      />
      {/* ques */}
      <div className="text-secondary-vdarkGray peer-checked:text-primary-darkBlue transition-all duration-500">
        <h3 className="max-w-[25ch] md:max-w-[40ch] md:text-lg lg:max-w-[50ch] lg:text-xl">
          {props.ques}
        </h3>
      </div>
      {/* arrow */}
      <div className="absolute rotate-0 peer-checked:rotate-180 transition-all duration-500 top-0 right-3 text-primary-softRed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {/* ans */}
      <div className=" 
      overflow-hidden 
      transition-all 
      duration-500 
      max-h-0 
      peer-checked:max-h-40 
      text-secondary-darkGray
      lg:text-lg
      ">
          <p>{props.ans}</p>
      </div>
    </div>
  )
}
