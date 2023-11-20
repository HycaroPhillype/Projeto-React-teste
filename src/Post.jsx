// props: vai ser um objeto`{author: "", content:""}

export function Post(props) {    
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
        
    )
}


