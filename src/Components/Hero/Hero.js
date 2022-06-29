import photoGrid from "../../images/photoGrid.png"
export default function Hero(){
    return(
        <div className="flex flex-col items-center text-center text-black dark:text-white">
            <div>
            <img className="mb-4" src={photoGrid} />
            </div>
            <div className="my-5">
            <h1 className='text-3xl font-extrabold'>
                Online Experiences
            </h1>
            <p>
            Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
            </div>
        </div>
    )
}