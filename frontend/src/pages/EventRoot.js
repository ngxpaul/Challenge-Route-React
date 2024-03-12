import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
function EventRoot(){
    return (
     <>
     <EventsNavigation />
        <Outlet />
     </>
    )
}
export default EventRoot;