export const projects = [
    {   // RACEMATE
        name: 'Racemate',
        coverImg: './images/racemate-cardFront.png',
        alt: 'RACEMATE',
        info: 'RACEMATE is a workout and routine tracking app that allows users to' +
            ' document their progress. It is a MERN app implemented with GraphQL and' +
            ' Apollo. State is elevated and managed through Apollo client cache.' +
            ' RACEMATE is primarily designed for mobile usage.',
        codeLink: '',
        instructionsLink: '',
        visitLink: 'https://racemate3d.herokuapp.com/',
        backgroundColor: '#f7f7f7',
        textColor: '#1c395c',
        hov: '',
    }, {   // PIP-PRODUCERS
        name: 'Pip Producers',
        coverImg: './images/pip-cardFront.png',
        alt: 'pip-producers',
        info: 'Pip Producers is a blog for currency traders built on MERN' +
            ' stack architecture. Read, write, update, and delete rights' +
            ' are determined by a roles based authorization system with' +
            ' JSON web-token.',
        codeLink: 'https://github.com/mpmcauliffe/pip-producer',
        instructionsLink: 'https://mpmcauliffe.github.io/blog-instructions/',
        visitLink: 'https://fierce-springs-23091.herokuapp.com/article/5d4faa613de5e36ca4e88000',
        backgroundColor: '#DAA520',
        textColor: '#393939',
        hov: '',
    }, {    // BOOKWORMZ
        name: 'Bookwormz',
        coverImg: './images/bookwormz-cardFront.png',
        alt: 'bookwormz',
        info: 'Bookwormz is social meetup app for book clubs. This is a' +
            ' MERN stack application that uses OAuth to harness the power' +
            ' of the GoodReads API. Users can create or join book clubs and' +
            ' access a number different attributes granted by GoodReads.',
        codeLink: 'https://github.com/mpmcauliffe/Bookwormz',
        instructionsLink: '',
        visitLink: '',
        backgroundColor: '#FBF8F9',
        textColor: '#275B70',
        hov: '',
    }
]

export const faIconClasses = [
    {
        title: 'Code',
        iconClass: 'fa fa-code fa-2x',
    }, {
        title: 'Instructions',
        iconClass: 'fa fa-info fa-2x',
    }, {
        title: 'Visit',
        iconClass: 'fa fa-arrow-up fa-2x'
    }
]


export const visitStyle = { arrow: { transform: 'rotate(45deg)' }}
