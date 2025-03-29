export default function Button({label}) {

    return(
        <div className="flex justify-center items-center ">
            <button className="text-white bg-primary py-3 px-5 border-6 border-double border-amber-50 rounded-2xl font-semibold cursor-pointer hover:bg-orange-500 min-w-[170px] font-display">{label}</button>
        </div>
    );

}