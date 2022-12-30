import {
    SEARCH_TUTOR_STARTED,
    SEARCH_TUTOR_SUCCESS,
    SEARCH_TUTOR_ERROR
  } from "../constants/searchTutorConstants";
  import { Dispatch } from "redux";
  import axios from "../axios";
  import { RootDispatchType } from "../stores";


  export const SearchByNameAction =
  (token: string, username: string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: SEARCH_TUTOR_STARTED });
    axios
      .get(`/search-users?username=${username}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        dispatch({type:SEARCH_TUTOR_SUCCESS,tutors:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:SEARCH_TUTOR_ERROR,error:error.response.data})

      });
  };


  export const SearchByRatingAction =
  (token: string, lowerRating:number, higherRating:number) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: SEARCH_TUTOR_STARTED });
    axios
      .get(`/search-users?ratingFrom=${lowerRating}&ratingTo=${higherRating}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        dispatch({type:SEARCH_TUTOR_SUCCESS,tutors:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:SEARCH_TUTOR_ERROR,error:error.response.data})

      });
  };

  export const SearchByExpertiseAction =
  (token: string, expertise_id:string) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: SEARCH_TUTOR_STARTED });
    axios
      .get(`/search-users?expertise=${expertise_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        dispatch({type:SEARCH_TUTOR_SUCCESS,tutors:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:SEARCH_TUTOR_ERROR,error:error.response.data})

      });
  };

  export const SearchAction =
  (token: string, expertise_id:string,lowerRating:number, higherRating:number) =>
  (dispatch: Dispatch<RootDispatchType>) => {
    dispatch({ type: SEARCH_TUTOR_STARTED });
    axios
      .get(`/search-users?expertise=${expertise_id}&ratingFrom=${lowerRating}&ratingTo=${higherRating}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        dispatch({type:SEARCH_TUTOR_SUCCESS,tutors:response.data})
      })
      .catch((error) => {
        console.log(error);
        dispatch({type:SEARCH_TUTOR_ERROR,error:error.response.data})

      });
  };