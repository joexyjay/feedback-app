// eslint-disable-next-line react/prop-types
function Header(prop) {
  return (
    <header>
        <div className="container">
            <p>{prop.text}</p>
            <h2>FeedBack UI</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'FeedBack UI',
}

export default Header