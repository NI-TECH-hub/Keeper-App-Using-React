import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

console.log(notes);

// function Info(nc){
//   return(
//     <Note
//         key = {nc.id}
//         Title ={nc.title}
//         Content={nc.content}
//     />
//   )
// }

function App() {
  return (
    <div>
      <Header />
      <Note
        Title="Hello React"
        Content="The first ever project is made by me in collabration with Angel Yu"
      />
      {notes.map((nc) => {
         <Note key={nc.id} Title={nc.title} Content={nc.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
