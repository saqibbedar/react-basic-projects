import React from "react";
import Card from "./components/card";
import Card2 from "./components/card2";

const App = () => {
  const obj = {
    cardTitle: "Hello, world",
    cardDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia veritatis itaque placeat, ducimus quam dolor ipsum. Eligendi quisquam obcaecati iure minus animi, reprehenderit saepe adipisci officiis incidunt accusamus quia?",
    cardBtnValue: "Click Here",
  };
  return (
    <>
      <div className="bg-sky-500 rounded  m-8 p-8 text-3xl font-semibold text-white text-center">
        Hello world
      </div>

      <Card obj={obj}/>
      
      <Card2 focusBar="xyz" mainTitle="Hello, world" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia veritatis itaque placeat..."  btnValue="Close"/>
    </>
  );
};

export default App;
