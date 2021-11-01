import { useEffect } from "react";
import { Link } from "react-router-dom";


const Section = ({ children, title, theme }) => {
    return (
        <div className="flex flex-col gap-4">
            <div style={{ color: theme.primary }} className=" text-2xl font-bold tracking-wider">{title || ''}</div>
            <div className="flex flex-col gap-2 ">
                {children}
            </div>
        </div>
    )
}
function compare(a, b) {
    if (a.level > b.level) {
        return -1;
    }
    if (a.level < b.level) {
        return 1;
    }
    return 0;
}
const Skill = ({ name, level, theme }) => {
    const levels = ['Beginner', 'Intermediate', 'Expert', 'Pro']


    const Ball = ({ active }) => {
        return (
            <div style={{ borderColor: theme.primary, backgroundColor: active ? theme.primary : '' }} className={`w-3 h-3 border-2 rounded-full`}></div>
        )
    }
    return (
        <div className="flex items-center gap-4 flex-wrap justify-between">
            <span>A{[2, 3].includes(level) ? 'n' : ''} {level > 2 ? <strong>{levels[level - 1]}</strong> : levels[level - 1]} in <strong>{name}</strong></span>
            <div className="flex items-center gap-2">
                <Ball active={level >= 1} />
                <Ball active={level >= 2} />
                <Ball active={level >= 3} />
                <Ball active={level >= 4} />
            </div>
        </div>
    )
}
function Output({ educations, basics, expreiences, skills, languages, portfolio, socials, published, theme }) {

    const dummyText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consequuntur accusantium maiores quia? Possimus, illo quia quisquam nihil accusamus neque vitae impedit voluptate eum sint natus voluptatem veniam aspernatur minus.
    Maiores pariatur blanditiis cum obcaecati voluptate fuga aliquid natus veritatis delectus, sapiente earum debitis quam recusandae at magni, nesciunt cupiditate iste fugiat voluptas corrupti est ipsa. Libero illo ex quis.
    Placeat error adipisci obcaecati consectetur id ipsum explicabo autem vel. Cupiditate reiciendis, laboriosam adipisci natus quibusdam ab magni iure consequatur, dolorum quae soluta perspiciatis tempore. Autem enim possimus eligendi cumque?`
    useEffect(() => {

        skills.sort(compare)

    }, [skills])
    useEffect(() => {

        languages.sort(compare)

    }, [languages])
    useEffect(() => {

        console.log(theme);

    }, [theme])

    return (
        <div style={{ backgroundColor: theme.background, color: theme.secondary }} className="flex flex-col gap-8 h-max max-w-6xl  mx-auto  w-full">
            <div style={{ backgroundColor: theme.primary, color: theme.background }} className="md:px-8 px-4 py-8  flex items-center justify-between">
                <div className="flex flex-wrap justify-between w-full items-center gap-2">
                    <div className="text-3xl">{(basics && basics.name.f) || 'John'} {(basics && basics.name.l) || 'Mailer'}</div>
                    <div className="text-xl">{(basics && basics.jobTitle) || 'Mechanic'}</div>
                </div>
            </div>
            <div className="flex flex-col gap-16 md:px-8 px-4 pb-8">

                {basics && basics.description && <Section theme={theme}>
                    <p >{basics.description}</p>
                </Section>}
                {expreiences.length ? <Section title="Experience" theme={theme}>
                    {expreiences.map(expreience => (
                        expreience.company && <div key={expreience.id} style={{ borderColor: theme.primary+'2b' }} className="flex flex-col gap-2 bb2 py-4">
                            <strong><span>{expreience.company}, {expreience.city}</span></strong>
                            <span>{expreience.toDate === 'present' ? 'Currently Working' : 'Worked'}  as a {expreience.jobTitle} {expreience.toDate === 'present' ? 'since' : 'from'} {expreience.fromDate} {expreience.toDate === 'present' ? '' : `to ${expreience.toDate}`} </span>
                            <p className="opacity-90">{expreience.description} </p>
                        </div>
                    ))}
                </Section> : ''}
                {basics.addInfo ? <Section title="Personal Info" theme={theme}>
                    {basics.addInfo.drvLicence ? <span>Driving Licence : <strong> {basics.addInfo.drvLicence} </strong></span> : ''}
                    <span>Location : <strong> {basics.addInfo.address} ,  {basics.addInfo.city} , {basics.addInfo.country}</strong></span>
                    <span>Date of Birth : <strong> {basics.addInfo.dob} </strong></span>

                </Section> : ''}
                {educations.length ? <Section title="Education" theme={theme}>
                    {educations.map(education => (
                        education.institute && <div key={education.id} style={{ borderColor: theme.primary+'2b' }} className="flex flex-col gap-2 bb2 py-4">
                            <strong><span>{education.institute}, {education.city}</span></strong>
                            <span>From {education.fromDate} to {education.toDate}</span>
                            <p className="opacity-90">{education.description} </p>
                        </div>
                    ))}
                </Section> : ''}
                {skills.length ? <Section title="Skills" theme={theme}>
                    {skills.map(skill => (
                        skill.name && <div key={skill.id} style={{ borderColor: theme.primary+'2b' }} className="flex flex-col gap-2 bb2 py-4">

                            <Skill name={skill.name} level={skill.level} theme={theme} />
                        </div>
                    ))}
                </Section> : ''}
                {languages.length ? <Section title="Languages" theme={theme}>
                    {languages.map(language => (
                        language.name && <div key={language.id} style={{ borderColor: theme.primary+'2b' }} className="flex flex-col gap-2 bb2 py-4">
                            <Skill name={language.name} level={language.level} theme={theme} />
                        </div>
                    ))}
                </Section> : ''}

                {basics ? <Section title="Contact" theme={theme}>
                    <span>Email  : <a href={`mailto:${basics.email}`}><strong>{basics.email}</strong></a></span>
                    <span>Mobile  : <a href={`tel:${basics.mobile}`} className=""><strong>{basics.mobile}</strong></a></span>
                    {portfolio && <span>Portfolio  : <a target="_blank" rel="noreferrer" href={portfolio} className="text-primary"><strong>{portfolio}</strong></a></span>}
                    {socials.length ? <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-4">
                            <span>Follow Me On : </span>
                            {socials.map(social => (
                                <a href={social.link} target="_blank" rel="noreferrer" className="text-primary"><strong>{social.name}</strong></a>
                            ))}
                        </div>
                    </div> : ''}
                </Section> : ''}
                {published && <div className="flex items-center justify-between gap-4 flex-wrap text-light ">
                    <Link to="/">
                        <span className="text-primary opacity-50 hover:opacity-100">Built with Free CV Builder</span>
                    </Link>
                    <Link to="/builder">
                        <span className="text-primary opacity-50 hover:opacity-100">Build Your New CV Now</span>
                    </Link>
                </div>}
            </div>
        </div>
    );
}

export default Output;
