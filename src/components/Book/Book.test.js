import Book from "./Book";
import { render, screen, fireEvent } from '@testing-library/react';
import { addToProductList } from './Book'
describe('BookComponent', () => {
// #1 test­ing whether Book com­po­nent is re­ceiv­ing prop from Book­List Compo­nent. 
it('receives props', () => {
    const {rerender} = render(<Book name="Java"/>);
    expect(screen.getByTestId('bookName')).toHaveTextContent('Java')
    rerender(<Book name="Typescript"/>);
    expect(screen.getByTestId('bookName')).toHaveTextContent('Typescript')
})
// #2 Test whether ‘Add to Read­ing List’ of Book Com­po­nent is work­ing well
it('should update the array on change event', () => {
    render(<Book/>);
    const bookName = "Java"
    expect(addToProductList(bookName)).toStrictEqual(["Java"])
  })

it('should not update the array if parameter is not passed', () => {
    render(<Book/>);
    expect(addToProductList()).toStrictEqual(["Java"])
})

it('should not update the array if empty string is passed', () => {
    render(<Book/>);
    expect(addToProductList("")).toStrictEqual(["Java"])
})
})