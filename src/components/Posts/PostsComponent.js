import { useEffect, useState } from "react";
import PostItem from "../Post/PostItem";
// import users from "../../assets/users";

const Posts = () => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')

            let data = await response.json()
            setUsers(data);
        } catch {}
    }

    const handleClick = (user) => user.body;
    return (
        <>
            {users?.map((user) => <PostItem key={user.id} user={user} handleClick={handleClick}/>)}
        </>
    )
    
}

export default Posts;