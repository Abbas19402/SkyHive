import React , { useState } from "react";
import Dropdown from "@/components/Dropdown";

const PassengerForm = ({ savePassenger }) => {
    let category = [ "Infant" , "Child" , "Adult" ]
    const [ selectedItem , setSelectedItem ] = useState('')
    const setPassenger = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        let values = {}
        form.append('category' , selectedItem);
        for(var pair of form.entries()) {
            values[pair[0]] = pair[1];
        }
        savePassenger(values);
    }
  return (
    <form onSubmit={setPassenger}>
        <div className="mt-10 flex flex-col justify-start items-center border-2 py-2 px-2 rounded-lg">
        <div className="flex flex-row flex-wrap justify-around gap-4 ">
            <div className="w-[20vw]">
                <Dropdown.FormDD label={'Category'} dataItems={category} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            </div>
            <div className="w-[20vw]">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                First name
            </label>
            <div className="mt-2">
                <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="w-[20vw]">
            <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Last name
            </label>
            <div className="mt-2">
                <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="w-[20vw]">
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
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="w-[20vw]">
            <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Country
            </label>
            <div className="mt-2">
                <input
                type="text"
                name="country"
                id="country"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="w-[40vw]">
                <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Address
                </label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="w-[20vw]">
            <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                State / Province
            </label>
            <div className="mt-2">
                <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="w-[20vw]">
                <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    ZIP / Postal code
                </label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </div>
        <div className="flex justify-end items-center w-full mt-3 px-1">
            <button
            type="submit"
            className="rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2"
            >
            Add
            </button>
        </div>
        </div>
    </form>
  );
};

export default PassengerForm;
