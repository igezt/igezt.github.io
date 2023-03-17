import { For, createSignal } from "solid-js";
import { WorkCard } from "./WorkCard";
import { Card } from "./Card";


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
            image:"src/assets/computhink.png",
            title: "Programming Tutor",
            company: "Computhink Kids SG",
            desc: "Taught coding and programming basics to students.",
            date: "Jan 2023 - Mar 2023"
        },
        {
            image:"",
            title: "Coming Soon",
            company: "Coming Soon",
            desc: "Coming Soon",
            date: "Coming Soon"
        },
        {
            image:"",
            title: "Coming Soon",
            company: "Coming Soon",
            desc: "Coming Soon",
            date: "Coming Soon"
        }
    ]);

    const [animate, setAnimate] = createSignal(false);

    const toggleAnimate = (e:any) => {
        setAnimate(!animate());
    }

    const setAnimateTrue = (e:any) => {
        setAnimate(true);
    }

    const setAnimateFalse = (e:any) => {
        setAnimate(false);
    }

    return(
        
        <div class="h-full w-screen outline flex flex-col">
            
            <div class="text-cyan-200 text-3xl text-left w-full mx-48 my-24">
                {"<Work Experience>"}
            </div>
        

            <div class="experienceCards z-0 flex flex-row justify-center">

                <div class="cardGroup" onMouseEnter={setAnimateTrue} onMouseLeave={setAnimateFalse}>
                
                    <For each={workExperience()}>
                        {
                        (experience, i) => <Card experience={experience} index={i} animate={animate}/>
                        }
                    </For>
                    <div class="card">
                        Work Experience
                    </div>
                </div>
            </div>
            
            
        </div>
    )

} 