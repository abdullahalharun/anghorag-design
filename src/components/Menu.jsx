export default function Menu() {
    return <div className="flex justify-center border-y-[0.3px]  w-full">
        <div className="flex justify-between items-center h-[44px] w-[1084px]">
            <div className="flex justify-between items-center w-[242px] bg-[#F5CCDC] h-full px-4 ">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M1 1.06641H13" stroke="#471D6B" stroke-width="2" stroke-linecap="round" />
                        <path d="M1 6.00781H13" stroke="#471D6B" stroke-width="2" stroke-linecap="round" />
                        <path d="M1 10.9414H13" stroke="#471D6B" stroke-width="2" stroke-linecap="round" />
                    </svg>

                    <p className="text-xs font-semibold">Categories</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                        <path d="M1 0.753906L6.5 5.2437L12 0.753906" stroke="#471D6B" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <button className="bg-[#471D6B] px-4 h-[28px] text-white  rounded-[42px] text-xs font-semibold">Offers</button>
                <button className="bg-[#EB5A9A] px-4 h-[28px] text-white  rounded-[42px] text-xs font-semibold">Seller Picks</button>
                <button className="bg-[#471D6B] px-4 h-[28px] text-white  rounded-[42px] text-xs font-semibold">Campaign</button>
            </div>
        </div>
    </div>
}