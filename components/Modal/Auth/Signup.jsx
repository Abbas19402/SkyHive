import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from '@heroicons/react/20/solid'

const Signup = ({ loginStatus , setLoginStatus , setShowModal , showModal }) => {
  const [open, setOpen] = useState(true);

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form className="flex flex-col justify-start items-center h-fit ">
                    <div className="w-full h-[10vh]">
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <span className="text-4xl tracking-wide ">Signup</span>
                            <span className="text-sm font-medium text-sky-700">Create your free account</span>
                        </div>
                    </div>
                    <div className="h-[70%] w-full p-8">
                        <div className="flex flex-col gap-y-4 w-full h-full">
                            <div className="flex flex-col justify-around items-start gap-y-2">
                                <label className="text-md text-gray-800 font-medium tracking-wide">Email Address</label>
                                <input type="text" name="email"  className="w-full border-2 p-1 rounded-md"/>
                            </div>
                            <div className="flex flex-col justify-around items-start gap-y-2">
                                <label className="text-md text-gray-800 font-medium tracking-wide">Username</label>
                                <input type="text" name="email"  className="w-full border-2 p-1 rounded-md"/>
                            </div>
                            <div className="flex flex-col justify-around items-start gap-y-2">
                                <label className="text-md text-gray-800 font-medium tracking-wide">Password</label>
                                <input type="text" name="email"  className="w-full border-2 p-1 rounded-md"/>
                            </div>
                            <div className="flex flex-col justify-around items-start gap-y-2">
                                <label className="text-md text-gray-800 font-medium tracking-wide">Confirm password</label>
                                <input type="text" name="email"  className="w-full border-2 p-1 rounded-md"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between my-5">
                            <div className="flex items-center">
                                <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-white hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-neutral-500 group-hover:text-neutral-400" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Signup;
