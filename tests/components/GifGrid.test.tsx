import { render, waitFor } from "@testing-library/react";
import React, { Suspense } from "react";
import GifGrid from "../../src/components/GifGrid";
import Spinner from "../../src/components/Spinner";



describe("Tests on <GifGrid />", () => {

  const search = "one punch man";

  test("Should render <GifGrid />", async() => {


    await waitFor(async() => {
        await render( 
        <Suspense fallback={<Spinner/>}>
            <GifGrid search={search} />
        </Suspense>
        );
      }
      );
   
  });


  
});
