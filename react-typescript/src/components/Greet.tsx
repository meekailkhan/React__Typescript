type greetProps = {
    name : string
    messageCount : number,
    isLoggedIn : boolean
}

export const Greet = (props:greetProps)=>{
    return (
        <div>
            {
                props.isLoggedIn ? <h2>Welcome {props.name} you have {props.messageCount} unreaded messages</h2> : 'welcome guest'
            }
            
        </div>
    )
}