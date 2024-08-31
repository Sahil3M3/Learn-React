// const heading=React.createElement("h1",{id:"head"},"Hello World from React");





const parennt =React.createElement("div",{id:"parent"},
  [  React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"head"},"Hello World from react" ),React.createElement("h2",{id:"head2"},"Hello World from react" )]
),
React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"head"},"Hello World from react" ),React.createElement("h2",{id:"head2"},"Hello World from react" )]
)]
)


const root=ReactDOM.createRoot(document.getElementById('root'));

addEventListener('DOMContentLoaded',()=>{
    console.log("hey");
    
    setTimeout(()=>{
        console.log("hey");

        root.render(parennt); 
    },10000)
    
})