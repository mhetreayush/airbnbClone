import photoGrid from "../../images/photoGrid.png"
export default function Hero(){
    return(
        <div className="flex flex-col items-center text-center text-black">
            <div>
            <img className="mb-4" src={photoGrid} />
            </div>
            <div className="my-5">
            <h1 className='text-3xl font-extrabolddark:text-white'>
                Online Experiences
            </h1>
            <p className='dark:text-white'>
            Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
            </div>
        </div>
    )
}