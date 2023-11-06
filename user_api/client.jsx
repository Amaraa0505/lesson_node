export const Post = () => {
    const name ="Naraa"
    const res = fetch('http:localhost:8008/',{
        method: "POST",
        body: JSON.stringify({name}),
        
    });
    return <div>Data: </div>
}