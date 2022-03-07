import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// const Goodbye = () => {
//     return <span>Goodbye</span>
// }
// function HelloWorld() {
//     return (
//         <div>
//             <div>HELLO WORLD</div>
//             <Goodbye/>
//         </div>
        
//     )
// }

// const isFrench = true

// const Bonjour = () => {
//     return <span>Bonjour</span>
// }

// const Monde = () => {
//     return <span>Monde</span>
// }

// const name = ' Mike'

// const Hello = () => {
//     return <span>Hello</span>
// }

// const sayHello = () => {
//     // if (isFrench) {
//     //     return <Bonjour/>
//     // } else {
//     //     return <Hello/>
//     // }

//     return isFrench ? <Bonjour/> : <Hello/>
// }

// const FrenchHelloWorld = () => {
//     return (
//         <>
//             {/* use the statment below for returning a loading bar, second value being null */}
//             {isFrench ? <Bonjour/> : <Hello/>}
//             {/* {sayHello()} */}
//             {/* <Bonjour/>
//             {name} */}
//             {/* <Monde/> */}
//         </>
//     )
// }

// const isLoggedIn = true
// const username = 'reallyCoolGuy88'

// const LogInButton = () => (
//     <button onClick={() => alert('Log in, bozo')}>DO THE LOG IN PLEASE</button>
// )



// const DisplayLogin = () => {
//     // below is ternary
//     // return <> {isLoggedIn ? username : <LogInButton />} </>
//     // below is short circuiting that if both are true it will return username
//     return <> {isLoggedIn && username} </>
// }

// props
// const Hello = (props) => {
    // you can add more to where name is for multiple props - this is destructured
// const Hello = ({name}) => {
//     // return <span>Hello {props.name}</span>
//     return (
//         <>
//             <span>Hello {name}</span>
//         </> // use these so you can put multiple lines above
//     )
// }

// const SayHelloAndPassAProp = () => {
//     const somebodysName = 'Matt'
//     return <Hello name={somebodysName} />
// }

const Child = ({listen, name}) => {
    const num1 = 23
    const num2 = 42
    const sum = num1 + num2

    listen('I can do math! ${num1} + ${num2} is ${sum}')
    
    return <div> math is fun {name && name}</div>
}

Child.propTypes = {
    listen: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

const Parent = () => {
    const listenToTheChild = childWords => {
        console.log('Passed back a variable ', childWords)
    }

    return (
        <>
            <div> Its good to learn math </div>
            <Child listen={listenToTheChild} name='Brad'/>

        </>
    )
}

ReactDOM.render(<Parent/>, document.querySelector('#root'))