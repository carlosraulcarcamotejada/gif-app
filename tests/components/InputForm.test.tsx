import { fireEvent, render,screen } from "@testing-library/react";
import React from "react";
import InputForm from '../../src/components/InputForm';



describe('Tests on <InputForm />', () => {

    const inputValue = 'pikachu';


    test('should change the input value on <InputForm />', () => { 
        const setGif = jest.fn;
        render(<InputForm setGif={setGif} />);

        const input = screen.getByRole<HTMLInputElement>('textbox');
        fireEvent.input(input,{target:{value:inputValue}});

        expect(input.value).toBe(inputValue);

     })


     test('should make the submit', () => { 

        const setGif = jest.fn((gif: string):void => {});
        render(<InputForm setGif={setGif} />);

        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.input(input,{target:{value:inputValue}});
        fireEvent.submit(form);
        expect(setGif).toHaveBeenCalled();
        expect(setGif).toHaveBeenCalledTimes(1);
        expect(setGif).toHaveBeenCalledWith(inputValue); 
      })
  
      test('shoulden\'t call the setGif function if the input is empty', () => { 

        const setGif = jest.fn((gif: string):void => {});
        render(<InputForm setGif={setGif} />);

        const form = screen.getByRole<HTMLFormElement>('form');
 
        fireEvent.submit(form);

        expect(setGif).not.toHaveBeenCalled();
        expect(setGif).toHaveBeenCalledTimes(0);

       })

 })