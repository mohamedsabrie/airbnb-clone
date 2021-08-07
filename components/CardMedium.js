import { ArrowsExpandIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useState } from "react"
import Modal from "./Modal"

function CardMedium({img, title}) {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <div className="relative h-80 w-80 overflow-hidden rounded-xl ">
                <Image  src={img} layout="fill" className=" hover:scale-105  transition transform duration-300 ease-out" />
                <ArrowsExpandIcon className="absolute top-3 right-3 h-7 cursor-pointer" onClick = {() => setShowModal(true)} />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
            {showModal && <Modal img={img} setShowModal = {setShowModal} />}
            
            
        </div>
    )
}

export default CardMedium
