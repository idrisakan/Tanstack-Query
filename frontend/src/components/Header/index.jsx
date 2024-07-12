import Container from "../Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b">
      <Container designs='p-5 flex justify-between'>
        <div className="flex gap-10">
          <h1 className="font-bold text-xl">Tripster</h1>
          <nav className="flex gap-5 items-center">
            <Link to="/">Oteller</Link>
            <Link className="max-md:hidden" to="/">Popüler</Link>
            <Link to="/admin/create">Oluştur</Link>
          </nav>
        </div>
        <div className="flex gap-2 items-center">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">Kayıt ol</button>
          <button className="bg-blue-500 rounded-full py-1 px-5 text-white">Giriş yap</button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
