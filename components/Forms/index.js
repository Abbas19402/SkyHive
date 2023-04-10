import SearchFlights from "./Search";
import LoginForm from "./Auth/LoginForm";
import SignupForm from "./Auth/SignupForm";
import ProfileForm from "./Profile";
import ContactForm from "./Contact";
import AddFlightsForm from "./Admin/Flights/AddFlightForm";
import PassengerForm from "./Booking/PassengerForm";
import FlightDetailForm from "./Booking/FlightDetailForm";
import BookingDetails from "./Booking/BookingDetails";

const Forms = {
    SearchFlights,
    SignupForm,
    LoginForm,
    ProfileForm,
    ContactForm,
    AddFlightsForm,
    BookingDetails,
    booking: {
        main: BookingDetails,
        passenger: PassengerForm,
        flight: FlightDetailForm
    }
}

export default Forms