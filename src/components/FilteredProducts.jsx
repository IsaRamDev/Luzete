export default function ProductCard({ item, onClick }) {
  return (
    <div onClick={onClick} className="hover:scale-110 shadow-md mb-5 cursor-pointer">
      <img src={item.src} alt={item.name} className="w-full object-cover" />
      <div className="my-2 pl-4 text-sm">
        <p className="text-base">{item.name}</p>
        <p className="text-[#ff1654] font-bold">
          {item.price}
          <label className="ml-1 p-0.5 bg-[#ff1654] text-white">-30%</label>
        </p>
        <p className="font-extrabold line-through">{item.vendor}</p>
      </div>
    </div>
  );
}
