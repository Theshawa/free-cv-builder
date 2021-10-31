import { useEffect, useRef } from "react"

const Basic = ({save,data}) => {
    const fname=useRef()
    const lname=useRef()
    const jobTitle=useRef()
    const email=useRef()
    const desc=useRef()
    const mobile = useRef()
    const handleSubmit = (e)=>{
        e.preventDefault()
        save({
            name:{
                f:fname.current.value,
                l:lname.current.value
            },
            jobTitle:jobTitle.current.value,
            email:email.current.value,
            description:desc.current.value,
            mobile:mobile.current.value,
        })
    }
    useEffect(()=>{
        
            fname.current.value = (data.name && data.name.f) || ''
            lname.current.value = (data.name && data.name.l) || ''
            email.current.value = data.email || ''
            desc.current.value = data.description || ''
            jobTitle.current.value = data.jobTitle || ''
            mobile.current.value = data.mobile || ''
        
    },[data])
    return (
        <form onSubmit={handleSubmit} className="  w-full max-w-3xl  flex flex-col gap-8 ">
            <h1>Basic Info</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <input required ref={fname} type="text" className="input " placeholder="First Name*" />
                <input required ref={lname} type="text" className="input " placeholder="Last Name*" />
                <input required ref={jobTitle} type="text" className="input " placeholder="Job Title*" />
                <input required ref={email} type="email" className="input " placeholder="Your Email *" />
                <input ref={mobile} type="tel" required className="input h-max" placeholder="Contact No* " />
                <textarea ref={desc} className="input resize-none h-36  w-full " placeholder="Describe You"></textarea>
            </div>
            <button className="button h-max">Save</button>
        </form>
    )
}
export default Basic