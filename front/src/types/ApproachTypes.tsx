import {
  APPROACH_REQUEST_ERROR,
  APPROACH_REQUST_SUCCESS,
  APPROACH_START,
} from "../constants/ApproachConstants";

interface approachStart {
  type: typeof APPROACH_START;
}

interface approachSucess {
  type: typeof APPROACH_REQUST_SUCCESS;
}

interface approachError {
  type: typeof APPROACH_REQUEST_ERROR;
  error: string;
}

export type ApproachTypes = approachStart | approachError | approachSucess;
