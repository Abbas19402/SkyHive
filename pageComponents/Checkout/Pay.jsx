import Icon from '@/components/Icons'
import Table from '@/components/Table'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const CheckoutPage = ({ ticket }) => {
  const router = useRouter();
  const reportTemplateRef = useRef(null);
  const { outbound , inbound } = ticket
  const { ticket_id , passengers , seats } = outbound.data.data

  const user = useSelector(state => state.userData.user)
  const flight = useSelector(state => state.Flights.savedFlight)
  const bookingId = useSelector(state => state.ticket.bookingId)
  const returnFlight = useSelector(state => state.Flights.savedReturnFlight)
  const AirlineClass = {
    outbound: useSelector(state => state.airlineClass.outboundClass),
    inbound: useSelector(state => state.airlineClass.inboundClass)
  }

  const [ paymentStatus , setPaymentStatus ] = useState(false);
  const [ payment , setPayment ] = useState({})
  const [ loading , setLoading ] = useState(false);

  const Print = () =>{  
    var divContents = document.getElementById("ticket").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<head><script src="https://cdn.tailwindcss.com"></script></head>')
    a.document.write('<body>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    setTimeout(()=> {
      a.print();
      setTimeout(()=> {
        router.push('/').then(()=> {
          router.reload()
        })
      },1000)
    },1000)
    a.document.close();
  }

  const TaxImplied = (cost, airlineClass) => {
    if(airlineClass.airlineClassName.toLowerCase() == 'economy') {
      let taxCost = cost * 5 / 100 * passengers.length
      return taxCost
    } else {
      let taxCost = cost * 12 / 100 * passengers.length
      return taxCost
    }
  }

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async (amount) => {
    setLoading(true)
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await axios.request({
      method: 'POST',
      url: 'https://skyhive-admin.vercel.app/api/payment/create_order/razorpay',
      data: {
        amount: amount*100,
        currency: 'INR'
      }
    })
    var options = {
      key: 'rzp_test_bFpwx4nReUKQwF', // Enter the Key ID generated from the Dashboard
      name: "SkyHive Inc",
      currency: data.data.currency,
      amount: amount*100,
      order_id: data.data.id,
      description: "Thankyou for booking your flight",
      image: "https://i.ibb.co/MkSRpbn/Sky-Hive-Logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        setPayment({
          user_id: data.data.user_id,
          order_id: response.razorpay_order_id,
          transaction_id: response.razorpay_payment_id,
          booking_id: bookingId
        })
        SavePayment({
          user_id: data.data.user_id,
          order_id: response.razorpay_order_id,
          transaction_id: response.razorpay_payment_id,
          booking_id: bookingId
        })
      },
      prefill: {
        name: "SkyHive",
        email: "skyhive@gmail.com",
        contact: "6375935703",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const SavePayment = async(payment) => {
    try {
      const payResponse = await axios.request({
        method: 'POST',
        url: 'https://skyhive-admin.vercel.app/api/payment/store_transaction/razorpay',
        data: {
          user_id: user.email,
          order_id: payment.order_id,
          transaction_id: payment.transaction_id,
          booking_id: bookingId,
        }
      })
      toast.success('Payment Successfull!!')
      setPaymentStatus(true)
      setLoading(false)
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    } 
  }

  const Cost = () => {
    let totalFareInReturn = 0
    if(AirlineClass.inbound !== null) {
      totalFareInReturn = parseInt(AirlineClass.inbound.fare) * passengers.length
    };

    let totalFare = parseInt(AirlineClass.outbound.fare) * passengers.length;
    let finalFare = 0 , tax = {
      outgoing: 0,
      returning: 0
    };
    if(AirlineClass.inbound) {
      tax.outgoing = TaxImplied(totalFare , AirlineClass.outbound);
      tax.returning = TaxImplied(totalFareInReturn , AirlineClass.outbound)
      finalFare = totalFare + totalFareInReturn + tax.outgoing + tax.returning
    } else {
      tax.outgoing = TaxImplied(totalFare , AirlineClass.outbound)
      finalFare = totalFare + tax.outgoing;
    }
    return { 
      outgoingFare: parseInt(AirlineClass.outbound.fare) * passengers.length,
      totalFare: totalFare + totalFareInReturn , 
      returnFare: totalFareInReturn ,
      tax: tax , 
      finalFare: finalFare
    }
  }

  return (
    flight !== {} && (
      <div className="w-full h-full lg:px-40 px-5 md:px-16 py-16 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center w-full h-20 border-2 px-5 gap-x-5">
          <span className="text-lg md:text-xl md:tracking-wide font-medium">{paymentStatus ? 'Download your Ticket' : `Pay ₹ ${Cost().finalFare}` }</span>
          {paymentStatus ? <button className='bg-neutral-800 px-5 py-2 text-gray-300 font-medium tracking-wider rounded' onClick={()=> Print()}>Download</button> : <button className='bg-neutral-800 px-5 py-2 text-gray-300 font-medium tracking-wider rounded' onClick={()=> {
            makePayment(Cost().finalFare)
          }}>
            <div className="w-full h-full flex flex-row justify-around items-center gap-x-2">
                {loading? <div className='animate-spin'>
                    <Icon.Loader />
                  </div> : <Icon.Pay className="h-5 w-5 fill-gray-300"/>}
              <span className='uppercase'>
                Pay
              </span>
            </div>
          </button>}
          
        </div>
        <div id="ticket" className="w-full h-full border-2 border-black hidden" ref={reportTemplateRef}>
          <div className="w-full h-fit min-h-[100vh] flex flex-col justify-between items-center p-5">
            <div className="w-full flex flex-row justify-between items-center mb-5">
              <div className="p-3 h-full flex justify-start items-start">
                <span className="text-5xl">SkyHive</span>
              </div>
              <div className="flex flex-col justify-center items-end max-w-sm w-full h-20">
                <span className="text-md tracking-wide font-bold">
                  SkyHive Inc.
                </span>
                <span className="text-md tracking-wide font-medium">
                  1330 Harvest Lane
                </span>
                <span className="text-md tracking-wide font-medium">
                  New York, NY 12210
                </span>
              </div>
            </div>

            {/* Flight Details */}
            <div className="flex flex-col justify-start items-start w-full">
              <div className="border border-black flex flex-col justify-start items-start">
                <span className="text-md">Ticket ID:</span>
                <span className="text-2xl uppercase font-bold tracking-wide">
                  {ticket_id}
                </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-x-2 mb-5">
                  <span className="font-bold tracking-wide">Booking Date: </span>
                  <span className="tracking-tight font-medium capitalize">
                    {new Date().toUTCString()}
                  </span>
                </div>
              <div className="w-full">
                <Table.TicketFlightDetails
                  flightId={flight.flightId}
                  flight={flight}
                  selectedClass={AirlineClass.outbound}
                  type={"Outbound"}
                />
              </div>

              <div className="my-5 w-full">
                <Table.Passengers
                  passengers={passengers}
                  seats={seats}
                  AirlineClass={AirlineClass.outbound}
                />
              </div>
            </div>
            {AirlineClass.inbound && (
              <div className="flex flex-col justify-start items-start w-full mt-5">
                <div className="w-full">
                  <Table.TicketFlightDetails
                    flightId={returnFlight.flightId}
                    flight={returnFlight}
                    selectedClass={AirlineClass.inbound}
                    type={"Inbound"}
                  />
                </div>

                <div className="my-5 w-full">
                  <Table.Passengers
                    passengers={passengers}
                    seats={inbound.data.data.seats}
                    AirlineClass={AirlineClass.inbound}
                  />
                </div>
              </div>
            )}
            <div className="w-full flex flex-col">
              <table className="w-fit text-sm text-left text-gray-500 rounded-lg overflow-hidden">
                <tr className="text-xs text-gray-700 uppercase bg-gray-200 ">
                  <th scope="col" className="px-6 py-3">
                    Meals
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Maximum Baggage Allowance
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Maximum Hand Baggage
                  </th>
                </tr>
                <tr className="bg-white border-b ">
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">
                    20Kg/30Kg (Domestic/International)
                  </td>
                  <td className="px-6 py-4">8Kgs</td>
                </tr>
              </table>

              <div className="Cost">
              <div className="flex flex-col justify-start items-center border-b border-gray-900/10 my-10 pb-5 w-full">
            <div className='flex flex-col justify-start items-center w-full'>
              <div className="flex flex-row justify-between items-center w-full mb-2">
                <span className="text-black font-[400] text-base">Fare (Outbound + Inbound):</span>
                <span className="text-black font-bold text-sm">₹ {Cost().totalFare}</span>
              </div>
              <div className="flex flex-row justify-between items-center w-full mb-2">
                <span className="text-black font-[400] text-base">Tax (Outbound + Inbound):</span>
                <span className="text-black font-bold text-sm">₹ {Cost().tax.outgoing + Cost().tax.returning}</span>
              </div>
              <div className="flex flex-row justify-between w-full border-t-4 border-b-4 border-black">
                <span className="text-black font-bold text-base">Total Fare</span>
                <span className="text-black font-bold text-base tracking-wider">₹ {Cost().finalFare}</span>
              </div>
            </div>
          </div>
              </div>
              <div className="flex flex-col text-sm py-5">
                <div className="flex flex-col my-2">
                  <span className="font-bold">
                    Important Information About your flight
                  </span>
                  <p>
                    Visit www.skyhive.com to check your flight times. If you
                    don't have an account, you'll have to create one. Then use
                    your last name and booking number to log in.
                  </p>
                  <p>
                    This country requires APIS information (Advanced Passenger
                    Information System) for passengers visiting the country. For
                    security reasons, passport number and contact information
                    must be given to the airline before departure. You can give
                    the information at the airport check-in. Get your APIS form
                    by clicking here »
                  </p>
                </div>
                <div className="flex flex-col my-2">
                  <span className="font-bold">
                    Passport and visa/transit visa
                  </span>
                  <p>
                    Remember to take your passport and any visas or transit
                    visas you need with you when you travel. If you have not
                    already done so, you should check the rules that apply for
                    passports and visas/transit visas for the countries you are
                    visiting, both with the embassy and your operating airline.
                    For full information, we recommend you contact the Ministry
                    of Foreign Affairs website by clicking here »
                  </p>
                </div>
                <div className="flex flex-col my-2">
                  <span className="font-bold">Baggage Information</span>
                  <p>
                    The indicated baggage allowed for each flight is usually the
                    maximum allowed per airline. You should check the exact
                    baggage terms and conditions for the airlines in your order.
                  </p>
                  <p>
                    <b>Important!</b> When you purchase hold baggage on flights
                    within North America, you receive a free check-in service.
                    To avoid further fees, we recommend that you print out the
                    boarding card before you travel to the airport.
                  </p>

                  <p>
                    Important communication: We’re looking to make your travel
                    less stressful and will send emails with information
                    relevant for your trip, including for example offers to add
                    baggage or book seating at attractive prices. The offers
                    will only be sent prior to your trip. If you do not want to
                    receive these emails, click here.
                  </p>
                </div>
                <div className="flex flex-col my-2">
                  <ul className="list-disc list-inside">
                    <span className="font-bold">
                      As a traveller you are responsible for:
                    </span>
                    <li>
                      Checking for any timetable changes for both the outward
                      and homeward journeys. Sometime airlines may change their
                      times and it is your responsibility to stay updated
                    </li>
                    <li>
                      Checking that all the information in your booking is
                      accurate. If anything is incorrect, contact us as soon as
                      possible.
                    </li>
                    <li>
                      Bringing a valid passport and any visa/transit visa that
                      you may have when you travel.
                    </li>
                    <li>
                      Making sure you know about the exact luggage terms both
                      for hand luggage and checked luggage directly from the
                      relevant airline.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col my-2">
                  <span className="font-bold">
                    You’ll soon be on your way! Before that, four questions
                  </span>
                  <p>
                    Have you checked your spam folder? We send all our
                    communications by email, so keep a careful eye on your spam
                    folder to make sure that our emails don’t end up there
                  </p>
                </div>
                <div className="flex flex-col my-2">
                  <p>
                    <b>Have you booked a hotel?</b> If so, you must print out
                    that confirmation along with your hotel voucher as well as
                    this confirmation.
                  </p>
                  <p>
                    Do you want to cancel your booking or is there something
                    wrong in this confirmation? If your departure is before our
                    next telephone time, please contact the airline, hotel
                    provider or rental car provider directly.
                  </p>

                  <p>
                    Have you booked a round-trip ticket or one-way ticket with
                    several segments? Make sure to use them in sequence. If not,
                    many airlines will refuse transport on subsequent segments
                    (i.e., failure to use one segment of a journey could
                    invalidate the rest of the ticket). For round-trip tickets,
                    not taking your outbound flight may result in your inbound
                    flight being cancelled by the airline
                  </p>
                  <p>
                    Gotogate is shown on your bank statement as recipient of
                    payment. Gotogate cannot accept responsibility for any costs
                    in connection with unplanned overnight stays, transport in
                    the event of a change of airport or similar situations. You
                    can find travel conditions and FAQs at www.gotogate.co.uk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CheckoutPage