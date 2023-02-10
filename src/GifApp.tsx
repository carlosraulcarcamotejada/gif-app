import { FC, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import GifGrid from "./components/GifGrid";
import InputForm from "./components/InputForm";
import Spinner from "./components/Spinner";
import Error from "./components/Error";
import { SWRConfig } from "swr";
import fetcher from "./utilities/fetcher";

const GifApp: FC = () => {
  const [gif, setGif] = useState<string>('');


  return (
    <SWRConfig value={{ fetcher,suspense:true }}>
      <div className="bg-gray-50 dark:bg-black min-h-screen">
        <InputForm setGif={setGif} />
        <ErrorBoundary FallbackComponent={()=> <div className="h-screen flex justify-center items-center"><Error message="Could not fetch data in GifGrid component" /></div>}>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <Spinner />
              </div>
            }
          > 
            <div className="pt-32">
              <GifGrid search={gif} />
            </div>
            
          </Suspense>

        </ErrorBoundary>
      </div>
    </SWRConfig>
  );
};

export default GifApp;
