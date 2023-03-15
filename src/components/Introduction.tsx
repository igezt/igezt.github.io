
import "../index.css";
import { Name } from "./Name";


export const Introduction = () => {

    
    const name = "Pierce Ng";

    return(
        <div class="h-auto min-h-96 flex-row w-screen flex introduction overflow-hidden">
            <div class="w-1/5 h-full ">
            </div>
            <div class="flex-col h-full flex w-full">
                <div class="h-1/5 htmltag">
                    {"<Introduction>"}
                </div>
                <h2 class="text-purple-800 text-2xl font-mono">
                    Hi there! My name is
                </h2>
                <Name name={name}/>
                <p class="font-mono text-purple-300 text-4xl">
                    Im an aspiring full-stack software engineer,
                    <br/>
                    looking to make an impact wherever I go
                </p>
                
            </div>
        </div>
    )

} 