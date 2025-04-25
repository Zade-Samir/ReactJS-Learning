//create the coustom render DOM
function customRender(reactElement, container) {
    
    //create the dom element using reactElement
    const domElement = document.createElement(reactElement.type)

    //add the children to element
    domElement.innerHTML = reactElement.children

    /*//setting the attributes to elements
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target) */

    //what if there are 50 attributes, which take lot's of time to set Attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    //append the container created below using 'root'
    container.appendChild(domElement)

    
}

const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click me for visit the google"
}

//created the container using the 'root'
const mainContainer = document.querySelector("#root") //# as it is id

//let's render the above elements into container
customRender(reactElement, mainContainer)