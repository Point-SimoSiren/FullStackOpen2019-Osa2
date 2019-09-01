import React from 'react'
import ReactDOM from 'react-dom'

//1 osassa laitoin eri hakemistoihin, mutta aloin tehdä tätä 2 osan
//1 tehtävää mallivastauksen pohjalta.

const Header = props =>
    <h1>{props.courseName}</h1>

/* const Total = props => {
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

    return <p>yhteensä {total} tehtävää</p>
} */


const Part = (props) =>
    <p>{props.part.name} {props.part.exercises}</p>

const Content = ({ parts }) => {
    const rows = () => parts.map(part =>
        <Part key={part.id}
            part={part}
        />
    )
    return (
        <div>
            <ul>
                {rows()}
            </ul>
        </div>
    )
}


const Course = props => (
    <div>
        <Header courseName={props.course.name} />
        <Content parts={props.course.parts} />
    </div>
)


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },

            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Testi',
                exercises: 99,
                id: 4
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))