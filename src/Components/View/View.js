import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Firebase/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const {post} = useContext(PostContext);
  const {firebase} = useContext(FirebaseContext);
   const [userDetails, setUserDetails] = useState();
   useEffect(() => {
    firebase.firestore().collection('users').where('id','==',post.userId).get().then(res=>{
      res.forEach(doc => {
        console.log(doc.data())
        setUserDetails(doc.data())
      }); 
    })
   }, [])
   
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={post.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {post.price} </p>
          <span>{post.productName}</span>
          <p>{post.category}</p>
          <span>{post.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> } 
      </div>
    </div>
  );
}
export default View;
