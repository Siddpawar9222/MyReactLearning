import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../demo/reducers/commentSlice";

const Comments = () => {

    const commentObj =  {
    id: 10,
    text: '10th comment',
    postId: 2
   } ;

   const {comments } =  useSelector((state)=> state.CommentReducer);
   const dispatch = useDispatch() ;
    console.log(comments); 
     console.log(typeof dispatch)

    const addCommentFun = () =>{
         dispatch(addComment(commentObj))
    }
    return ( <>  
         <p>
            {
              comments.map((comment)=> (
              <p key={comment.id}>{comment.text}</p>)
            )}

            <button onClick={addCommentFun}>Add Comment</button>
         </p>
    </> );
}
 
export default Comments;