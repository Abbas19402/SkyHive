import Auth from "./Auth"
import UserBooking from "./Admin/Panel/UserBookings";
import ConfirmDeleteFlight from "./Admin/Panel/ConfirmDeleteFlight";
import ConfirmDeleteUser from "./Admin/Panel/ConfirmDeleteUser";

const Modal = {
    Auth,
    UserBooking,
    DeleteFlight: ConfirmDeleteFlight,
    DeleteUser: ConfirmDeleteUser
}

export default Modal