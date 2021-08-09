import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <>
      <Header />
      <Note title="Test Title" content="Test Content" />
      <Footer />
    </>
  );
}

export default App;
