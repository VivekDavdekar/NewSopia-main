const NewsItems = (props) => {
    let { title, description, imgUrl, newUrl, author, date, source } = props;

  return (
    <div>
      <div className="card shadow-sm rounded" style={{ marginBottom: "20px" }}>
        <div style={{ position: 'absolute',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      right: '0',
                      height: '25px'
        }}>
          <span className="badge rounded-pill bg-dark text-light " style={{fontSize: '0.85rem' }}>
            {source}
          </span>
        </div>
        <div className="card-img-top overflow-hidden" style={{ height: '200px' }}>
          <img
            src={imgUrl}
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="news"
          />
        </div>
        <div className="card-body p-3">
          <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newUrl} rel="noreferrer" target='_blank' className="btn btn-sm  btn-dark">Read More...</a>
        </div>
      </div>
    </div>
  )
}


export default NewsItems