import { useQuery} from "@tanstack/react-query";
import { getPlaces } from "../../api";
import Card from "./Card";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { useSearchParams } from "react-router-dom";

const List = () => {
  //urldeki parametreleri al ve nesne haline getirir

  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  console.log(paramsObj)

  //places sorgusu
  const { isLoading, error, data } = useQuery({
    queryKey: ["places",paramsObj],
    queryFn: () => getPlaces(paramsObj),
    retry: 2,
  });

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınızdaki hedefler</h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} queryKey={"places"} />
        ) : (
          <div className="grid gap-5 mt-5">
            {data.places.map((place) => (
              <Card place={place} key={place.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
