import {
  REGISTER_REQUEST_STARTED,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_ERROR,
} from "../constants/RegisterConstants";

interface registerStartingAction {
  type: typeof REGISTER_REQUEST_STARTED;
}

interface registerSuccessAction {
  type: typeof REGISTER_REQUEST_SUCCESS;
  message: string | null;
}

interface registerErrorAction {
  type: typeof REGISTER_REQUEST_ERROR;
  error: string | null;
}

export type RegisterAction =
  | registerStartingAction
  | registerSuccessAction
  | registerErrorAction;
