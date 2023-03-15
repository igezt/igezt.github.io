import { For, createSignal } from "solid-js"
import { WorkCard } from "./WorkCard"


export const WorkExperience = () => {

    const [workExperience, setWorkExperience] = createSignal([
        {
            image:"src/assets/ncc.png",
            title: "Business Analyst Intern",
            company: "New Creation Church",
            desc: "Worked with a vendor to create an E-payment software system" +
            " to accommodate for over 60,000 people. Streamlined for large influx of money and budget procedural actions.",
            date: "May 2021 - Aug 2021"
        },
        {
            title: "Programming Tutor",
            company: "Computhink Kids SG",
            desc: "Taught coding and programming basics to students." +
            "Self-leadership observed by leading classes as a tutor.",
            date: "Jan 2023 - Mar 2023"
        },
        
    ])

    return(
        
        <div class=" h-screen w-full z-3 overflow-hidden flex flex-col px-64">
            <div class="w-screen h-1/5"/>
            
            <div class="text-cyan-200 text-3xl text-left">
                {"<Work Experience>"}
            </div>
            <div class="w-screen h-1/5"/>

            <For each={workExperience()}>
                {
                (experience, i) => <WorkCard experience={experience} index={i}/>
                }
            </For>
        
        </div>
    )

} 