import {
  UPDATE_QUESTION_STARTED,
  UPDATE_QUESTION_LOADED,
  UPDATE_QUESTION_ERROR,
  UPDATE_POST_QUESTION_STARTED,
  UPDATE_POST_QUESTION_SUCCESS,
  UPDATE_POST_QUESTION_ERROR,
  UPDATE_POST_QUESTION_REMOVE_MESSAGE 
} from "../constants/UpdateQuestionConstants";
  import store from "../stores";
  import { formDataInterface } from "../components/AskQuestionsComponent/AskQuestionForm";
  
  import axios from "../axios";
  import { Dispatch } from "redux";
  import { RootDispatchType } from "../stores";
  import { countReset } from "console";

export const UpdateQuestionAction =
    (
      token:string,
      question_id: string
    ) =>
  
    (dispatch: Dispatch<RootDispatchType>) => {
      console.log(token);
      console.log(question_id);
      dispatch({ type: UPDATE_QUESTION_STARTED});
      axios
        .get(
          `/questions/${question_id}`,
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          dispatch({ type: UPDATE_QUESTION_LOADED, question: response.data});
        })
        .catch((error) => {
          // console.log(error.response);

          dispatch({ type: UPDATE_QUESTION_ERROR, error: error.response.data });
        });
    };
  
    export const UpdatePostQuestionAction =
  (
    question_id:string,
    token: string,
    topic_id: string,
    sub_topic_id: string,
    title: string,
    question: string
  ) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: UPDATE_POST_QUESTION_STARTED });
    // console.log(sub_topic_id)
    axios
      .put(
        `/questions/${question_id}`,
        {
          topic_id,
          sub_topic_id,
          title,
          question,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((response) => {
        dispatch({ type: UPDATE_POST_QUESTION_SUCCESS, message: response.data });
        setTimeout(()=>{
          // console.log("Removed")
          dispatch({type:UPDATE_POST_QUESTION_REMOVE_MESSAGE})
        },3000)
      })
      .catch((error) => {
        // console.log(error.response)
        dispatch({ type: UPDATE_POST_QUESTION_ERROR, error: error.response.data });
      });
  };

  