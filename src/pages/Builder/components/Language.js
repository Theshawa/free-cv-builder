import { useEffect, useRef, useState } from "react"

const Ball = ({makeActive,children,active}) => {
    return (
        <div role="button" onClick={makeActive} className={`w-8 h-8 ${active ? ' bg-primary text-light' : 'text-primary'} border-2 border-primary flex items-center justify-center  rounded-full`}>
            {children}
        </div>
    )
}

const LanguageLevel = ({setLevel,level}) => {
    const levels = ['Beginner','Intermediete','Expert','Pro']
    return (
        <div className="flex gap-4 items-center">
            <div className="flex gap-4">
                <Ball makeActive={()=>setLevel(1)} active={level===1}>1</Ball>
                <Ball makeActive={()=>setLevel(2)} active={level===2}>2</Ball>
                <Ball makeActive={()=>setLevel(3)} active={level===3}>3</Ball>
                <Ball makeActive={()=>setLevel(4)} active={level===4}>4</Ball>
            </div>
            <span >I'm a {levels[level-1]}</span>
        </div>
    )
}

const Language = ({ data, save, remove }) => {
    const [active, setActive] = useState(true)
    const name = useRef(null)
    const [level, setLevel] = useState(1)

    const saveData = (e) => {
        e.preventDefault()
        setActive(false)
        save({
            name: name.current.value,
            level: level,
            id:data.id
        })
    }
    useEffect(() => {
        name.current.value = data.name || ''
        setLevel(data.level || '')
    }, [data])
    return (
        <div className=" b bg-light bg-opacity-30 flex flex-col w-full">
            <button onClick={() => setActive(true)} className="p-8 flex items-center justify-between text-xl gap-4"><span>{(name.current && name.current.value) || `Language ${data.id}`}</span> {!active && <span>✏️</span>}</button>
            <form onSubmit={saveData} className={`${active ? 'flex' : 'hidden'} flex-col gap-8 px-8 pb-8`}>
                <div className="flex flex-col gap-8">
                    <input required ref={name} type="text" className="input" placeholder="Name*" />
                    <div className="flex flex-col gap-4">
                        <span>Level of Language</span>
                        <LanguageLevel level={level} setLevel={(index)=>setLevel(index)}/>
                    </div>

                </div>
                <div className="flex gap-4  overflow-x-auto">
                    <div role="button" className="button-light" onClick={() => remove(data.id)}>Remove</div>
                    <button className="button">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Language