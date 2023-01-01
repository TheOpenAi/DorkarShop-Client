import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../../context/UserProvider';


const Modal = (props: any) => {
    const { modal, setModaldata } = props;
    const user = useContext(UserContext)

    const handelpayment = (e: any) => {
        e.preventDefault();
        const order = {
            name: user?.user?.name,
            email: user?.user?.email,
            productsId: modal._id,
            price: modal.price,

        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then((res) => res.json())
            .then((data) => {

                window.location.replace(data.url);

            })
            .catch((er) => console.error(er));

    };
    return (
        <><div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box">
                    {
                        user?.user?.email ? <>    <h1 className='text-xl text-black'> Product name :{modal.model} </h1>
                            <h1 className='text-xl '> <span className='text-green-600'> Price</span> : {modal.price}</h1>
                            <form className='grid grid-cols-1 gap-3 mt-10'>
                                <input type="text" placeholder='Your Name' defaultValue={user?.user?.name} disabled className="input w-full input-bordered" />

                                <input type="email" placeholder='Your Email' defaultValue={user?.user?.email} disabled className="input w-full input-bordered" />

                                <input type="number" placeholder=" Your Mobile Number" className="input w-full input-bordered" name="number" required />

                                <input type="text" placeholder=" Your Location" className="input w-full input-bordered" name="location" required />

                                <select name='currency' className="input w-full input-bordered text-gray-400">
                                    <option className='text-gray-800' disabled selected>Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                </select>


                                <input type="text" placeholder=" Your Post Code" className="input w-full input-bordered" name="postcode" required />


                                <br />
                                <input className='btn btn-accent w-full' type="submit" value="Payment Now" onClick={handelpayment} />
                                <input className='btn btn-info w-full' value="Cancel" onClick={() => setModaldata(null)} />
                            </form></> :
                            <>
                                <h1 className='text-2xl my-10'> Please Login to Order </h1>
                                <Link to={'/login'} className="text-white  
                                 bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 "> Login Now  </Link>
                                <input className='btn btn-info w-full mt-10' value="Cancel" onClick={() => setModaldata(null)} />
                            </>
                    }
                </div>
            </div>

        </div>
        </>
    );
};

export default Modal;