import { FC, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

type props = {
  setGif: (gif: string) => void
};

const InputForm: FC<props> = ({ setGif }): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    if (inputValue.trim().length < 1) return;
    e.preventDefault();
    setGif(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed w-full">
      <form aria-label="form" className="relative bg-gradient-to-r from-pink-400 to-blue-400 w-full h-21  shadow-md" onSubmit={handleSubmit}>
        <div className="font-semibold text-white text-2xl h-10 pt-2 ml-3">Giphy App</div>
        <div className="group flex justify-center items-center py-4">
          <input
            className="py-1 px-1 w-80 rounded-l-md shadow-sm focus:shadow-md border-none focus:outline-none "
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Search"
          />
          <button className="top-3 p-2 rounded-r-md  focus:outline-none  shadow-sm bg-fuchsia-500 group-focus-within:shadow-md" type="submit">
            <SearchIcon className="text-gray-100 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
