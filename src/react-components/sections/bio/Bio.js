import React, { Fragment, } from 'react'
import { Partition, SectionTitle, SmallContainer, } from '../../appStyles'
import { BioPicture,
    ListOutContainer,
    SkillContent, 
    SkillPolygon, 
    SkillTitle, } from './styles'
import { bioText, listOut, skillsText, } from './text'


const Bio = () => {
    return (
        <Fragment>
            <SectionTitle id='about'>About</SectionTitle>    

            <Partition>
                {skillsText.map(skill => (
                    <SmallContainer key={skill.title}>
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillPolygon />
                        <SkillContent>{skill.content}</SkillContent>
                    </SmallContainer>
                ))}
            </Partition>
            

            <Partition style={{ justifyContent: 'space-between', }}>
                <SmallContainer style={{ width: '40rem', alignSelf: 'center', margin: '0 auto' }}>
                    <BioPicture>
                        <img
                            alt='bear'
                            style={{ height: '34rem', width: '37rem', }} 
                            src={require('../../../assets/images/30437233898_19007f547b_b.jpg')} />
                    </BioPicture>
                    <SkillContent>{bioText}</SkillContent>
                </SmallContainer>
                
                

                <ListOutContainer>
                    {Object.keys(listOut).map(key => (
                        <SmallContainer 
                            key={key}
                            style={{ flexDirection: 'column', alignItems: 'flex-start', }}>

                            <SkillTitle
                                style={{ textAlign: 'left', color: '#9E2A2B', marginBottom: '1rem' }}

                            >   {key}
                            </SkillTitle>
                            <div>
                                {listOut[key].map(value => (
                                    <SkillContent
                                        key={value}
                                        style={{ textAlign: 'left', color: '#05090A', margin: '1rem 0', }}

                                    >   {value}
                                    </SkillContent>
                                ))}
                            </div>
                        </SmallContainer> 
                    ))}
                </ListOutContainer>
            </Partition>
            
        </Fragment>
    )
}


export { Bio }


/**
 <SkillTitle>Languages</SkillTitle>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                    <SkillTitle>Tools</SkillTitle>
                    <ul>
                        <li>Node JS</li>
                        <li>React</li>
                        <li>Mongo DB</li>
                        <li>Sass</li>
                        <li>OAuth</li>
                        <li>Auth0</li>
                    </ul>
                    <SkillTitle>Design</SkillTitle>
                    <ul>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                        <li>UI design</li>
                        <li>Logo design</li>
                    </ul>
 */