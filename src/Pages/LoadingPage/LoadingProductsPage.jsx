const LoadingProductsPage = () => {
    return (
        <div className="bg-neutral-100">
            <div className="custom-container w-full min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 flex gap-6">
                <div className="hidden lg:block p-4 w-1/5 bg-neutral-500 animate-pulse min-h-screen">
                    <div className="bg-neutral-500 animate-pulse hidden lg:w-1/5 border"></div>
                </div>
                <div className="w-full lg:w-4/5 flex flex-col gap-6">
                    <div className="bg-neutral-500 w-full h-[50px] animate-pulse"></div>
                    <div className="bg-neutral-500 grow animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingProductsPage;