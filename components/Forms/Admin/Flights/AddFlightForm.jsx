import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AddFlightsForm() {
    const user = useSelector(state => state.userData.user);

    const AddFlight = async(e) => {
        e.preventDefault();
        const { access_token } = user;
        const form = new FormData(e.currentTarget);
        let values = {}
        for(var pair of form.entries()) {
            values[pair[0]] = pair[1];
        }
        let ClassArray = [
            {
                airlineClassName: values.airlineClassName,
                fare: values.fare,
                seats: {
                    total: values.total,
                    remaining: values.remaining
                }
            },
            {
                airlineClassName: values.airlineClassName2,
                fare: values.fare2,
                seats: {
                    total: values.total2,
                    remaining: values.remaining2
                }
            },
            {
                airlineClassName: values.airlineClassName3,
                fare: values.fare3,
                seats: {
                    total: values.total3,
                    remaining: values.remaining3
                }
            }
        ]
        try {
            const res = await axios.request({
                method: 'POST',
                url: 'http://localhost:5000/api/flights/addFlights',
                headers: {
                    "Authorization" : `Bearer ${JSON.parse(access_token)}`
                },
                data: {
                    flightId: values.flightId,
                    from: values.from.toLowerCase(),
                    to: values.to.toLowerCase(),
                    departureDate: values.departureDate,
                    arrivalDate: values.arrivalDate,
                    departureTime: values.departureTime,
                    arrivalTime: values.arrivalTime,
                    class: ClassArray,
                    pickupAirport: values.pickupAirport,
                    destinationAirport: values.destinationAirport,
                    aircraft: values.aircraft,
                    airline: values.airline,
                    airlineLogo: values.airlineLogo,
                    PAN: values.PAN,
                    DAN: values.DAN,
                    maxCapacity: values.maxCapacity
                }
            })
            toast.done('Flight Added!!');
        } catch (error) {
            console.log(error.message);
        }

    }
  return (
    <form onSubmit={AddFlight}>
      <div className="space-y-12 scroll-smooth">
      <div
        className="fixed inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[70deg] bg-gradient-to-bl from-[#80d7ff] to-[#fc8989] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">Flight Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Add flights using the form below</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="flightId" className="block text-sm font-medium leading-6 text-gray-900">
                Flight ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="flightId"
                  id="flightId"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="airline" className="block text-sm font-medium leading-6 text-gray-900">
                Airline
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="airline"
                  id="airline"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="airlineLogo" className="block text-sm font-medium leading-6 text-gray-900">
                Airline Logo URL
              </label>
              <div className="mt-2">
                <input
                  id="airlineLogo"
                  name="airlineLogo"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="from" className="block text-sm font-medium leading-6 text-gray-900">
                From
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="from"
                  id="from"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="to" className="block text-sm font-medium leading-6 text-gray-900">
                To
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="to"
                  id="to"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="departureDate" className="block text-sm font-medium leading-6 text-gray-900">
                Departure Date
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="departureDate"
                  id="departureDate"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="departureTime" className="block text-sm font-medium leading-6 text-gray-900">
                Departure Time
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="departureTime"
                  id="departureTime"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="arrivalDate" className="block text-sm font-medium leading-6 text-gray-900">
                Arrival Date
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="arrivalDate"
                  id="arrivalDate"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="arrivalTime" className="block text-sm font-medium leading-6 text-gray-900">
                Arrival Time
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="arrivalTime"
                  id="arrivalTime"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="PAN" className="block text-sm font-medium leading-6 text-gray-900">
                Pickup Airport Name (PAN)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="PAN"
                  id="PAN"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="DAN" className="block text-sm font-medium leading-6 text-gray-900">
                Destination Airport Name (DAN)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="DAN"
                  id="DAN"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="pickupAirport" className="block text-sm font-medium leading-6 text-gray-900">
                Pickup IATA code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pickupAirport"
                  id="pickupAirport"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="destinationAirport" className="block text-sm font-medium leading-6 text-gray-900">
                Destination IATA code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="destinationAirport"
                  id="destinationAirport"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="aircraft" className="block text-sm font-medium leading-6 text-gray-900">
                Aircraft
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="aircraft"
                  id="aircraft"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="maxCapacity" className="block text-sm font-medium leading-6 text-gray-900">
                Maximum Capacity
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="maxCapacity"
                  id="maxCapacity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
          </div>
          <div className="flex flex-col">
            <div className="my-6">
                <span className="text-lg font-medium">Class</span>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center gap-5">
                <div className="flex flex-col justify-center items-center w-fit h-fit border-2 rounded-xl p-3">
                    <div className="flex flex-col">
                        <label htmlFor="airlineClassName" className="block text-sm font-medium leading-6 text-gray-900">
                            Airline Class Name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="airlineClassName"
                            id="airlineClassName"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fare" className="block text-sm font-medium leading-6 text-gray-900">
                            Class Fare
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="fare"
                            id="fare"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="my-5 w-full text-left">
                        <span className="text-md font-medium">Seats</span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="ttotal" className="block text-sm font-medium leading-6 text-gray-900">
                            Total Seats
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="total"
                            id="total"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="remaining" className="block text-sm font-medium leading-6 text-gray-900">
                            Remaining Seats
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="remaining"
                            id="remaining"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-fit h-fit border-2 rounded-xl p-3">
                    <div className="flex flex-col">
                        <label htmlFor="airlineClassName2" className="block text-sm font-medium leading-6 text-gray-900">
                            Airline Class Name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="airlineClassName2"
                            id="airlineClassName2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="fare2" className="block text-sm font-medium leading-6 text-gray-900">
                            Class Fare
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="fare2"
                            id="fare2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="my-5 w-full text-left">
                        <span className="text-md font-medium">Seats</span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="total2" className="block text-sm font-medium leading-6 text-gray-900">
                            Total Seats
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="total2"
                            id="total2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="remaining2" className="block text-sm font-medium leading-6 text-gray-900">
                            Remaining Seats
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="remaining2"
                            id="remaining2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-fit h-fit border-2 rounded-xl p-3">
                    <div className="flex flex-col">
                        <label htmlFor="airlineClassName" className="block text-sm font-medium leading-6 text-gray-900">
                            Airline Class Name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="airlineClassName3"
                            id="airlineClassName3"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fare3" className="block text-sm font-medium leading-6 text-gray-900">
                            Class Fare
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="fare3"
                            id="fare3"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="my-5 w-full text-left">
                        <span className="text-md font-medium">Seats</span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="total3" className="block text-sm font-medium leading-6 text-gray-900">
                            Total Seats
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="total3"
                            id="total3"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="remaining3" className="block text-sm font-medium leading-6 text-gray-900">
                            Remaining Seats
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="remaining3"
                            id="remaining3"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 ">
        <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
          Reset
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
