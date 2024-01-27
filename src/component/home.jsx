import Image from "./assets/home.png"

export default function Home(){
    return (

        <div className="bg-pink-200 h-screen grid grid-cols-2">
        {/* left portion*/}
        <div className="flex flex-col justify-center items-center">
        <div><h2>New Arrivals only</h2></div>
        <div><h1>New Collection for everyone</h1></div>
        <button>Latest Collection </button></div>
        
        <div className="flex justify-center items-center">
        <img src={Image} alt = "Loading...." />
        </div>
        </div>

    )
}