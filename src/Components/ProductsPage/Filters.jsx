import { useState } from "react";
import { useEffect } from "react";

const Filters = ({ categories, copyData, setFetchedData }) => {

    const [selectedFilter, setSelectedFilter] = useState([]);

    useEffect(() => {
        if (selectedFilter.length == 0) {
            setFetchedData(copyData);
        }
        else {
            let newDataArray = [];
            copyData.forEach((data) => {
                selectedFilter.forEach((category) => {
                    if (category == data.category) {
                        newDataArray.push(data);
                        return;
                    }
                })
            })
            setFetchedData(newDataArray);
        }
    }, [selectedFilter]);

    function handleClick(e) {
        if (e.target.checked) {
            setSelectedFilter([...selectedFilter, e.target.name]);
        }
        else {
            let newFiltersArray = selectedFilter;
            let findIndex;
            selectedFilter.forEach((category, index) => {
                if (category == e.target.name) {
                    findIndex = index;
                }
            })
            newFiltersArray.splice(findIndex, 1);
            setSelectedFilter([...newFiltersArray]);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <span className="lg:hidden self-end">
                <i className="fa-solid fa-x border p-2 rounded-md hover:scale-95 trnasition cursor-pointer closeMobileNavButton" />
            </span>
            <h1 className="font-bold text-xl">Categories</h1>
            <div className="flex flex-col gap-2">
                {categories.map((category, id) => (<div key={id} className="flex gap-2 items-center">
                    <input type="checkbox" name={category} className="" onChange={handleClick} />
                    <h6 className="">{category}</h6>
                </div>))}
            </div>
        </div>
    )
}

export default Filters;