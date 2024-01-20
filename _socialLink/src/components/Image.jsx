import Profile from "../assets/profile.png"

export const Image = () => {
  return (
    <div className="flex justify-center">
      <img className=" w-28 rounded-full" src={Profile} alt="Profile Image" />
    </div>
  )
}
