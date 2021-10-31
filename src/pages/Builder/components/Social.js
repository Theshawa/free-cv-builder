import { useEffect, useRef, useState } from "react"





const Social = ({ data, save, remove }) => {
    const [active, setActive] = useState(true)
    const name = useRef(null)
    const link = useRef(null)

    const saveData = (e) => {
        e.preventDefault()
        setActive(false)
        save({
            name: name.current.value,
            link: link.current.value,
            id:data.id
        })
    }
    useEffect(() => {
        name.current.value = data.name || ''
        link.current.value = data.link || ''
    }, [data])
    return (
        <div className=" b bg-light bg-opacity-30 flex flex-col w-full">
            <button onClick={() => setActive(true)} className="p-8 flex items-center justify-between text-xl gap-4"><span>{(name.current && name.current.value) || `Profile ${data.id}`}</span> {!active && <span>✏️</span>}</button>
            <form onSubmit={saveData} className={`${active ? 'flex' : 'hidden'} flex-col gap-8 px-8 pb-8`}>
                <div className="flex flex-col gap-8">
                    <input required ref={name} type="text" className="input" placeholder="Name*" />
                    <input required ref={link} type="url" className="input" placeholder="Link*" />
                    <div className="flex flex-col gap-4">
                        <span>Level of Skill</span>
                    </div>

                </div>
                <div className="flex gap-4 overflow-x-auto">
                    <div role="button" className="button-light" onClick={() => remove(data.id)}>Remove</div>
                    <button className="button">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Social