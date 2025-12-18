import { useState } from "react";
import Tours from "./component/Tours"
import data from "./data"


function App() {
  const [tours,setTours] = useState(data);

  function removeTourCard(id){
    const newtours = tours.filter(tour => tour.id !== id)
    setTours(newtours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh flex flex-col justify-center items-center h-[100vh] gap-2">
        <h2 className="text-black font-extrabold text-2xl">No Tours Left</h2>
        <button className="bg-gray-300 px-2 py-1 w-[200px] flex justify-center items-center " onClick={()=> setTours(data)}>Refresh</button>
      </div>
    );
  }
  return (
    <div >

      <Tours tours={tours} removeTourCard = {removeTourCard} ></Tours>
    </div>
  );
}

export default App;
