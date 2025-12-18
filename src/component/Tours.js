import TourCard from "./TourCrad";

function Tours({tours,removeTourCard}) {
    return (

        <div className="flex flex-col  gap-8 mt-5 p-4 justify-center items-center ">
            <div className=" flex justify-center  " >
                <h2 className="font-extrabold text-5xl border-4 border-dashed  border-blue-900 px-9 py-4 rounded-lg">Plan With Love</h2>
            </div>

            <div className="flex gap-3 justify-center  flex-wrap w-[80%]">
                {
                    tours.map((tour)=> {
                        return <TourCard key={tour.id}  {...tour} removeTourCard={removeTourCard}>
                        </TourCard>
                    })
                }
            </div>
        </div>

    );
}

export default Tours;