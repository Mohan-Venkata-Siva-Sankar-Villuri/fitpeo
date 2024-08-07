import React from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Rating } from '@mui/material';
import userOne from "../../images/img1.jpg";
import userTwo from "../../images/img2.jpg";
import userThree from "../../images/img3.jpg";

const feedbackData = [
  {
    id: 1,
    avatar: userOne,
    name: "Jenny Wilson",
    rating: 5,
    feedback: "The food was excellent and so was the service. ..."
  },
  {
    id: 2,
    avatar: userTwo,
    name: "Jenny Wilson",
    rating: 5,
    feedback: "The food was excellent and so was the service. ..."
  },
  {
    id: 3,
    avatar: userOne,
    name: "Jenny Wilson",
    rating: 5,
    feedback: "The food was excellent and so was the service. ..."
  },
  {
    id: 4,
    avatar: userThree,
    name: "Jenny Wilson",
    rating: 5,
    feedback: "The food was excellent and so was the service. ..."
  }
];

const CustomerFeedback = () => {
  return (
    <Box sx={{ p: 2, backgroundColor: '#252538', color: 'white', borderRadius: '10px', width: '35%' }}>
      <Typography variant="h6">Customer's Feedback</Typography>
      <List sx={{ marginBottom: "10px" }}>
        {feedbackData.map((feedback, index) => (
          <ListItem
            key={feedback.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderBottom: index !== feedbackData.length - 1 ? "1px solid grey" : "none",
              marginBottom:"10px"
            }}
          >
            <ListItemAvatar sx={{ display: 'flex', gap: '10px',marginBottom:"10px" }}>
              <Avatar alt={`User ${feedback.id}`} src={feedback.avatar} />
              <ListItemText primary={feedback.name} />
            </ListItemAvatar>
            <Rating name="read-only" value={feedback.rating} readOnly />
            <ListItemText secondary={feedback.feedback} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomerFeedback;
