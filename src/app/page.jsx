import Generator from "@/app/components/Generator";
import Preview from "@/app/components/Preview";

const Home = () => {


    return (
        <div className="text-white flex justify-center items-center gap-8 h-full w-full">
            <div className="w-2/6 h-full">
                <Generator />
            </div>
            <div className="w-3/6 h-full">
                <Preview />
            </div>
        </div>
    )
}


export default Home