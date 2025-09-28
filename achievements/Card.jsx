function Card() {
  return (
    <div className="w-[300px] h-[400px] bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center justify-center">
      <img
        src=""
        alt="Certificate"
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">Certificate Title</h2>
        <p className="text-gray-600 text-sm mt-2">Short description here</p>
      </div>
    </div>
  );
}

export default Card;
