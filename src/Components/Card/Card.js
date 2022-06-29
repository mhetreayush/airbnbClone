export default function({item}){
    let status;
    if (item.openSpots > 0){
        status = "Online"
    }
    else{
        status = "Sold Out"
    }
    return(
        <div className="m-3 inline-block border-2 rounded-lg">
<div className="w-fit bg-white rounded-lg flex flex-col shadow-md dark:bg-gray-800 gap-y-3 p-2 drop-shadow-md">
    <div className="self-center">
        <p className="relative z-5 top-10 left-3 bg-gray-200 text-black w-fit p-1 rounded-md">{status}</p>
    <a href={item.link}>
        <img className="rounded-t-lg block" id="cardImage" src={item.image} alt="product image" />
    </a>
    </div>
        <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/4000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className="bg-gray-700 text-white text-xs font-semibold mr-2 p-1 rounded dark:bg-blue-400 dark:text-blue-800 ml-3">{item.rating}</span>
            <span className="text-gray-400">({item.age})•{item.country}</span>
        </div>
        <div>
        <a href={item.link}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pr-5">{item.title}</h5>
        </a>
        </div>
        <div className="flex flex-col justify-between items-start text-center gap-y-3">
            <div>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">From ${item.price}</span>
                <span className="text-gray-400">/person</span>
            </div>
            <div className="w-full my-3 ">
                <a href={item.link} className="text-white bg-gray-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Add to cart</a>
            </div>
        </div>
</div>
</div>
    )
}