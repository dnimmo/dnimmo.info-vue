const blogs =
  [
    { 
      mainPostContent: ["When I first heard about Elm, I dismissed it quite quickly, but then decided to give it a proper shot, and I don't mind admitting that I was wrong!"],
      date: "Oct 26th, 2016",
      link: "https://dev.to/nimmo/i-was-wrong-to-dismiss-elm-and-i-think-you-probably-aretoo",
      linkText: "I was wrong to dismiss Elm, and I think you probably are too",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["I wrote this about my own approach to development, and what I spend time thinking about whenever I'm writing code."],
      date: "Feb 25th, 2017",
      link: "https://dev.to/clicktravelengorg/thinking-of-the-next-developer",
      linkText: "Thinking of the next developer",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["Anyone that has worked with me probably knows that I am very keen on pure functions, but I wrote this for...people that haven't worked with me I guess!"],
      date: "Sep 17th, 2017",
      link: "https://dev.to/nimmo/pure-functions-and-why-i-like-them",
      linkText: "Pure functions, and why I like them",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["After a production incident at work, I wrote a blog post about my thoughts on what what went well when it came to fixing it."],
      date: "Dec 5th, 2017",
      link: "https://dev.to/nimmo/thats-fing-teamwork-61c",
      linkText: "That's f***ing teamwork!",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["I spent a lot of time considering alternative approaches to front-end development, and that's when I started to really think about putting state management at the start of my development process, and I thought other people might find it useful."],
      date: "Feb 4th, 2018",
      link: "https://dev.to/nimmo/state-driven-development-for-user-interfaces-part-1-an-introduction-27f1",
      linkText: "State Driven Development for user interfaces (Part 1: An introduction)",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["This is the second part in the 'State Driven Development' series, which talks about Finite State Machines, and why you should think of your web application as one."],
      date: "Feb 4th, 2018",
      link: "https://dev.to/nimmo/state-driven-development-for-user-interfaces-part-2-finite-state-machines-3hgc",
      linkText: "State Driven Development for user interfaces (Part 2: Finite State Machines)",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["This is the third and final part in the 'State Driven Development' series. This part talks about managing more complex states through parallel state machines."],
      
      date: "Feb 4th, 2018",
      link: "https://dev.to/nimmo/state-driven-development-for-user-interfaces-part-3-parallel-state-machines-2oja",
      linkText: "State Driven Development for user interfaces (Part 3: Parallel State Machines)",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["I have talked about the idea of 'smallest-viewport first' for a long time, and the language there is intentional. This is actually taken from something I posted on Slack, but copied and pasted into a blog post; I can go on a bit on Slack, as you'll see if you read this post!"],
      
      date: "Feb 13th, 2018",
      link: "https://dev.to/nimmo/smallest-viewport-first--3cck",
      linkText: "Smallest-viewport first",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["One of the best things my team at Click Travel ever did was work on a \"styleguide\", which essentially led us to having many discussions about our coding standards and preferences, and turned out to have a much greater impact on the team than we thought it would."],
      
      date: "May 7th, 2018",
      link: "https://dev.to/clicktravelengorg/do-your-team-a-favour-start-writing-a-styleguide-glh",
      linkText: "Do your team a favour: start writing a styleguide",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["My background has primarily been in JavaScript, and that has led me to being very wary of large files, and to think about code organisation very early on. With Elm, the cost of refactoring is very low, and it's worth taking that into account when you're starting a new Elm application."],
      
      date: "Jul 13th, 2018",
      link: "https://dev.to/nimmo/dont-split-up-your-codebase-before-you-need-to-the-most-useful-elm-tip-that-i-shouldnt-have-ignored-3m96",
      linkText: "Don't split up your codebase before you need to: The most useful Elm tip that I shouldn't have ignored",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["I'm a big fan of Elm, and I really wanted to give people an interesting example of an application that they could follow through and learn from, so I did!"],
      
      date: "Jul 20th, 2018",
      link: "https://dev.to/clicktravelengorg/the-basic-elm-example-that-i-wish-id-had-40m8",
      linkText: "The basic Elm example that I wish I'd had",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["Using arrays for everything in JavaScript is very easy to do, and because alternative data structures are less common in JS, it's easy to forget to consider the alternatives. But we should!"],
      
      date: "Jul 26th, 2018",
      link: "https://dev.to/clicktravelengorg/js-performance-perhaps-we-shouldnt-always-use-arrays-38ce",
      linkText: "JS Performance: Perhaps we shouldn't always use arrays",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    }, 
    {
      mainPostContent: ["I absolutely love remote working; I genuinely believe that it is going to have a much bigger role for many of us in the future. But communication is something you need to be actively considering at all times to get the best out of it, in my opinion."],
      
      date: "Oct 20th, 2018",
      link: "https://dev.to/nimmo/communication-is-hard-some-thoughts-on-one-aspect-of-remote-working-after-18-months-1f07",
      linkText: "Communication is hard: Some thoughts on one aspect of remote working, after 18 months",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["This is essentially a walk-through of an application that I built in Elm, so that people can see how it works and get a feel for how an Elm application might be put together."],
      
      date: "Nov 19th, 2018",
      link: "https://dev.to/clicktravelengorg/a-look-at-a-small-elm-application-2loh",
      linkText: "A look at a small Elm application",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["There are few things that bother me more than the prhase \"Can't we just...?\", because the answer is invariably \"No\".", "I believe that we should consider the words we choose carefully, because I believe that the words we choose generally end up influencing the way we think."],
      
      date: "Dec 22nd, 2018",
      link: "https://dev.to/clicktravelengorg/cant-we-just-56g",
      linkText: "Can't we just...?",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["When you work remotely, you can feel like asking people things is \"bothering\" them, but I think it's important to get past that, and to understand that you aren't responsible for managing other people's time."],
      
      date: "Feb 19th, 2019",
      link: "https://dev.to/nimmo/bothering-people-over-communication-tool-234l",
      linkText: "Bothering people over [communication tool]",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["Runtime exceptions are awful, but maybe sometimes failing loudly and obviously helps to prevent some harder-to-diagnose bugs..."],
      
      date: "Feb 21st, 2019",
      link: "https://dev.to/nimmo/sometimes-in-the-heat-of-the-moment-its-forgivable-to-cause-a-runtime-exception-2ko2",
      linkText: "Sometimes, in the heat of the moment, it's forgiveable to cause a runtime exception",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["JavaScript is constantly changing, and often for the better. Optional chaining can really tidy up your code, and reduce cognitive load at the same time, so I thought I'd write about it, along with writing about how to add it to your JS projects today!"],
      
      date: "Feb 27th, 2019",
      link: "https://dev.to/nimmo/optional-chaining-what-is-it-and-how-can-you-add-it-to-your-javascript-application-right-now-37ie",
      linkText: "Optional chaining: What is it, and how can you add it to your JavaScript application right now?",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["Accessibility is important for our users, but how often does it get forgotten? More than it should I expect. Fortunately, there are ways we can make it much harder to forget about in Elm!"],
      
      date: "Oct 11th, 2019",
      link: "https://dev.to/nimmo/easier-paths-to-accessibility-in-elm-4ojo",
      linkText: "Easier paths to accessibility in Elm",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    },
    {
      mainPostContent: ["Every Friday you can find people on Twitter shouting about how no-one should deploy on Friday, but is that really the case?", "In this blog I suggest that deployments shouldn't be scary, and that avoiding deploying for 20% of your working week isn't something we should be encouraging."],
      
      date: "Dec 9th, 2019",
      link: "https://dev.to/nimmo/deploy-every-friday-42b4",
      linkText: "Deploy every Friday!",
      username: "Nimmo",
      avatar: "/images/nimmo.png"
    }
  ]

  export default blogs.reverse();