
import { XIcon } from "@heroicons/react/solid"
import Image from "next/image"

function Modal({img, setShowModal}) {
    const closeModal = (e) =>{
   setShowModal(false)
    }
    return (
        <div className="fixed top-0 left-0 h-screen w-screen  z-50 grid place-items-center" >
            <div className="absolute top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.8)]" onClick={closeModal} />
            <div className="relative h-96 w-96 border-8 bg-white">
            <Image src={img} layout="fill" />
            <XIcon className="absolute top-3 right-3 h-7 cursor-pointer hover:scale-110 transition ease-out "  onClick={closeModal}  />
            </div>
            
        </div>
    )
}

export default Modal
