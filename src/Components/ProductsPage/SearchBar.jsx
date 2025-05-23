import { useEffect } from "react";
const SearchBar = ({ copyData, setFetchedData }) => {

    useEffect(() => {
        const mobileDrawr = document.querySelector(".mobileDrawer");
        const hamburger = document.querySelector(".hamBurger");
        const closeMobileNavButton = document.querySelector(".closeMobileNavButton");
        hamburger.addEventListener("click", () => {
            mobileDrawr.classList.remove("-translate-x-full");
        })
        closeMobileNavButton.addEventListener("click", () => {
            mobileDrawr.classList.add("-translate-x-full");
        })
    }, [])

    function handleSearch(e) {
        if (e.target.value.trim() == "") {
            setFetchedData(copyData);
        }
        else {
            const textToBeSearched = e.target.value.trim().toLowerCase();
            const filteredSearchResult = copyData.filter((data) =>
                data.title.toLowerCase().includes(textToBeSearched) || data.description.toLowerCase().includes(textToBeSearched) || data.category.toLowerCase().includes(textToBeSearched)
            )
            setFetchedData(filteredSearchResult);
        }

    }

    return (
        <div className="bg-white px-4 py-4 flex gap-4 items-center rounded-md">
            <span className="block lg:hidden cursor-pointer hamBurger">
                <i className="fa-solid fa-bars"></i>
            </span>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="outline-none grow" placeholder="Search product ..." onChange={handleSearch} />
        </div>
    )
}

export default SearchBar;