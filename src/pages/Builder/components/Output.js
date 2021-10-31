import { useEffect } from "react";
import { Link } from "react-router-dom";


const Section = ({ children, title }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-primary text-2xl font-bold tracking-wider">{title || ''}</div>
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
function Output({ educations, basics, expreiences, skills, languages, portfolio, socials,published }) {

    const dummyText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consequuntur accusantium maiores quia? Possimus, illo quia quisquam nihil accusamus neque vitae impedit voluptate eum sint natus voluptatem veniam aspernatur minus.
    Maiores pariatur blanditiis cum obcaecati voluptate fuga aliquid natus veritatis delectus, sapiente earum debitis quam recusandae at magni, nesciunt cupiditate iste fugiat voluptas corrupti est ipsa. Libero illo ex quis.
    Placeat error adipisci obcaecati consectetur id ipsum explicabo autem vel. Cupiditate reiciendis, laboriosam adipisci natus quibusdam ab magni iure consequatur, dolorum quae soluta perspiciatis tempore. Autem enim possimus eligendi cumque?`
    useEffect(() => {

        skills.sort(compare)

    }, [skills])
    useEffect(() => {

        languages.sort(compare)

    }, [languages])
    const levels = ['Beginner', 'Intermediate', 'Expert', 'Pro']

    return (
        <div className="flex flex-col gap-8 h-max max-w-6xl  mx-auto bg-white w-full">
            <div className="bg-primary md:px-8 px-4 py-8 text-light flex items-center justify-between">
                <div className="flex flex-wrap justify-between w-full items-center gap-2">
                    <div className="text-3xl">{(basics && basics.name.f) || 'John'} {(basics && basics.name.l) || 'Mailer'}</div>
                    <div className="text-xl">A {(basics && basics.jobTitle) || 'Mechanic'}</div>
                </div>
            </div>
            <div className="flex flex-col gap-16 md:px-8 px-4 pb-8">

                {basics && basics.description && <Section>
                    <p >{basics.description}</p>
                </Section>}
                {expreiences.length ? <Section title="Experience">
                    {expreiences.map(expreience => (
                        expreience.company && <div key={expreience.id} className="flex flex-col gap-2 bb py-4">
                            <strong><span>{expreience.company}, {expreience.city}</span></strong>
                            <span>{expreience.toDate === 'present' ? 'Currently Working' : 'Worked'}  as a {expreience.jobTitle} {expreience.toDate === 'present' ? 'since' : 'from'} {expreience.fromDate} {expreience.toDate === 'present' ? '' : `to ${expreience.toDate}`} </span>
                            <p className="opacity-90">{expreience.description} </p>
                        </div>
                    ))}
                </Section> : ''}

                {educations.length ? <Section title="Education">
                    {educations.map(education => (
                        education.institute && <div key={education.id} className="flex flex-col gap-2 bb py-4">
                            <strong><span>{education.institute}, {education.city}</span></strong>
                            <span>From {education.fromDate} to {education.toDate}</span>
                            <p className="opacity-90">{education.description} </p>
                        </div>
                    ))}
                </Section> : ''}
                {skills.length ? <Section title="Skills">
                    {skills.map(skill => (
                        skill.name && <div key={skill.id} className="flex flex-col gap-2 bb py-4">

                            <span>A{[2, 3].includes(skill.level) ? 'n' : ''} {skill.level > 2 ? <strong>{levels[skill.level - 1]}</strong> : levels[skill.level - 1]} in <strong>{skill.name}</strong></span>
                        </div>
                    ))}
                </Section> : ''}
                {languages.length ? <Section title="Languages">
                    {languages.map(language => (
                        language.name && <div key={language.id} className="flex flex-col gap-2 bb py-4">
                            <span>A{[2, 3].includes(language.level) ? 'n' : ''} {language.level > 2 ? <strong>{levels[language.level - 1]}</strong> : levels[language.level - 1]} in <strong>{language.name}</strong></span>
                        </div>
                    ))}
                </Section> : ''}

                {basics ? <Section title="Contact">
                    <span>Email  : <a href={`mailto:${basics.email}`}><strong>{basics.email}</strong></a></span>
                    <span>Mobile  : <a href={`tel:${basics.mobile}`} className=""><strong>{basics.mobile}</strong></a></span>
                    {portfolio && <span>Portfolio  : <a target="_blank" rel="noreferrer" href={portfolio} className="text-primary"><strong>{portfolio}</strong></a></span>}
                    {socials.length ? <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-4">
                            <span>Follow Me On : </span>
                            {socials.map(social => (
                                <a href={social.link} className="text-primary"><strong>{social.name}</strong></a>
                            ))}
                        </div>
                    </div> : ''}
                </Section> : ''}
                {published && <div className="flex items-center justify-between gap-4 flex-wrap text-light ">
                    <span className="text-primary opacity-50">Built with Free CV Builder</span>
                    <Link to="/builder">
                        <span className="text-primary opacity-50 hover:opacity-100">Build Your New CV Now</span>
                    </Link>
                </div>}
            </div>
        </div>
    );
}

export default Output;
{/* <div className="w-full bg-primary p-8 text-light flex flex-col gap-2">
                <span className="text-3xl">{(basics && basics.name.f ) || 'Joe'} {(basics && basics.name.l) || 'Folland'}</span>
                <span className="text-xl">A {basics.jobTitle || 'Web developer'}</span>
            </div>
            <div className="flex flex-col gap-16  p-8">
                <p>{(basics && basics.description) || `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consequuntur accusantium maiores quia? Possimus, illo quia quisquam nihil accusamus neque vitae impedit voluptate eum sint natus voluptatem veniam aspernatur minus.
                Maiores pariatur blanditiis cum obcaecati voluptate fuga aliquid natus veritatis delectus, sapiente earum debitis quam recusandae at magni, nesciunt cupiditate iste fugiat voluptas corrupti est ipsa. Libero illo ex quis.
                Placeat error adipisci obcaecati consectetur id ipsum explicabo autem vel. Cupiditate reiciendis, laboriosam adipisci natus quibusdam ab magni iure consequatur, dolorum quae soluta perspiciatis tempore. Autem enim possimus eligendi cumque?`}</p>
                
               
                
                {basics.email && basics.mobile && portfolio && <div className="flex flex-col gap-4">
                    <h1>Contact</h1>
                    <div className="flex flex-col gap-2">
                       <span> Email : {basics.email }</span>
                       <span> mobile : {basics.mobile }</span>
                       <span> Portfolio : <a href={portfolio} className="text-primary">{portfolio}</a></span>
                    </div>
                </div>}
            </div> */}