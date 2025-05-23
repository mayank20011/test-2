import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "./ErrorPage/ErrorPage";
import SpecificProductLoading from "./LoadingPage/SpecificProductLoading";
const SpecificProductPage = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const params = useParams();
    const [data, setData] = useState(location.state);
    useEffect(() => {
        if (data == null) {
            setLoading(true);
            axios.get(`https://fakestoreapi.com/products/${params.id}`)
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    setError(true);
                })
        }
    }, [])
    return (
        error ? <ErrorPage /> : data ?
            (<div className="min-h-screen w-full  py-6 md:py-8 lg:py-12 flex content-center items-center">
                <div className="custom-container flex gap-6 md:gap-12 bg-white flex-col md:flex-row">
                    <img src={data.image} className="w-full md:w-1/2 aspect-square" />
                    <div className="w-full md:w-1/2 flex flex-col gap-4 py-6 justify-center">
                        <h1 className="text-2xl md:text-3xl font-semibold">{data.title}</h1>
                        <p className="text-sm px-4 py-1 bg-slate-100 w-fit rounded-full">{data.category}</p>
                        <div className="flex items-end">
                            <p className="font-semibold">Rated By {data.rating.count - 1}+ Customers</p>
                            <p className="pl-6 pr-2 font-bold">{data.rating.rate}</p>
                            <i className="fa-solid fa-star text-yellow-300 text-4xl"></i>
                        </div>
                        <p className="">{data.description}</p>
                        <p className=""><span className="text-xl">$</span> {data.price}</p>
                    </div>
                </div>
            </div>) : <SpecificProductLoading />
    )
}

export default SpecificProductPage;