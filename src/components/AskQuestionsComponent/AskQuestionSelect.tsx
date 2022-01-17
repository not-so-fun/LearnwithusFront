import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../stores";
import { TopicAction } from "../../actions/TopicAction";
import { topicInterface } from "../../reducers/TopicReducer";
import { subtopicInterface } from "../../reducers/SubTopicReducer";
import { SubTopicAction } from "../../actions/SubTopicAction";
import useTokenAndId from "../ReusableLogicComponents/useTokenAndId";
import { RouteComponentProps } from "react-router-dom";
import { formDataInterface } from "../AskQuestionsComponent/AskQuestionForm";

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
    // setTopicId(e.target.value)
    dispatch(SubTopicAction(token, e.target.value));
    setFormData({ ...formData, topic_id: e.target.value });
  };

  const handleSelectSubTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setFormData({ ...formData, sub_topic_id: e.target.value });
  };

  return (
    <div className="AskQuestionForm__TitleInput__InputBox__Div">
      <select
        onChange={(e) => handleSelectTopic(e)}
        className="AskQuestionForm__TitleInput__InputBox__Div__Select"
      >
        <option value="0" selected>
          Topic
        </option>
        {topics &&
          topics.map((topic: { topic_id: string; title: string }) => (
            <option value={topic.topic_id}>{topic.title}</option>
          ))}
      </select>

      <select
        onChange={(e) => handleSelectSubTopic(e)}
        className="AskQuestionForm__TitleInput__InputBox__Div__Select"
      >
        <option value="0" selected>
          Sub-Topic
        </option>

        {sub_topics &&
          sub_topics.map(
            (sub_topic: { sub_topic_id: string; title: string }) => (
              <option value={sub_topic.sub_topic_id}>{sub_topic.title}</option>
            )
          )}
      </select>
    </div>
  );
};

export default AskQuestionSelect;
