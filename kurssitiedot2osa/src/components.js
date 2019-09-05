import React from 'react'

const Course = ({ course }) => (
    <div>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

// Alikomponentit



const Header = props =>
    <h2 style={{ marginLeft: '40px' }}>{props.courseName}</h2>


const Total = ({ parts }) => {
    const total = parts.reduce((sum, p) => {
        return sum + p.exercises
    }, 0)

    return (
        <div>
            <h5 style={{ marginLeft: '40px' }}>Tehtäviä yhteensä: {total}</h5>
        </div>
    )
}


const Part = ({ part }) =>
    <p>{part.name} {part.exercises}</p>


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

export default Course