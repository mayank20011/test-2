const SpecificProductLoading = () => {
    return (
        <div className="min-h-screen w-full  py-6 md:py-8 lg:py-12 flex content-center items-center bg-neutral-100">
            <div className="custom-container flex gap-6 md:gap-12 flex-col md:flex-row">
                <div className="w-full md:w-1/2 aspect-square bg-neutral-500 rounded-md animate-pulse" ></div>
                <div className="w-full md:w-1/2 flex flex-col gap-4 py-6 justify-center">
                    <h1 className="text-2xl md:text-3xl font-semibold bg-neutral-500 animate-pulse w-full h-[50px] rounded-md"></h1>
                    <p className="text-sm px-4 py-1 bg-neutral-500 animate-pulse rounded-full  h-[20px] w-1/5"></p>
                    <div className="flex items-end">
                        <p className="font-semibold bg-neutral-500 w-3/5 h-[20px] rounded-md animate-pulse"></p>
                        <p className="pl-6 pr-2 font-bold bg-neutral-500 w-1/5 h-[20px] ml-4 rounded-md animate-pulse"></p>
                        <p></p>
                    </div>
                    <p className="bg-neutral-500 animate-pulse w-full h-[200px]"></p>
                    <p className="bg-neutral-500 animate-pulse h-[20px] w-[50px] rounded-md"></p>
                </div>
            </div>
        </div>
    )
}

export default SpecificProductLoading;