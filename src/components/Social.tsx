import { FiPhone } from "react-icons/fi"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdOutlineEmail } from "react-icons/md"


const Social = () => {
    return (
        <div className="fixed bottom-5 z-50 right-4 grid gap-y-2">
                <a
                    href="tel:+14373762702"
                    className="bg-gray-200 flex items-center justify-center p-3 text-xl rounded-full text-black"
                >
                    <FiPhone />
                </a>
                <a href="mailto:info@redscleaning.org" className="bg-gray-200 flex items-center justify-center p-3 text-xl rounded-full text-black">
                    <MdOutlineEmail />
                </a>
                <a
                    href="https://wa.me/14379074600"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 flex items-center justify-center p-3 text-xl rounded-full text-white"
                >
                    <IoLogoWhatsapp />
                </a>
        </div>
    )
}

export default Social