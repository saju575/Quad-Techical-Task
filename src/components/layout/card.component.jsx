const CardItem = ({ item }) => {
  //   return (
  //     <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  //       <div className="relative overflow-hidden bg-cover bg-no-repeat">
  //         <img className="rounded-lg shadow " src={item.ImageUrl} alt="" />
  //       </div>
  //     </div>
  //   );
  return (
    <div className="max-w-sm  overflow-hidden">
      <img
        className="w-full h-64 object-cover rounded-lg shadow"
        src={item.ImageUrl}
        alt="Card Image"
      />
      <div className="px-6 py-4 bg-transparent">
        <div className="mb-1 text-center">{item.Name}</div>
      </div>
    </div>
  );
};

export default CardItem;
