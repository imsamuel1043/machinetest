import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Maincontent = () => {
    const [title, setTitle] = useState("")
    const [about, setAbout] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [activeTab, setActiveTab] = useState("all")
    const [showModal, setShowModal] = useState(false)

    const [classes, setClasses] = useState([
        {
            id: 1,
            title: "Volley for Beginners",
            tags: ["sport", "volley"],
            about: "Class for people who joined to learn volleyball. We will learn and practice together.",
            day: "Monday",
            time: "10:00",
            myClass: true
        }
    ])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim() || !about.trim()) return

        const newClass = {
            id: Date.now(),
            title,
            tags: ["sport"],
            about,
            day: "Tuesday",
            time: "11:00",
            myClass: true
        }

        setClasses([...classes, newClass])
        setTitle("")
        setAbout("")
        setShowModal(false)
    }

    const handleDelete = (id) => {
        setClasses(classes.filter(item => item.id !== id))
    }

    const filteredClasses = classes
        .filter(item =>
            activeTab === "all" ? true : item.myClass
        )
        .filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar />
                </div>

                <div className='col-md-10'>

                    <div className="search-wrapper mb-3">
                        <i className="bi bi-search search-icon"></i>
                        <input
                            className="searchinput"
                            type="text"
                            placeholder="Search class"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>


                    <h2 className='heading'>Class</h2>

                    <div className='d-flex justify-content-between align-items-center flex-wrap'>

                        <ul className='alistul'>
                            <li
                                className={activeTab === "all" ? "active" : ""}
                                onClick={() => setActiveTab("all")}
                            >
                                ALL CLASS
                            </li>
                        </ul>

                        <button
                            className="btn addbtn"
                            onClick={() => setShowModal(true)}
                        >
                            + Add Class
                        </button>
                    </div>

                    <div className='aline my-3'></div>

                    <div className="row cardrow">
                        {filteredClasses.length === 0 && (
                            <p className='text-center'>No classes found</p>
                        )}

                        {filteredClasses.map((item) => (
                            <div className="col-md-4 mb-3" key={item.id}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className='cardtitle'>{item.title}</h5>

                                        {item.tags.map((tag, i) => (
                                            <button className="btn btn-primary me-1" key={i}>
                                                <p className='paras'>{tag}</p>
                                            </button>
                                        ))}

                                        <p className="card-text mt-2">{item.about}</p>

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

            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-sm modal-md">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Add New Class</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">

                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />

                                    <textarea
                                        className="form-control"
                                        placeholder="About"
                                        rows="4"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    ></textarea>

                                </div>

                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Add
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Maincontent
