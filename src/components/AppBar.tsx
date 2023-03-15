

export const AppBar = () => {

    return(
        <div class="w-full min-h-32 h-32 flex flex-row overflow-hidden m-5">
            <div class="w-1/2 text-zinc-500 justify-center items-center flex"/>
            <div class="w-1/6 h-full text-2xl text-zinc-500 justify-center items-center flex hover:text-cyan-500">
                <div class="font-serif text-center">
                    Introduction
                </div>
            </div>
            <div class="w-1/6 h-full text-2xl text-zinc-500 justify-center items-center flex hover:text-cyan-500">
                <div class="font-serif text-center">
                    Work Experience
                </div>
            </div>
            <div class="w-1/6 h-full text-2xl text-zinc-500 justify-center items-center flex hover:text-cyan-500">
                <div class="font-serif text-center">
                    Projects
                </div>
            </div>
        </div>
    )

} 