import { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Loader from "../../components/Loader";
import db from "../../firebase.config";
import Basic from "./components/Basic";
import Education from './components/Education'
import Experience from "./components/Experience";
import Language from "./components/Language";
import Output from "./components/Output";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Social from "./components/Social";
import Theme from "./components/Theme";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Editor({ getdata }) {
    const [educations, setEducations] = useState([])
    const [expreiences, setExpreiences] = useState([])
    const [skills, setSkills] = useState([])
    const [languages, setlanguages] = useState([])
    const [basics, setBasics] = useState(false)
    const [socials, setSocials] = useState([])
    const [portfolio, setPortfolio] = useState('')
    const [loading, setLoading] = useState(false)
    const [publishReady, setPublishReady] = useState(false)
    const [theme, setTheme] = useState({ primary: '#035afc', secondary: '#000a1c', background: '#ffffff' })
    const [authenticated, setAuthenticated] = useState(false)
    const history = useHistory()
    let query = useQuery();
    const id = query.get('id')

    const get_data = async () => {
        const doc = await db.collection('cv').doc(id).get()
        if (doc.exists) {
            return doc.data()
        } else {
            return false
        }
    }
    const handleAuthenticate = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (id) {
            const doc = await db.collection('key').doc(id).get()

            if (doc.exists) {
                if (doc.data().key === key.current.value) {
                    const data = await get_data()
                    if (data) {
                        setEducations(data.educations)
                        setExpreiences(data.expreiences)
                        setSkills(data.skills)
                        setlanguages(data.languages)
                        setBasics(data.basics)
                        setPortfolio(data.portfolio)
                        setSocials(data.socials)
                        setTheme(data.theme)
                        setAuthenticated(true)
                        setLoading(false)
                    } else {
                        alert('Oops! CV Not found!')
                        history.push(`/builder`)
                        setLoading(false)
                    }
                } else {
                    alert('You are not authenticated!')
                    setLoading(false)
                    history.push(`/view?id=${id}`)
                }
            } else {
                alert('Oops! CV Not found')
                setLoading(false)
                history.push(`/builder`)
            }

        } else {
            alert('Oops! CV Not found')
            setLoading(false)
            history.push(`/builder`)
        }
    }
    useEffect(() => {
        if ((basics && basics.name.f && basics.name.l && basics.mobile && basics.email && basics.jobTitle)) {
            setPublishReady(true)
        } else {
            setPublishReady(false)
        }

    }, [educations, expreiences, languages, basics])


    const ClearAll = () => {
        setEducations([])
        setExpreiences([])
        setSkills([])
        setlanguages([])
        setSocials([])
        setBasics(false)
        setTheme({ primary: '#035afc', secondary: '#000a1c', background: '#ffffff' })
        setPortfolio('')
    }

    const makePublish = async () => {
        setLoading(true)
        const update = {
            educations,
            expreiences,
            skills,
            languages,
            basics,
            portfolio,
            theme,
            socials,
            date: new Date()
        }
        await db.collection('cv').doc(id).update(update)
        setLoading(false)
        history.push(`/view?id=${id}`)
    }
    const deleteCv = async () => {
        const res = prompt('Are you sure ? If Yes Type `Delete`')
        if (res === 'Delete') {
            setLoading(true)
            await db.collection('cv').doc(id).delete()
            await db.collection('key').doc(id).delete()
            alert('Successfully deleted your CV.')
            setLoading(false)
            history.push(`/builder`)

        }
    }
    const addEducation = () => {
        const obj = {
            institute: '',
            city: '',
            fromDate: '',
            toDate: '',
            description: '',
            id: educations.length + 1
        }
        setEducations([...educations, obj])
    }

    const saveEducation = (data) => {
        let newArray = [...educations]
        const elIndex = educations.findIndex(el => el.id === data.id)
        newArray[elIndex] = data
        setEducations(newArray)
    }
    const removeEducation = (id) => {
        let newArray = educations.filter(item => item.id !== id)
        setEducations(newArray)
    }

    const addExperience = () => {
        const obj = {
            company: '',
            city: '',
            jobTitle: '',
            fromDate: '',
            toDate: '',
            description: '',
            id: expreiences.length + 1
        }
        setExpreiences([...expreiences, obj])
    }
    const saveExperience = (data) => {
        let newArray = [...expreiences]
        const elIndex = expreiences.findIndex(el => el.id === data.id)
        newArray[elIndex] = data
        setExpreiences(newArray)
    }
    const removeExperience = (id) => {
        let newArray = expreiences.filter(item => item.id !== id)
        setExpreiences(newArray)
    }

    const addSkill = () => {
        const obj = {
            name: '',
            level: 1,
            id: skills.length + 1
        }
        setSkills([...skills, obj])
    }
    const saveSkill = (data) => {
        let newArray = [...skills]
        const elIndex = skills.findIndex(el => el.id === data.id)
        newArray[elIndex] = data
        setSkills(newArray)
    }
    const removeSkill = (id) => {
        let newArray = skills.filter(item => item.id !== id)
        setSkills(newArray)
    }

    const addSocial = () => {
        const obj = {
            name: '',
            link: '',
            id: socials.length + 1
        }
        setSocials([...socials, obj])
    }
    const saveSocial = (data) => {
        let newArray = [...socials]
        const elIndex = socials.findIndex(el => el.id === data.id)
        newArray[elIndex] = data
        setSocials(newArray)
    }
    const removeSocial = (id) => {
        let newArray = socials.filter(item => item.id !== id)
        setSocials(newArray)
    }




    const addLanguage = () => {
        const obj = {
            name: '',
            level: 1,
            id: languages.length + 1
        }
        setlanguages([...languages, obj])
    }
    const saveLanguage = (data) => {
        let newArray = [...languages]
        const elIndex = languages.findIndex(el => el.id === data.id)
        newArray[elIndex] = data
        setlanguages(newArray)
    }
    const removelanguage = (id) => {
        let newArray = languages.filter(item => item.id !== id)
        setlanguages(newArray)
    }
    const [showRes, setShowRes] = useState(false)
    const key = useRef()
    return (
        <>
            {authenticated && <div className="grid-cols-1 lg:grid-cols-2 grid h-full overflow-y-hidden">
                <div className="h-full overflow-y-auto flex flex-col px gap-32 py-8">
                    <Basic data={basics} save={(data) => setBasics(data)} />
                    <Theme data={theme} save={(data) => setTheme(data)} />
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1>Education</h1>
                            {!educations.length && <p>No Education Yet</p>}
                        </div>
                        <div className="flex h-full max-w-xl gap-4 flex-col w-full ">
                            {educations.map(education => <Education data={education} key={education.id} save={saveEducation} remove={removeEducation} />)}
                        </div>
                        <button className="button" onClick={addEducation}>Add Education</button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1>Experience</h1>
                            {!expreiences.length && <p>No Experience Yet</p>}
                        </div>

                        <div className="flex h-full max-w-xl gap-4 flex-col w-full ">
                            {expreiences.map(expreience => <Experience data={expreience} key={expreience.id} save={saveExperience} remove={removeExperience} />)}
                        </div>
                        <button className="button" onClick={addExperience}>Add Experience</button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1>Skills</h1>
                            {!skills.length && <p>No Skills Yet</p>}
                        </div>

                        <div className="flex h-full max-w-xl gap-4 flex-col w-full ">
                            {skills.map(skill => <Skill data={skill} key={skill.id} save={saveSkill} remove={removeSkill} />)}
                        </div>
                        <button className="button" onClick={addSkill}>Add Skill</button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1>Languages</h1>
                            {!languages.length && <p>No Languages Yet</p>}
                        </div>
                        <div className="flex h-full max-w-xl gap-4 flex-col w-full ">
                            {languages.map(language => <Language data={language} key={language.id} save={saveLanguage} remove={removelanguage} />)}
                        </div>
                        <button className="button" onClick={addLanguage}>Add Language</button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1>Social Media Profiles</h1>
                            {!socials.length && <p>No Profiles Yet</p>}
                        </div>

                        <div className="flex h-full max-w-xl gap-4 flex-col w-full ">
                            {socials.map(social => <Social data={social} key={social.id} save={saveSocial} remove={removeSocial} />)}
                        </div>
                        <button className="button" onClick={addSocial}>Add Profile</button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1>Portfolio</h1>
                            <p>You can leave this blank if not needed.</p>
                        </div>
                        <Portfolio save={(link) => setPortfolio(link)} link={portfolio} />

                    </div>
                </div>
                <div className="h-full overflow-y-auto b lg:block hidden bg-white">
                    <Output theme={theme} educations={educations} basics={basics} expreiences={expreiences} skills={skills} languages={languages} portfolio={portfolio} socials={socials} />
                </div>
                {showRes && <div className="h-screen overflow-y-auto top-0 left-0 b lg:hidden w-screen fixed z-40 bg-white">
                    <Output theme={theme} educations={educations} basics={basics} expreiences={expreiences} skills={skills} languages={languages} portfolio={portfolio} socials={socials} />
                </div>}
                {publishReady && <div className="flex gap-4 overflow-x-auto px py-8 bg-light">
                    <button onClick={() => setShowRes(!showRes)} className="w-max button-light z-50 b lg:hidden flex-shrink-0  ">{showRes ? 'Hide' : 'Show'} Preview</button>
                    <button onClick={ClearAll} className="button-light flex-shrink-0">Clear All</button>
                    <button className="button-light flex-shrink-0" onClick={deleteCv}>Delete</button>
                    <button className="button flex-shrink-0" onClick={makePublish}>Publish</button>
                </div>}
            </div>}

            {loading && <Loader />}
            {!authenticated && <form onSubmit={handleAuthenticate} className="flex flex-col px py-16 gap-4 max-w-xl">
                <input type="password" className="input" ref={key} placeholder="Enter Your Key" />
                <button className="button">Submit</button>
            </form>}
        </>
    );
}

export default Editor;