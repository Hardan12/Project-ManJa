import ListMenu from "../components/ListMenu";

export default function Sidebar() {
  return (
    <div className="min-h-screen w-64 bg-[#f6f2df] text-[#d2694f] flex flex-col items-center py-8 font-sans">
      {/* Logo ManJa */}
      <div className="mb-16">
        <img
          src="/Img/Logo.png"
          alt="Logo ManJa"
          className="h-20 w-auto object-contain"
        />
      </div>

      {/* List Menu */}
      <ListMenu />
    </div>
  );
}
