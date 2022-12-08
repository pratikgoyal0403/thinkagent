import Input from "../Commons/Input/Input";

const SearchComponent = () => {
  return (
    <div className="w-full py-4  flex flex-col items-center justify-end px-2 bg-gray-50">
      <img src="/images/logo.jpeg" className="w-32" />
      <h1 className="text-red-500 font-semibold text-2xl my-6">
        How Can we help you?
      </h1>
      <Input />
    </div>
  );
};

export default SearchComponent;
