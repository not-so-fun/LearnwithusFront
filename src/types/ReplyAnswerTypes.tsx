import {
  REPLY_ANSWER_ERROR,
  REPLY_ANSWER_LOAD,
  REPLY_ANSWER_SUCCESS,
} from "../constants/ReplyAnswerConstants";

import {replyInterface} from "../reducers/ReplyAnswerReducer"

interface answerReplyLoadInterface {
    type:typeof REPLY_ANSWER_LOAD
}

interface answerReplySuccessInterface {
    type:typeof REPLY_ANSWER_SUCCESS;
    replies:replyInterface[]
}

interface answerReplyError {
    type:typeof REPLY_ANSWER_ERROR;
    error:string
}

export type ReplyAnswerTypes =
  | answerReplyLoadInterface
  | answerReplySuccessInterface
  | answerReplyError;
