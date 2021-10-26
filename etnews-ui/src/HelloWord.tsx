export default function HelloWord() {

    const name = 'Emanuel';

    return <div>
        <h1>Hello, { name === 'Emanuel' ? 'Emanuel Jr' : name } !!!</h1>
    </div>
}