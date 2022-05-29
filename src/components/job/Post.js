const Post = (props) => {
    return (
        <div className="card w-3/4 shadow-xl bg-base-300 mx-auto">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.content}</p>
                <p>Salary: 10~15 Lakhs</p>
                <p>Type: Full-time</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary-content">Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Post