export const projects = [
    {   // HEXASCENT
        name: 'Hexascent',
        coverImg: 'hexascent-cardFront',
        alt: 'HEXASCENT',
        info: 'HEXASCENT is my techblog. It is built with a Gatsby starter kit' +
            ' using Netlify CMS.',
        codeLink: 'https://github.com/mpmcauliffe/hexascent',
        instructionsLink: '',
        visitLink: 'https://hexascent.com/',
        backgroundColor: '#d3d2d0',
        textColor: '#2f2f2f',
        deployed: true,
        logos: true,
        hov: '',
        logos: [
            'gatsby',
            'netlify'
        ]
    }, {   // BEARS
        name: 'Bears',
        coverImg: 'bears-cardFront',
        alt: 'BEARS',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,' +     
            ' voluptates cupiditate accusantium nulla aspernatur molestias, doloremque,' +
            ' consequatur pariatur vitae ex iusto! Nostrum doloremque ut sint dolores,' +
            ' aliquam numquam tempora optio.',
        codeLink: 'https://github.com/mpmcauliffe/Bears',
        instructionsLink: '',
        visitLink: 'https://racemate3d.herokuapp.com/',
        backgroundColor: '#ede5d7',
        textColor: '#91bd7f',
        deployed: false,
        logos: false,
        hov: '',
    },{   // RACEMATE
        name: 'Racemate',
        coverImg: 'racemate-cardFront',
        alt: 'RACEMATE',
        info: 'RACEMATE is a workout and routine tracking app that allows users to' +
            ' document their progress. It is a MERN app implemented with GraphQL and' +
            ' Apollo. State is elevated and managed through Apollo client cache.' +
            ' RACEMATE is primarily designed for mobile usage.',
        codeLink: 'https://github.com/mpmcauliffe/Racemate',
        instructionsLink: '',
        visitLink: 'https://racemate3d.herokuapp.com/',
        backgroundColor: '#f7f7f7',
        textColor: '#1c395c',
        deployed: true,
        logos: false,
        hov: '',
    }, {   // PIP-PRODUCERS
        name: 'Pip Producers',
        coverImg: 'pip-cardFront',
        alt: 'pip-producers',
        info: 'Pip Producers is a blog for currency traders built on MERN' +
            ' stack architecture. Read, write, update, and delete rights' +
            ' are determined by a roles based authorization system with' +
            ' JSON web-token.',
        codeLink: 'https://github.com/mpmcauliffe/pip-producer',
        instructionsLink: 'https://mpmcauliffe.github.io/blog-instructions/',
        visitLink: 'https://fierce-springs-23091.herokuapp.com/article/5d4faa613de5e36ca4e88000',
        backgroundColor: '#ffffc7', //'#DAA520',
        textColor: '#393939',
        deployed: true,
        logos: false,
        hov: '', //'#4d2f4a',
    }, {    // BOOKWORMZ
        name: 'Bookwormz',
        coverImg: 'bookwormz-cardFront',
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
        deployed: false,
        logos: false,
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
