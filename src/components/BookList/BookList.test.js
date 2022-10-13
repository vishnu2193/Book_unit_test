import BookList from "./BookList";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("BookListComponent", () => {
  //# 3 Have a right Book­List com­po­nent snap­shot
  it("has right booklist component snapshop", () => {
    const snapshotJSON = renderer.create(<BookList />);
    expect(snapshotJSON).toMatchSnapshot();
  });

  // #4 Test whether Book­List com­po­nent has the fol­low­ing text in it. ‘Wel­come to My Fa­vorite Book Por­tal’
  it("has Welcome to My Favorite Book Portal!", () => {
    render(<BookList />);
    const welcomeText = screen.getByText("Welcome to My Favorite Book Portal");
    expect(welcomeText).toBeInTheDocument();
  });
});
