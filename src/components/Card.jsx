import { Button } from "./Button"
import PropTypes from "prop-types"
export const Card = (props) => {
  return (
    <>
      <div className='
      bg-white
      min-w-[250px] h-[220px]
      shadow-md
      mx-[20px]

      sm:min-w-0
      sm:w-[300px] sm:h-[240px]
      md:w-[180px] md:h-[200px]
      lg:w-[200px] lg:h-[220px]
      px-[8px] py-[8px]  border-2 flex justify-center  rounded-lg '>
        <div className="text-center   flex flex-col justify-between my-[20px] ">
          <div>
          <h2 className="font-bold text-2xl">Antrian</h2>
          <h2 className="font-bold text-6xl">{props.ticket_type}</h2>
          <div className="mb-[20px]"/>

          </div>
          <div className="text-center w-[100%] px-[10px] flex items-end">
            <Button onClick={props.onClick} className={"w-[100%] bg-primary-color text-[18px] shadow-md shadow-black  text-white"}>Cetak Tiket</Button>
          </div>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  ticket_type: PropTypes.string,
  ticket_description: PropTypes.string,
  onClick :PropTypes.func
}


