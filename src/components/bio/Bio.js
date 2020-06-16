import React, { Fragment, } from 'react'
import { Partition, SectionTitle, SmallContainer, } from '../appStyles'
import { BioImage,
    ListOutContainer,
    SkillContent, 
    SkillImage,
    SkillTitle, } from './styles'
import { bioText, listOut, skillsText, } from './text'
import bonzai from './skills/2.svg'


const Bio = () => {
    return (
        <Fragment>
            <SectionTitle id='about'>About</SectionTitle>    

            <Partition style={{ marginBottom: '10vh' }}>
                {skillsText.map((skill, index) => (
                    <SmallContainer key={skill.title}>
                        <SkillTitle>{skill.title}</SkillTitle>
                        {/**<SkillPolygon /> */}
                        {/**<img
                            alt='skill img'
                            src={bonzai} /> */}
                        <SkillImage
                            alt='skill img'
                            src={require(`./skills/${index+1}.svg`).default} />
                            
                        
                        <SkillContent style={{ textAlign: 'center' }}>{skill.content}</SkillContent>
                    </SmallContainer>
                ))}
            </Partition>
            

            <Partition className='bio-pic'>
                {/**/}
                <SmallContainer biopic> 
                    <BioImage
                        alt='bio-image'
                        src={require('./images/7.png').default} />
                    <SkillContent style={{ width: '35rem' }}>{bioText}</SkillContent>
                </SmallContainer>

                <ListOutContainer>
                    {Object.keys(listOut).map(key => (
                        <SmallContainer 
                            key={key}
                            style={{ flexDirection: 'column', alignItems: 'center', }}>

                            <SkillTitle
                                style={{ textAlign: 'center', color: '#05090A', marginBottom: '1rem' }}

                            >   {key}
                            </SkillTitle>
                            <div>
                                {listOut[key].map(value => (
                                    <SkillContent
                                        key={value}
                                        style={{ textAlign: 'center', color: '#63666B', margin: '1rem 0', }}

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