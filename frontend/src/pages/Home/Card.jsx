
import { Link } from 'react-router-dom';
import Availability from "../../components/Availability";


const Card = ({ place }) => {
  const color =
    place.rating >= 4
      ? "bg-green-500"
      : place.rating >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <Link to={`/place/${place.id}`} className="border rounded-md p-4 grid grid-cols-6  gap-3 min-h-[300px] cursor-pointer">
      <div className="col-span-2 ">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={place.image_url}
          alt=""
        />
      </div>
      <div className="col-span-4 flex flex-col justify-between">
        <div className=" flex flex-col gap-3">
          <div className="flex justify-between items-center">
             <h1 className="font-semibold text-2xl">{place.name}</h1>
          
            <Availability status={place.availability}/>
          </div>
         
          <p>{place.location}</p>
          <div className="flex gap-4">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span className="border p-1 rounded-md" key={key}>
                {i}
              </span>
            ))}
          </div>
          <p
            className={`${color} p-1 rounded-lg text-white font-semibold w-fit`}
          >
            {place.rating}
          </p>
          
        </div>
        <div className="self-end flex flex-col items-end">
          <span className="font-bold text-2xl">{place.price_per_night}$</span>
          <span className="text-xs text-gray-400">vergiler ve ücretler dahildir</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
