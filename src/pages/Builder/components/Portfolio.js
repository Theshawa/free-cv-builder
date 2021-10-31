import { useEffect, useRef } from "react"

const Portfolio = ({ link, save }) => {
    const linkRef = useRef(null)

    const saveData = (e) => {
        e.preventDefault()
        save(linkRef.current.value)
    }
    useEffect(() => {
        linkRef.current.value = link || ''
    }, [link])
    return (


        <form onSubmit={saveData} className={`flex flex-col gap-8 w-full `}>
            <input ref={linkRef} type="url" className="input" placeholder="Link*" />

            <button className="button">Save</button>

        </form>

    )
}

export default Portfolio