import React, { useState } from "react";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icons";

const PassengerForm = ({ savePassenger }) => {
  let category = ["Infant", "Child", "Adult"];
  const [selectedItem, setSelectedItem] = useState("");
  const [addStatus, setAddStatus] = useState(false);
  const setPassenger = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    let values = {};
    form.append("category", selectedItem);
    for (var pair of form.entries()) {
      values[pair[0]] = pair[1];
    }
    savePassenger(values);
    setAddStatus(true);
  };
  return (
    <form onSubmit={setPassenger}>
      <div className="mb-6 mt-2 flex flex-col justify-start items-center border-2 py-2 px-2 rounded-lg w-full">
        <div className="flex flex-col md:flex-row flex-wrap gap-4 ">
          <div className="w-[80vw] md:w-[20vw]">
            <Dropdown.FormDD
              label={"Category"}
              dataItems={category}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div className="w-[80vw] md:w-[20vw]">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="w-[80vw] md:w-[20vw]">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-[80vw] md:w-[20vw]">
            <label
              htmlFor="age"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Age
            </label>
            <div className="mt-2">
              <input
                id="age"
                name="age"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="w-[80vw] md:w-[20vw]">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center w-full mt-3 px-1">
          <button
            type="submit"
            className="rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2 "
          >
            {addStatus ? (
              <div className="flex flex-row justify-between items-center gap-x-1.5">
                <Icon.Check className="fill-white h-5 w-5" />
                <div className="h-5">Added</div>
              </div>
            ) : (
              <div className="flex flex-row justify-between items-center gap-x-1.5">
                <Icon.AddUser className="fill-white h-5 w-5" />
                <div className="h-5">Add</div>
              </div>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PassengerForm;
