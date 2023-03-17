import { createEffect, createSignal } from "solid-js";
import "./../index.css";

export const Card = (props: any) => {

    const img = props.experience.image;
    const title = props.experience.title;
    const company = props.experience.company;
    const desc = props.experience.desc;
    const date = props.experience.date;

    const index = props.index();

    const animate = props.animate;

    createEffect(() => {
        console.log(animate());
    })

    const cardNumber = index + 1;
    return(
        <div>
            <div class={"card text-cyan-300 " + `card${animate() ? cardNumber + 'hover' : ''}`}>
                <img src={img} alt="ncc.png" class="m-auto"/>
                    <div class="py-3 px-5">
                        <h1 class="text-2xl text-cyan-500 underline font-mono text-left">
                            {company}
                        </h1>
                        <h1 class="text-1xl text-cyan-500 text-left">
                            {title}
                        </h1>
                        
                    </div>
            </div>
                    
        </div>
    );
}


{/* <img src={img} alt="ncc.png" class="m-auto"/>
                    <div class="py-3 px-5">
                        <h1 class="text-2xl text-cyan-500 underline font-mono text-left">
                            {company}
                        </h1>
                        <h1 class="text-1xl text-cyan-500 text-left">
                            {title}
                        </h1>
                        <br/>
                        <div class="text-1xl text-gray-500 text-left">
                            {desc}
                        </div>
                        <div class="text-1xl text-white text-left">
                            {date}
                        </div>
                    </div> */}