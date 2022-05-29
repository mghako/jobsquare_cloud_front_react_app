
const Pagination = (props) => {
    return (
        <div className="btn-group flex justify-center align-middle my-2">
            {
                
                props.meta.links.map( (link, index) => {
                    return <a key={index} href={(link.url) ? link.url: "#"} className="btn"> {link.label} </a>
                })
                
            }
        </div>
    )
}

export default Pagination