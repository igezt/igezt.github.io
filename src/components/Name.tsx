import { createSignal } from "solid-js";

export const Name = (props: any) => {

    const upperCaseLetters = "1234567ABCDEFHKLMNORSTUVWXZ";
    const lowerCaseLetters = "1234567abcdefhklmnorstuvwxz";
    const randomise = (e: any) => {
        let iterations = 0;
        const interval = setInterval(() => {
            setName(name().split("")
            .map((letter, index) => 
                index + 1 <= iterations
                ? originalName[index]
                : letter == " "
                    ? " "
                    :letter == letter.toLowerCase()
                        ? lowerCaseLetters[Math.floor(Math.random() * 27)]
                        : upperCaseLetters[Math.floor(Math.random() * 27)])
            .join(""));

            iterations += 1/3;
            if (iterations >= originalName.length + 1) {
                clearInterval(interval);
                setName(originalName);
            }

            },
            30
        )
        
        
    }

    const originalName: string = props.name;

    const [name, setName] = createSignal(originalName);

    return (
        <h1 class="text-teal-200 text-9xl h-1/3 flex flex-row w-10/12" onMouseOver={randomise}>
            {name()}
        </h1>
    )
}