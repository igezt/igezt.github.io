import { createSignal } from "solid-js";
import "./../index.css";

export const WorkCard = (props: any) => {

    const img = props.experience.image;
    const title = props.experience.title;
    const company = props.experience.company;
    const desc = props.experience.desc;
    const date = props.experience.date;

    const [flip, setFlip] = createSignal(props.index() % 2 == 0);

    console.log(flip());

    return(
        <div>
            {flip() ? (
                <div class="flex flex-row hidden">
                    <div class="w-52 h-full"/>
                    <div class="w-full h-52 my-10 p-2 rounded-2xl flex flex-row bg-gray-800 border-double border-cyan-500 border">
                        <div class="py-3 px-5">
                                <h1 class="text-3xl text-yellow-500 underline font-mono text-right">
                                    {company}
                                </h1>
                                <h1 class="text-2xl text-cyan-500 text-right">
                                    {title}
                                </h1>
                                <br/>
                                <div class="text-1xl text-white text-right">
                                    {desc}
                                </div>
                                <div class="text-1xl text-white text-right">
                                    {date}
                                </div>
                        </div>
                        <img src={img} alt="ncc.png" class="h-48 w-48"/>
                    </div>
                </div>
            ) : (
                <div class="flex flex-row hidden">
                    <div class="w-full h-52 my-10 p-2 rounded-2xl flex flex-row bg-gray-800">
                        <img src={img} alt="ncc.png" class="h-48 w-48"/>
                        <div class="py-3 px-5">
                        <h1 class="text-3xl text-cyan-500 underline font-mono text-left">
                                        {company}
                                    </h1>
                                    <h1 class="text-2xl text-cyan-500 text-left">
                                        {title}
                                    </h1>
                                    <br/>
                                    <div class="text-1xl text-gray-500 text-left">
                                        {desc}
                                    </div>
                                    <div class="text-1xl text-white text-left">
                                        {date}
                                    </div>
                        </div>
                    </div>
                    <div class="w-52 h-full"/>
                </div>
            )}
        </div>
    );
}