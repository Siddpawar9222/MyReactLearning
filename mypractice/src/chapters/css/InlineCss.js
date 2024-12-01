const InlineCss = () => {
    const myStyle = {
        color: 'blue',
        fontSize: '20px',
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px',
      };
  return (
    <> 
      <h1 style={myStyle}>Hello, World </h1>
      <p style={{ fontStyle: 'italic', marginTop: '20px' }}>This is inline CSS example.</p>
    </>
  )
}

export default InlineCss;