import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../stores";
import { TopicAction } from "../../actions/TopicAction";
import { topicInterface } from "../../reducers/TopicReducer";
import { subtopicInterface } from "../../reducers/SubTopicReducer";
import { SubTopicAction } from "../../actions/SubTopicAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { RouteComponentProps } from "react-router-dom";
import { formDataInterface } from "./AskQuestionForm";

interface AskQuestionSelectPropsType {
  setFormData: (value: React.SetStateAction<formDataInterface>) => void;
  formData: formDataInterface;
}

const AskQuestionSelect: FC<AskQuestionSelectPropsType> = ({
  setFormData,
  formData,
}) => {
  const {
    loading: topicLoading,
    topics,
    error: topicError,
  } = useSelector<RootStateType>((state) => state.topics) as topicInterface;

  const {
    loading: subtopicLoading,
    sub_topics,
    error: subtopicError,
  } = useSelector<RootStateType>(
    (state) => state.subtopics
  ) as subtopicInterface;

  const [topicId, setTopicId] = useState<string>("");

  const { token } = useTokenAndId();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TopicAction(token));
  }, [token]);

  const handleSelectTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // dispatch(SubTopicAction(token, e.target.value));
    setFormData({ ...formData, topic_id: e.target.value });
    // setFormData({ ...formData, sub_topic_id: '0'});
  };

  const handleSelectSubTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, sub_topic_id: e.target.value });
  };

  return (
    <div className="AskQuestionForm__Main__Form__Item__SelectTag">
      <select
        onChange={(e) => handleSelectTopic(e)}
        // className="AskQuestionForm__TitleInput__InputBox__Div__Select"
        style={{ padding: 10 }}
        className="AskQuestionForm__Main__Form__Item__SelectTag__Select"
        // className="AskQuestionForm__TitleInput__InputBox__Div__Select"
        required
      >
        <option value="" selected>
          Topic
        </option>
        {topics &&
          topics.map((topic: { topic_id: string; title: string }) => (
            <option
              key={topic.topic_id}
              value={topic.topic_id}
              className="AskQuestionForm__TitleInput__InputBox__Div__Select__Option"
            >
              {topic.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default AskQuestionSelect;
