import React,{FC, useEffect} from 'react';
import { RouteComponentProps } from "react-router-dom";
import MainQAQuestion from "../components/mainQAComponent/MainQAQuestion";
import MainQAAnswer from "../components/mainQAComponent/MainQAAnswer";
import { useDispatch, useSelector } from 'react-redux';
import useTokenAndId from "../components/ReusableLogicComponents/useTokenAndId";
import { MainQuestionAnswerAction } from "../actions/MainQuestionAnswerAction";
import { RootStateType } from "../stores";
import {questionFeedListInterface, MainQuestionAnswerInterface} from "../reducers/MainQuestionAnswerReducer";
const MainQA: FC<RouteComponentProps<any>> = ({match}) => {
    const dispatch = useDispatch();
    const { token, user_id } = useTokenAndId();
    const { userInfo } = useSelector<RootStateType>(
        (state) => state.userInfo
      ) as any;
    const {question}=  useSelector<RootStateType>(
        (state) => state.mainQA
      ) as MainQuestionAnswerInterface;
      useEffect(() => {
        dispatch(MainQuestionAnswerAction( token,match.params.id,));
      }, [match, token,user_id]);
    useEffect(() => {
        document.title = "Learn with us | Main QA"
    }, []);

    return (
        <div className='MainQA'>
            <div className="MainQA__Heading">
                Main Question Answer
            </div>
            {/* <div className="MainQA__"></div> */}
            <MainQAQuestion question={question}/>
            <div className="MainQA__Answers">
            <MainQAAnswer/>
            <MainQAAnswer/>
            <MainQAAnswer/>
            <MainQAAnswer/>
            <MainQAAnswer/>
            </div>
            
        </div>
    )
}

export default MainQA;
