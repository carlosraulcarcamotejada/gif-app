import { FC } from 'react'
import useSWRInfinite from 'swr/infinite';
import { GiphyResp } from '../interfaces/GiphyResp';
import GifItem from './GifItem';


type props = {
  search:string,
}


const GifGrid:FC<props> = ({search}):JSX.Element => {

  const getKey = (pageIndex:number, previousPageData:GiphyResp) => {
    // reached the end
    if (previousPageData && !previousPageData.data) return null
  
    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return `https://api.giphy.com/v1/gifs/search?api_key=BESJEgV1fLea4mF8qnA4ydyMTQJv6TLt&q=${encodeURI(search)}&limit=2`
  
    // add the cursor to the API endpoint
    return `https://api.giphy.com/v1/gifs/search?api_key=BESJEgV1fLea4mF8qnA4ydyMTQJv6TLt&q=${encodeURI(search)}&limit=2&offset=${pageIndex*2}`
  }

  const {data=[], size, setSize} = useSWRInfinite<GiphyResp>(getKey);
  
  let total_items=0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i]?.data?.length; j++) {
      total_items += (data[i]?.data?.length)/2;
    }
  }

  return (
    <>
    <div className={`${data[0]?.data?.length===0&&'hidden'}  ml-2 dark:text-white text-black`}>{total_items} from {data[0]?.pagination?.total_count}</div>
    <div className='flex justify-center'>
      <div className='grid content-center gap-2 grid-cols-2 sm:grid-cols-3'>
        {
          data?.map( gifs => { 
            return gifs?.data?.map(({id,title,images:{downsized_medium:{url}}}) => {
              return (<GifItem key={id} title={title} img={url} />) }
          )})
        }

      </div>
    </div>
    <button onClick={()=>{setSize(size+1)}} className={`${data[0]?.data?.length===0&&'hidden'} py-1 mt-16 h-10 w-full text-white font-semibold  shadow-md
     hover:bg-indigo-500 active:bg-indigo-600 touch-none bg-indigo-600 cursor-pointer`}>Load more</button>
  </>
  )
}

export default GifGrid;

