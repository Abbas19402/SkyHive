import Modal from "@/components/Modal";
import Table from "@/components/Table";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const GetAllUsers = () => {
  const [user, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ bookings , setBookings ] = useState([]);
  const [ confirmedDeleteUser, setConfirmedDeleteUser ] = useState(false);

  const userData = useSelector(state => state.userData.user);

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

  const DeleteUser = async( email ) => {
    try {
      const { data } = await axios.request({
        method: 'POST',
        url: 'https:/skyhive-admin.vercel.app/api/users/deleteUser',
        headers: { 'Authorization' : `Bearer ${JSON.parse(userData.access_token)}` },
        data: {
          email: email
        }
      })
      console.log(data);
      toast.done("User Deleted")
    } catch(err) {
      console.log(err);
      if(err.response.status == 401) {
        toast.error('Your session has expired!!');
      } else {
        toast.error('Something went wrong while deleting user.. Try again!!')
      }
      
    }
  }

  useEffect(() => {
    if(user.length == 0) {
      GetAllUsers();
    }
  }, [user]);
  return (
    <div className="px-5 py-5 md:px-10 lg:py-10 lg:px-32">
      <div className="mb-6">
        <span className="text-5xl underline-offset-4 underline tracking-wide font-light text-gray-600">
          All Users
        </span>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table.UserTable 
          user={user} 
          setShowModal={setShowModal} 
          showModal={showModal} 
          GetBookings={GetBookings} 
          DeleteUser={DeleteUser} 
          confirmedDeleteUser={confirmedDeleteUser}
        />
      </div>
      <Modal.DeleteUser 
        showModal={showModal} 
        setShowModal={setShowModal} 
        confirmedDeleteUser={confirmedDeleteUser} 
        setConfirmedDeleteUser={setConfirmedDeleteUser}
        DeleteUser={DeleteUser}
      />
    </div>
  );
};

export default GetAllUsers;
