const Card = ({ title, src }) => {
  return (
    <div className="border-2 py-2 rounded-md flex flex-col items-center justify-center">
      <div>
        {/* image contgainer */}
        <img src={src} className="w-28" />
      </div>
      <div className="mt-4">
        {/* card title */}
        <p className="capitalize font-lg">{title}</p>
      </div>
    </div>
  );
};

export default Card;
