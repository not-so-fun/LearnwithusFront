import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import GroupIcon from "@mui/icons-material/Group";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import AddLinkIcon from '@mui/icons-material/AddLink';
import ContactsIcon from '@mui/icons-material/Contacts';
import NoteIcon from "@mui/icons-material/Note";
import TopicIcon from "@mui/icons-material/Topic";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import GradeIcon from '@mui/icons-material/Grade';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Item_builder = ({ value }) => {
  const [open, setOpen] = useState(false);

  return (
    <ListItem key={value.toLowerCase()} disablePadding sx={{ display: "flex" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          display: "flex",
          // justifyContent:"center",
          // justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          style={{ display: "flex" }}
          // sx={{
          //   minWidth: 0,
          //   mr: open ? 1 : "auto",
          //   justifyContent: "center",
          // }}
        >
          {value === "ChatRoom" ? (
            <ChatBubbleIcon />
          ) : (
            <>
              {value === "Rating" ? (
                <GradeIcon />
              ) : (
                <>
                  {value === "Wish" ? (
                    <AddLinkIcon />
                  ) : (
                    <>
                      {value === "Expertise" ? (
                        <ContactsIcon />
                      ) : (
                        <>
                          {value === "Quesions" ? (
                            <QuestionAnswerIcon />
                          ) : (
                            <>
                              {value === "Topics" ? (
                                <TopicIcon />
                              ) : (
                                <>
                                  {value === "Users" ? (
                                    <GroupIcon />
                                  ) : (
                                    <>
                                      {value === "Sizes" ? (
                                        <CropLandscapeIcon />
                                      ) : (
                                        <>
                                          {value === "Replies" ? (
                                            <NoteIcon />
                                          ) : (
                                            <>
                                              {value === "Subtopics" ? (
                                                <SubtitlesIcon />
                                              ) : (
                                                <>
                                                  {value === "Answers" ? (
                                                    <QuestionAnswerIcon />
                                                  ) : (
                                                    <></>
                                                  )}
                                                </>
                                              )}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </ListItemIcon>
        {/* <span sx={{ opacity: open ? 1 : 0 }}>Hello</span> */}
        <div style={{ display: "flex", justifyContent: "center" }}>{value}</div>
      </ListItemButton>
    </ListItem>
  );
};

const CustomLink = ({ value }) => {
  return value === undefined ? (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/admin`}>
      Admin Panel
    </Link>
  ) : (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/admin/${value.toLowerCase()}`}
    >
      <Item_builder value={value} />
    </Link>
  );
};

export default CustomLink;
