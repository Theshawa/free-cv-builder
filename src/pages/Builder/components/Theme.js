import { useEffect, useRef } from "react";

function Theme({ data, save }) {
    const primary = useRef()
    const secondary = useRef()
    const background = useRef()
    const reset = () => {
        primary.current.value = '#035afc'
        secondary.current.value = '#000a1c'
        background.current.value = '#ffffff'
    }
    useEffect(() => {

        primary.current.value = data.primary
        secondary.current.value = data.secondary
        background.current.value = data.background

    }, [data])
    const handleSubmit = (e) => {
        e.preventDefault()
        save(
            {
                primary: primary.current.value,
                secondary: secondary.current.value,
                background: background.current.value,
            }
        )
    }
    return (
        <div className="flex flex-col gap-8">
            <h1>Select Colors</h1>
            <form onSubmit={handleSubmit} className="  gap-8 flex flex-col" noValidate>
                <div className="gap-8 grid grid-cols-2">
                    <div className="flex items-center gap-2 p-4 b">
                        <span>Primary</span>
                        <input ref={primary} type="color" className="h-8 w-8 " />
                    </div>
                    <div className="flex items-center gap-2 p-4 b">
                        <span>Secondary</span>
                        <input ref={secondary} type="color" className="h-8 w-8 " />
                    </div>
                    <div className="flex items-center gap-2 p-4 b">
                        <span>Background</span>
                        <input ref={background} type="color" className="h-8 w-8 " />
                    </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                    <div onClick={reset} role="button" className="button-light h-max">Reset</div>
                    <button className="button h-max">Save</button>
                </div>
            </form>
        </div>
    );
}

export default Theme;