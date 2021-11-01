import { useEffect, useRef, useState } from "react"

const Basic = ({ save, data }) => {
    const fname = useRef()
    const lname = useRef()
    const jobTitle = useRef()
    const email = useRef()
    const desc = useRef()
    const mobile = useRef()
    const drvLicence = useRef()
    const country = useRef()
    const city = useRef()
    const dob = useRef()
    const address = useRef()
    const [addInfo, setAddInfo] = useState(false)
    useEffect(()=>{
        if(data.addInfo){
            setAddInfo(true)
        }
    },[data])
    const handleSubmit = (e) => {
        e.preventDefault()
        let additional = ''
        if(addInfo){
             additional = {
                dob: dob.current.value,
                drvLicence: drvLicence.current.value,
                country: country.current.value,
                city: city.current.value,
                address: address.current.value,
            }
        }
        save({
            name: {
                f: fname.current.value,
                l: lname.current.value
            },
            jobTitle: jobTitle.current.value,
            email: email.current.value,
            description: desc.current.value,
            mobile: mobile.current.value,
            addInfo: addInfo ? additional : ''
        })
    }
    useEffect(() => {

        fname.current.value = (data.name && data.name.f) || ''
        lname.current.value = (data.name && data.name.l) || ''
        email.current.value = data.email || ''
        desc.current.value = data.description || ''
        jobTitle.current.value = data.jobTitle || ''
        mobile.current.value = data.mobile || ''
        if (data.addInfo) {
            dob.current.value = data.addInfo.dob || ''
            drvLicence.current.value =  data.addInfo.drvLicence || ''
            city.current.value =  data.addInfo.city || ''
            country.current.value =  data.addInfo.country || ''
            address.current.value =  data.addInfo.address || ''
        }

    }, [data])

    return (
        <form onSubmit={handleSubmit} className="  w-full max-w-3xl  flex flex-col gap-8 " noValidate>
            <h1>Basic Info</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <input required ref={fname} type="text" className="input " placeholder="First Name*" />
                <input required ref={lname} type="text" className="input " placeholder="Last Name*" />
                <input required ref={jobTitle} type="text" className="input " placeholder="Job Title*" />
                <input required ref={email} type="email" className="input " placeholder="Your Email *" />
                <input ref={mobile} type="tel" required className="input h-max" placeholder="Contact No* " />


                <textarea ref={desc} className="input resize-none h-36  w-full " placeholder="Describe You"></textarea>
            </div>
            <div className="flex flex-col gap-16 mb-16">
                <div className={`${addInfo ? 'grid' : 'hidden'} grid-cols-2 gap-8`}>
                    <input type="text" ref={drvLicence} className="input h-max" placeholder="Driving Licence " />
                    <input type="text" ref={country} required className="input h-max" placeholder="Country* " />
                    <input type="text" ref={city} required className="input h-max" placeholder="City* " />
                    <input type="text" ref={address} required className="input h-max" placeholder="Address* " />
                    <div className="flex flex-col gap-2">
                        <span>Date of Birth*</span>
                        <input ref={dob} type="date" required className="input h-max" placeholder="Date of Birth" />
                    </div>
                </div>
                <div className="text-left flex items-center gap-4 cursor-pointer" onClick={() => setAddInfo(!addInfo)}><span className="w-8 h-8 border-2 border-primary rounded-full  flex items-center text-primary text-2xl justify-center">{addInfo ? '-' : '+'}</span> {addInfo ? 'Hide' : 'Show'} Additional Info</div>
            </div>
            <button className="button h-max">Save</button>
        </form>
    )
}
export default Basic