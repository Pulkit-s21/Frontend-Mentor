/* eslint-disable react/prop-types */
export const LinkBtn = (props) => {
  return (
    <div className="flex flex-col">
      <a
        className="text-white hover:text-white font-bold bg-gray-600 p-2 rounded-md"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        {props.site}
      </a>
    </div>
  )
}
