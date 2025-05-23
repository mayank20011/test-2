import { Link } from "react-router-dom";
const ProductsContainer = ({ fetchedData }) => {
    return (
        <div className="bg-white p-4 overflow-y-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {fetchedData.map((data) => (
                <Link key={data.id} to={`/${data.id}`} className=" rounded-md p-2 hover:scale-101 transition hover:shadow-md flex flex-col gap-4" state={data}>
                    <img src={data.image} className="w-full aspect-square" />
                    <div className="flex flex-col gap-2 grow">
                        <h4 className="text-xs font-bold text-neutral-700 line-clamp-2">{data.title}</h4>
                        <div className="grow flex items-center justify-between">
                            <p className="text-xs px-2 rounded-md bg-slate-100 w-fit">{data.category}</p>
                            <p className="px-2 rounded-md bg-neutral-100"><span className="text-sm font-bold">$</span><span className="pl-1 text-xs">{data.price}</span></p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsContainer