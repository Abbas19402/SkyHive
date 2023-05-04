import Modal from "@/components/Modal";
import Table from "@/components/Table";
import axios from "axios";
import React, { useEffect, useState } from "react";

const GetAllUsers = () => {
  const [user, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ bookings , setBookings ] = useState([]);

  const GetAllUsers = async() => {
    try {
      const { data } = await axios.request({
        method: "GET",
        url: "https://skyhive-admin.vercel.app/api/users/allUsers",
      });
      setUsers(data.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  const GetBookings = async(uid) => {
    try {
      const { data } = await axios.request({
        method: "GET",
        url: `https://skyhive-admin.vercel.app/api/users/bookings/${uid}`,
      });
      console.log(data.bookings);
      setBookings(data.bookings);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    GetAllUsers();
  }, [user]);
  return (
    <div className="px-5 py-5 md:px-10 lg:py-10 lg:px-32">
      <div className="mb-6">
        <span className="text-5xl underline-offset-4 underline tracking-wide font-light text-gray-600">
          All Users
        </span>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table.UserTable user={user} setShowModal={setShowModal} showModal={showModal} GetBookings={GetBookings}/>
      </div>
      <Modal.UserBooking showModal={showModal} setShowModal={setShowModal} bookings={bookings}/>
    </div>
  );
};

export default GetAllUsers;
