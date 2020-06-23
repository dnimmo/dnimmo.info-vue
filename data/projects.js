
const projects =  
[
    { 
        mainPostContent: ["State Machine Example, in React.js", "The original React-based state machine example that is discussed in my short blog series \"State-driven development for user interfaces\""],
        
        link: "https://github.com/dnimmo/state-machine-example",
        linkText: "State machine example: React",
        date: "Jan 29th, 2018",
        username: "Nimmo",
        avatar: "/images/nimmo.png"
    },
    { 
        mainPostContent: ["State Machine Example, in Elm", "This was an example of a small piece of functionality accompanying my short blog series \"State-driven development for user interfaces\", which demonstrated how much better you're able to think about your front-end codebase once you think about them as finite state machines rather than a collection of pages."],
        
        date: "Oct 9th, 2018",
        link: "https://github.com/dnimmo/elm-state-machine-example",
        linkText: "State machine example: Elm",
        username: "Nimmo",
        avatar: "/images/nimmo.png"
    },
    { 
        mainPostContent: ["\"Project Arklay\", in Elm", "My favourite project, written in my favourite programming language. If you've looked at the rest of my work you'll have seen this project a few times, but this version is still by far the most fun I've ever had on a project!"],
        
        date: "Nov 18th, 2019",
        link: "https://github.com/dnimmo/project-arklay-v3",
        linkText: "Project Arklay: Elm",
        username: "Nimmo",
        avatar: "/images/nimmo.png"
    },
    {
        mainPostContent: ["\"Project Arklay\", in React.js", "I recreated this in order to evaluate whether I would still choose Elm over React in 2020. If you're interested in the answer, it's \"yes\", although I will happily admit that React has come a long way over the last couple of years, and this codebase ended up being a lot of fun to work on."],
        
        date: "May 11th, 2020",
        link: "https://github.com/dnimmo/arklay-cv-client",
        linkText: "Project Arklay: React + TypeScript",
        username: "Nimmo",
        avatar: "/images/nimmo.png"
    },
    {
        mainPostContent: ["The server-side code for \"Project Arklay\", in TypeScript", "After having written this application a number of times, I decided it was time to create an API for it! This is served through AWS' API Gateway, which calls AWS Lambda functions. This is the reason it exposes \"handler\" functions, as this is in line with AWS Lambda's specification."],
        
        date: "May 11th, 2020",
        link: "https://github.com/dnimmo/arklay-server",
        linkText: "Project Arklay: Server-side code.",
        username: "Nimmo",
        avatar: "/images/nimmo.png"
    },
    { 
        mainPostContent: ["My CV, in React.js",  "The site you're looking at right now, but built in React."],
        
        date: "May 26th, 2020",
        link: "https://github.com/dnimmo/loose-client",
        linkText: "David Nimmo's CV site (React)",
        username: "Nimmo",
        avatar: "/images/nimmo.png"
    },
    { 
        mainPostContent: ["My CV, in Vue.js", "The site you're looking at right now!"],
        
        date: "May 26th, 2020",
        link: "https://github.com/dnimmo/dnimmo.info-vue",
        linkText: "David Nimmo's CV site (Vue)",
        username: "Nimmo",
        avatar: "/images/nimmo.png"
    },
    { 
        mainPostContent: ["Project Arklay, in Vue.js", "I find it's useful to re-write an application I'm already familiar with when I'm looking to evaluate a new technology, since it helps me focus entirely on the technology being evaluated, rather than the thing I'm building.", "Project Arklay is a text-adventure game that I originally wrote to investigate Angular 1.0, and have since re-written multiple times. This example was written using Vue, and is the version that is currently live on projectarklay.com"],
        
        date: "Jun 19th, 2020",
        link: "https://github.com/dnimmo/project-arklay-vue",
        linkText: "Project Arklay: Vue",
        username: "Nimmo",
        avatar: "/images/nimmo.png"
    }
];

export default projects.reverse();