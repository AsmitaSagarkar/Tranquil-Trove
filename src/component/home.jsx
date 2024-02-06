import Image from "./assets/home.png"
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Home(){
    return (

        <div className="bg-pink-200 h-screen grid grid-cols-2">
        {/* left portion*/}
        <div className="flex flex-col items-center mt-28  font-bold gap-5">
        <div><h2 className="text-2xl">New Arrivals only</h2></div>
        <div><h1 className="text-6xl text-center">New Collection for everyone</h1></div>
        <button className="text-2xl border-2 flex justify-center border-black rounded-full px-5 py-2">Latest Collection</button></div>
        
        <div className="flex justify-end w-[500px] h-[400px] mt-11">
        <img src={Image} alt = "Loading...." />
        </div>
        </div>

    )
}