import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
               heading="Trip In Indonesia"
               text="Indonesia is the largest country in Southeast Asia, with a maximum dimension from east to west of about 3,200 miles (5,100 km) and an extent from north to south of 1,100 miles (1,800 km). It shares a border with Malaysia "
                />

                <TripData 
                image={Trip2}
               heading="Trip In France"
               text="Indonesia is the largest country in Southeast Asia, with a maximum dimension from east to west of about 3,200 miles (5,100 km) and an extent from north to south of 1,100 miles (1,800 km). It shares a border with Malaysia "
                />


                <TripData 
                image={Trip3}
               heading="Trip In France"
               text="Indonesia is the largest country in Southeast Asia, with a maximum dimension from east to west of about 3,200 miles (5,100 km) and an extent from north to south of 1,100 miles (1,800 km). It shares a border with Malaysia "
                />
            </div>

        
    </div>
    );
}
export default Trip;