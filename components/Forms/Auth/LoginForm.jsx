import React from 'react'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUser } from '@/Redux/Auth/AT'

const LoginForm = ({ loginStatus , setLoginStatus , setShowModal }) => {
    const dispatch = useDispatch();
    const login = async(e) => {
        console.log(e);
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        let values = {};
        for (var pair of form.entries()) {
            values[pair[0]] = pair[1];
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username: values.username,
                password: values.password
            })
            dispatch(getUser(response.data.data))
            setShowModal(false)
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div>
        <form onSubmit={login} className="flex flex-col justify-start items-center h-fit ">
            <div className="w-full h-[10vh]">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <span className="text-4xl tracking-wide ">Login</span>
                    <span className="text-sm font-medium text-sky-700">Welcome back!</span>
                </div>
            </div>
            <div className="h-[70%] w-full p-8">
                <div className="flex flex-col gap-y-4 w-full h-full">
                    <div className="flex flex-col justify-around items-start gap-y-2">
                        <label htmlFor='username' className="text-md text-gray-800 font-medium tracking-wide">Username</label>
                        <input type="text" name="username"  className="w-full border-2 p-1 rounded-md"/>
                    </div>
                    <div className="flex flex-col justify-around items-start gap-y-2">
                        <label htmlFor='password' className="text-md text-gray-800 font-medium tracking-wide">Password</label>
                        <input type="password" name="password"  className="w-full border-2 p-1 rounded-md"/>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between my-5">
                    <div className="flex items-center" onClick={()=> {
                        setLoginStatus(!loginStatus)
                    }}>
                        <span className="ml-2 block font-medium text-sm text-gray-900 hover:text-sky-700 hover:cursor-pointer">
                            Not a member?
                        </span>
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
                    Login
                </button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm