const Input = ({ value, onChange }) => {
  return (
    <div className="shadow-md w-1/4 rounded-md">
      <input
        type="text"
        placeholder="Search Your issue"
        className="py-3 font-lg px-2  rounded-md w-full"
      />
    </div>
  );
};

export default Input;
