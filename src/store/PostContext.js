import {createContext, useState} from 'react';
export const PostContext = createContext();

export default function Context({children}){
    const [post, setPost] = useState(null);
    return (
    <PostContext.Provider value={{post,setPost}}>
        {children}
    </PostContext.Provider>)
}