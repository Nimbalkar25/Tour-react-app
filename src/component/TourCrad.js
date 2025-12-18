import { useState } from "react";

function TourCard({ id,image,name,info,price, removeTourCard }) {

    const [readmore, setReadmore] = useState(false);
    const description = readmore
        ? info
        : `${info.substring(0, 150)}... `

    function readmoreHandler() {
        setReadmore(!readmore);
    }



    return (
        <div className="w-[20rem] flex flex-col p-2 gap-3 rounded-md shadow-[rgba(0,0,0,0.35)_0px_5px_15px] ">

            <div className="w-full">
                <img className="w-full h-[280px]" src={image} alt="Taj Mahal" ></img>
            </div>

            <div className="flex flex-col   px-3">
                <h4 className="text-green-600 font-extrabold [font-size:1.5rem]">{price}</h4>
                <h4 className="font-bold text-2xl">{name}</h4>

            </div>
            <div className="px-3">
                {description}

                <span className="read-more text-blue-800" onClick={readmoreHandler}>
                    {readmore ? `show less` : `read more`}
                </span>
            </div>

            <div className="p-3 flex justify-center items-center" onClick={() => removeTourCard(id)}>
                <button className="p-3 bg-pink-200 border border-red-600 w-[200px] rounded-[0.5rem] h-[40px] flex items-center justify-center hover:bg-red-600 hover:text-white font-extrabold">Not Interested</button>
            </div>

        </div>
    );

}

export default TourCard;