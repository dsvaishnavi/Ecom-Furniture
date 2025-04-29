export const CategoryList = () => { 
    return (
        <div className="flex flex-col items-center justify-center bg-[#f5e8d0] py-10">
        <h1 className="text-4xl font-bold text-[#917337] mb-6">Welcome</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg px-4">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-[#917337] mb-4">Category 1</h2>
            <p className="text-gray-700">Description for Category 1.</p>
            <img src="https://m.media-amazon.com/images/I/71IYyDFg3BL.jpg" alt="Category 1" className="mt-4 rounded-lg" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-[#917337] mb-4">Category 2</h2>
            <p className="text-gray-700">Description for Category 2.</p>
            <img src="https://www.eastlifestyle.in/cdn/shop/files/ClassicRoundDiningTable1657_6.jpg?v=1724765331" alt="Category 2" className="mt-4 rounded-lg" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-[#917337] mb-4">Category 3</h2>
            <p className="text-gray-700">Description for Category 3.</p>
            <img src="https://i.pinimg.com/736x/f6/18/14/f61814e61c58ff37067f52a6cf97f085.jpg" alt="Category 3" className="mt-4 rounded-lg" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-[#917337] mb-4">Category 4</h2>
            <p className="text-gray-700">Description for Category 4.</p>
            <img src="https://pritihome.com/wp-content/uploads/2024/05/4-9.webp" alt="Category 4" className="mt-4 rounded-lg" />
            </div>
        </div>
        </div>
    );
}   