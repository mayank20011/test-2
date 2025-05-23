import axios from "axios";
import { useEffect, useState } from "react";
import LoadingProductsPage from "./LoadingPage/LoadingProductsPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import Filters from "../Components/ProductsPage/Filters";
import SearchBar from "../Components/ProductsPage/SearchBar";
import ProductsContainer from "../Components/ProductsPage/ProductsContainer";

const ProductPage = () => {

    const [loading, setLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);
    const [error, setError] = useState(false);
    const [copyData, setCopyData] = useState([]);
    const [category, setCategory] = useState([]);

    const fetchData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setLoading(false);
                setFetchedData(res.data);
                setCopyData(res.data);
                setCategory([... new Set(res.data.map(p => p.category))])
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
                console.log(err);
            })
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (
        loading ? <LoadingProductsPage /> : error ? <ErrorPage /> : (
            <div className="bg-neutral-100 relative">
                <div className="custom-container w-full min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 flex gap-6">
                    {/* for mobile screen */}
                    <div className="transition z-50 fixed lg:hidden bg-white p-4 w-1/2 max-w-[300px] top-0 left-0 min-h-screen -translate-x-full mobileDrawer">
                        <Filters copyData={copyData} setFetchedData={setFetchedData} categories={category} />
                    </div>

                    {/* for left category section */}
                    <div className="hidden lg:block w-1/2 max-w-[300px] lg:max-w-auto lg:w-1/5 overflow-y-auto bg-white p-4 rounded-md">
                        <Filters copyData={copyData} setFetchedData={setFetchedData} categories={category} />
                    </div>

                    {/* for right products and search options */}
                    <div className="w-full lg:w-4/5 flex flex-col gap-6">
                        <SearchBar copyData={copyData} setFetchedData={setFetchedData} />
                        <ProductsContainer fetchedData={fetchedData} />
                    </div>
                </div>
            </div>)
    )
}

export default ProductPage;