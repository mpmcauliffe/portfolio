import React, { Fragment, } from 'react'
import { SectionTitle, SkillContainer, SkillContent, SkillPolygon, SkillTitle, } from './styles'
import { skillsText, } from './text'


const Bio = () => {
    return (
        <Fragment>
            
            <div
                style={{ display: 'flex', flexBasis: '27rem', width: '90%', justifyContent: 'space-around', margin: '40vh auto 30vh auto', flexWrap: 'wrap', }} >

                {skillsText.map(skill => (
                    <SkillContainer key={skill.title}>
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillPolygon />
                        <SkillContent>{skill.content}</SkillContent>
                    </SkillContainer>
                ))}
            </div>
            

            <div 
                style={{ height: '50vh', width: '40vw', order: 1, flexGrow: 1, background: '#78C0E0', }} />

            <div
                style={{ height: '90vh', width: '25vw', order: 2, background: '#E09F3E', }} />
        </Fragment>
    )
}


export { Bio }
