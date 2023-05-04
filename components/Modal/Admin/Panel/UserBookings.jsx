import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Forms from "@/components/Forms";

const UserBooking = ({ setShowModal , showModal, bookings }) => {

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setShowModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-x-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full w-[35rem] md:w-full md:max-w-6xl  sm:max-w-2xl">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                        <tr className="text-center">
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                S. No.
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Flight No.
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Class
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Departure
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Arrival
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Departure Time
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Arrival Time
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Booking ID
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                Ticket ID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((item, index) => (
                        <tr key={index} className="bg-white border-b text-center">
                            <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                            {index + 1}
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap">{item.flight.flightId}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.seats ? (item.seats[0].number.includes('e') ?
                                'Economy' : item.seats[0].number.includes('b') ?
                                'Business': item.seats[0].number.includes('pe') ?
                                'Premium Economy': item.seats[0].number.includes('f') &&
                                'First Class'
                            ) : ''}</td>
                            <td className="px-6 py-4">{item.flight.departureDate}</td>
                            <td className="px-6 py-4">{item.flight.arrivalDate}</td>
                            <td className="px-6 py-4">{item.flight.departureTime}</td>
                            <td className="px-6 py-4">{item.flight.arrivalTime}</td>
                            <td className="px-6 py-4">{item._id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.ticket_id}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default UserBooking;
