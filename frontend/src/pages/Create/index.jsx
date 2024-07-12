import { addPlace } from "../../api";
import Container from "../../components/Container";
import { inputs } from "../../constans";
import InputField from "./InputField";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  //post isteği için mutasyon oluştur
  const mutation = useMutation({
    mutationKey: ["add"],
    mutationFn: (data) => addPlace(data),
    //istek başarılı olursa
    onSuccess: () => {
      toast.success("Konaklama oluşturuldu");
      navigate("/");
    },
    //İSTEK BAŞARISIZ OLURSA
    onError: () => {
      toast.error("işlem başarısız oldu");
    },
  });

  //form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();
    //formlardaki verileri al ve nesne çevir
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    // özellikleri diziye çevir
    data.amenities = data.amenities.split(",");

    // müsait değerini boolean olarak ayarla
    data.availability = data.availability ? true : false;

    //api ye istek at
    mutation.mutate(data);
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-5"
      >
        {inputs.map((props, key) => (
          <InputField key={key} {...props} />
        ))}

        <button
          disabled={mutation.isPending}
          className="bg-blue-500 border rounded-md py-2 px-6 transition hover:bg-blue-600 font-bold text-white disabled:bg-blue-300"
        >
          Oluştur
        </button>
      </form>
    </Container>
  );
};

export default Create;
