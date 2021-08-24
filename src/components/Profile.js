import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import BookingCard from "./bookingCard";



function Profile() {


    const [bookings, setBookings] = useState([]);


    const username =useState( localStorage.getItem("username"))
    const userId = localStorage.getItem("userId")
    const email = localStorage.getItem("userEmail")
    const role = localStorage.getItem("role")
    const token = localStorage.getItem("jwt")
    const history = useHistory();


    useEffect(() => {

        console.log(userId)

        const fetchData = async () => {
            const response = await axios.get(`https://corneliabookingbackend.herokuapp.com/bookings?users_permissions_user.id=${userId}`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    }
                })


            setBookings(response.data);
        };
        console.log(bookings);

        fetchData();
    }, [token, bookings, userId]);



    const [fileData, setFileData] = useState();

    function OnChange(e) {
        setFileData(e.target.files[0])
    }

    async function fileUpload(e) {

        axios.post("http://localhost:1337/users", {


        }).then((res) => {

            console.log(res.data)

            const data = new FormData();

            data.append("files", fileData)
            data.append("ref", "product")
            data.append("refId", res.data.id)
            data.append("field", "img")

            axios.post("http://localhost:1337/upload", data)
                .then((image) => console.log(image))
                .catch((error) => console.log(error))

        }).catch((err) => {
            console.log(err)

        })
    }



    const modalInitialValues = {
        username: "",
        email: ""
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [updateFormValues, setUpdateFormValues] = useState(modalInitialValues);

    const customStyles = {
        content: {
            background: "white",
            top: '20%',
            left: '47%',
            right: 'auto',
            bottom: 'auto',
            width: '40%',
            transform: 'translate(-40%, -10%)'
        }
    };

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }


    useEffect(() => {
        axios.get(`http://localhost:1337/users/${userId}`
            ,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(res => {
                setUpdateFormValues({
                    username: res.data.username,
                    email: res.data.email
                })
            })
    }, [token, userId])


    function handleOnChange(e) {
        e.preventDefault();

        setUpdateFormValues({ ...updateFormValues, [e.target.name]: e.target.value })
        console.log(updateFormValues.username, updateFormValues.email)
    }



    async function handleOnSubmit(e) {
        e.preventDefault();

        await axios.put(`http://localhost:1337/users/${userId}`, {
            username: updateFormValues.username,
            email: updateFormValues.email

        }).then((response) => {
            console.log(response)

            updateFormValues(response)

        }).catch((error) => {

            console.log(error)
            window.location.reload();
        })
    }


    function deleteProfile() {


        try {

            const deleteUser = axios.delete(`http://localhost:1337/users/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            console.log("deleted user", deleteUser)
            history.push("/registration");


        }

        catch (error) {
            console.log("Couldn't delete your profile", error.data)
        }


    }




    return (


        <div class="md:grid grid-cols-4 grid-rows-2  bg-white gap-2 p-4 rounded-xl">
            <div class="md:col-span-1 h-58 shadow-xl  ">
                <div class="flex w-full h-full relative">
                    <div>
                        <form onSubmit={fileUpload}>
                            <input type="file" name="file" onChange={OnChange} />
                            <button>Upload a profile picture</button>
                        </form>
                    </div>

                </div>
            </div>
            <div class="md:col-span-3 h-58 shadow-xl p-4 space-y-2 p-3">
                <div class="flex ">
                    <span
                        class="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Name:</span>
                    <h1
                        class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                        type="text">{username}</h1>
                </div>
                <div class="flex ">
                    <span
                        class="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Email:</span>
                    <h1
                        class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                        type="text">{email}</h1>
                </div>
                <div class="flex ">
                    <span
                        class="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">Role:</span>
                    <h1
                        class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                        type="text">{role}</h1>
                </div>

                <button class="flex justify-center text-gray-800 px-4 py-1 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
                    onClick={openModal}>
                    Update Profile
                        </button>
                <button class="flex justify-center text-gray-800 px-4 py-1 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
                    onClick={deleteProfile}>
                    Delete Profile
                        </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Edit Modal">

                <div class="bg-white lg:w-5/6 md:6/12 w-10/12 m-auto my-10 shadow-md">
                    <div class="py-8 px-8 rounded-xl">
                        <button onClick={closeModal}>X</button>
                        <h1 class="font-medium text-2xl mt-3 text-center">Update User: {username}</h1>
                        <form action="" class="mt-6" onSubmit={handleOnSubmit} method="POST">
                            <div class="my-5 text-sm">
                                <label class="block text-black">Username:</label>
                                <input type="text" id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="username"
                                    value={updateFormValues.username}
                                    name="username"
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div class="my-5 text-sm">
                                <label class="block text-black">E-mail:</label>
                                <input type="text" id="lastname" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="email"
                                    value={updateFormValues.email}
                                    name="email"
                                    onChange={handleOnChange}
                                />
                            </div>


                            <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Confirm</button>
                        </form>

                    </div>
                </div>

            </Modal>

            <h3 class="font-bold uppercase flex justify-center"> Booked classes: </h3>

            <div class="  flex flex-row flex-wrap justify-center justify-evenly">


                {bookings.map((booking) => {
                    return (
                        <BookingCard key={booking.id} bookingId={booking.id} firstname={booking.firstname} lastname={booking.lastname} bookedClass={booking.class} />
                    )
                })}

            </div>
        </div>











    )
}

export default Profile;
