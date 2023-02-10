import { motion } from 'framer-motion';
import { FC } from 'react'

type props = {
    title:string,
    img:string,
}

const GifItem:FC<props> = ({title='',img}):JSX.Element => {

  // console.log(title);
  // console.log(img);

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4}}
    className='h-44 w-44 rounded-md shadow-md mb-8'>
        <h5 className='truncate text-white'>{title}</h5>
        <img className='h-44 w-44 object-cover rounded-b-md' src={img} alt={title} />
    </motion.div>
  )
}

export default GifItem;