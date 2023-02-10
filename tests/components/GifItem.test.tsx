import { render,screen } from "@testing-library/react";
import React from "react";
import GifItem from '../../src/components/GifItem';



describe('Tests on <GifItem />', () => { 
    
    const props = {
        title:'one punch man',
        img:'https://www.giphy.com/anime/one-punch-man.gif',
    }


    test('Snapshot on <GifItem />', () => { 
        const {container} = render(<GifItem {...props} />)
        expect(container).toMatchSnapshot()
     })

    test('should show an image', () => { 
        render(<GifItem {...props}/>);
        const {src, alt} = screen.getByRole<HTMLImageElement>('img');
        expect(alt).toBe(props.title);
        expect(src).toBe(props.img);
    })
 
 })