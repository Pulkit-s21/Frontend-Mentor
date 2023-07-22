import Card from "./Card"
import datas from "./content.json"
import sedan from "../assets/images/icon-sedans.svg"
import suvs from "../assets/images/icon-suvs.svg"
import luxury from "../assets/images/icon-luxury.svg"

const Major = () => {
  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-3
        "
    >
      <Card
        cartype={sedan}
        title={datas[0].title}
        description={datas[0].description}
        bgClr="bg-primary-bOrange"
        textClr="text-primary-bOrange"
        border="rounded-l-md"
      />

      <Card
        cartype={suvs}
        title={datas[1].title}
        description={datas[1].description}
        bgClr="bg-primary-dCyan"
        textClr="text-primary-dCyan"
      />

      <Card
        cartype={luxury}
        title={datas[2].title}
        description={datas[2].description}
        bgClr="bg-primary-vdCyan"
        textClr="text-primary-vdCyan"
        border="rounded-r-md"
      />
    </div>
  )
}

export default Major
