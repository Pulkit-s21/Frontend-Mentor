import Avatar from "../assets/Avatar.webp"

export const Profile = () => {
  return (
    <div className="text-black flex gap-2 items-center">
      <img src={Avatar} alt="Profile Pic" className=" w-10" />
      <p className="font-bold">Greg Hooper</p>
    </div>
  )
}
