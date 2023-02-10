import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { FC } from "react";

type props = {
    message:string
}

const Error:FC<props> = ({ message }) => {
  return (
    <div className="flex items-center text-sm font-semibold text-red-500">
        <ExclamationCircleIcon className="w-5 h-5 mr-2" />
        {message}
    </div>
  );
}


export default Error;