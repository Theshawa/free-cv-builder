import { useEffect,useRef,useState } from "react"

const Experience = ({data,save,remove}) => {
    const [active, setActive] = useState(true)
    const [present, setPresent] = useState(false)
    const company = useRef(null)
    const jobTitle = useRef(null)
    const city = useRef(null)
    const fromDate = useRef(null)
    const toDate = useRef(null)
    const description = useRef(null)
    const saveData = (e)=>{
        e.preventDefault()
        setActive(false)
        save({
            company:company.current.value,
            city:city.current.value,
            fromDate:fromDate.current.value,
            jobTitle:jobTitle.current.value,
            toDate:present ? 'present' : toDate.current.value,
            description:description.current.value,
            id:data.id
        })
    }
    useEffect(()=>{
        if(data.toDate==='present'){
            setPresent(true)
        }else{
            toDate.current.value = data.toDate || ''
        }
        company.current.value = data.company || ''
        city.current.value = data.city || ''
        fromDate.current.value = data.fromDate || ''
        jobTitle.current.value = data.jobTitle || ''
        description.current.value = data.description || ''
    },[data])
    return (
        <div className=" b bg-light bg-opacity-30 flex flex-col w-full">
            <button onClick={()=>setActive(true)} className="p-8 flex items-center justify-between gap-4"><span>{(company.current && company.current.value) || `Experience ${data.id}`}</span> {!active && <span>✏️</span>}</button>
            <form onSubmit={saveData} className={`${active ? 'flex' : 'hidden'} flex-col gap-8 px-8 pb-8`} noValidate>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <input required ref={company} type="text" className="input" placeholder="Company*" />
                    <input required ref={city} type="text" className="input h-max" placeholder="City*" />
                    <div className="flex flex-col gap-2">
                        <span>From (Date)*</span>
                        <input required ref={fromDate} type="date" className="input" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>To {!present && '(Date)'}*</span>
                        {!present && <input ref={toDate} type="date" className="input" />}
                        <label className="flex gap-2 items-center cursor-pointer">
                            <input  onChange={()=>setPresent(!present)} type="checkbox" checked={present} name="" id="" />
                            <span>Present</span>
                        </label>
                    </div>
                    <textarea ref={description} className="input h-24 resize-none" placeholder="Decription"></textarea>
                    <input required ref={jobTitle} type="text" className="input h-max" placeholder="Job Title*" />
                </div>
                <div className="flex gap-4  overflow-x-auto">
                    <div role="button" className="button-light" onClick={()=>remove(data.id)}>Remove</div>
                    <button className="button">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Experience