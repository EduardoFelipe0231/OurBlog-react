import { Banner } from "./Banner"

export function Navbar(){
    return(
        <div className="w-full flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-black">Our Blog</h1>
            <p className="text-zinc-600 font-normal">A Gateway to Insighftul Stories and Expertise, Unveiling a Tapestry of Ideas and Inspiration.</p>
            <Banner />
        </div>
    )
}