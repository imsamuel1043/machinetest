import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Maincontent = () => {
    const [title, setTitle] = useState("")
    const [About, setAbout] = useState("")

    const [classes, setClasses] = useState([
        { id: 1,title: "Volley for Beginners",tags: ["sport", "volley"],About: "Class for people who joined to learn volleyball. We will learn and practice together.",
            day: "Monday",time: "10:00"
        }
    ])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return

        const newClass = { id: Date.now(), title: title, tags: ["sport"], About: About, day: "Tuesday",time: "11:00" }
        setClasses([...classes, newClass])
        setTitle("")
        setAbout("")
    }
 const handleDelete = (id) => {
        const updatedClasses = classes.filter(item => item.id !== id)
        setClasses(updatedClasses)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar />
                </div>

                <div className='col-md-10'>
                    <div className='text-center'>
                        <input className='searchinput box-shadow' type="text" placeholder='search class' />
                        <button className='searchbtn'>search</button>
                    </div>
                    <h2 className='heading'>Class</h2>
                    <div className='d-flex justify-content-between'>
                        <ul className='alistul'>
                            <li>ALL CLASS</li>
                            <li>MY CLASS</li>
                        </ul>

                        <form onSubmit={handleSubmit}>
                            <button className='btn addbtn mb-2' type="submit">
                                Add New Class
                            </button>
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <textarea
                                placeholder="About"
                                value={About}
                                onChange={e => setAbout(e.target.value)}
                            />
                        </form>
                    </div>

                    <div className='aline mb-3'></div>

                    <div className="row cardrow">
                        {classes.map((item) => (
                            <div className="col-md-4 mb-3" key={item.id}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className='cardtitle'>{item.title}</h5>

                                        {item.tags.map((tag, i) => (
                                            <button className="btn btn-primary me-1" key={i}>
                                                <p className='paras'>{tag}</p>
                                            </button>
                                        ))}

                                        <p className="card-text mt-2">{item.About}</p>

                                        <p className='cardtxt mb-0'>
                                            <i className="bi bi-calendar-date-fill ico"></i> {item.day}
                                        </p>
                                        <p className='cardtxt'>
                                            <i className="bi bi-alarm-fill ico"></i> {item.time}
                                        </p>

                                        <button
                                            className="btn btn-danger mt-2"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Maincontent
