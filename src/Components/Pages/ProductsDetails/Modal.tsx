import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../../context/UserProvider';


const Modal = (props:any) => {
   const { modal,setModaldata } = props;
    const user = useContext(UserContext)

    return (
        <><div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h1 className='text-xl text-black'> Product name : {modal.model} </h1>
                    <h1 className='text-xl '> <span className='text-green-600'> Price</span> : {modal.price}</h1>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" defaultValue={user?.user?.name} disabled className="input w-full input-bordered" />
                        <input type="email" defaultValue={user?.user?.email} disabled className="input w-full input-bordered" />
                        <input type="text" placeholder=" Your Moblie Number" className="input w-full input-bordered" name="number" required />
                        <input type="text" placeholder=" Your Location" className="input w-full input-bordered" name="location" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Payment Now" />
                        <input className='btn btn-info w-full' value="Cancel" onClick={()=>setModaldata(null)} />
                    </form>
                </div>
            </div>
        </div>
        </>
         );
    };

export default Modal;