import { useState } from "react";
const PostItem = (props) => {
    const { user } = props;
    const [changeInfo, setchangeInfo] = useState(false);

    return (
        <div>
            <h1>{user.id}</h1>          
            <h2>{user.title}</h2>
            <button onClick={() => setchangeInfo(!changeInfo)}>{changeInfo ? 'Hide ' : 'Show '}Info</button>
            {changeInfo && (
                <p>{user.body}</p>
            )}
        </div>
    )
}

export default PostItem;