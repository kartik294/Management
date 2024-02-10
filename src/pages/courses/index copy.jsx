import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { courseModel } from "../../data/courseModel";
import Header from "../../components/Header";

const Courses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCellClick = (course) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Course Name",
      flex: 2,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <div
          style={{ cursor: "pointer", color: colors.greenAccent[300] }}
          onClick={() => handleCellClick(params.row)}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "instructor",
      headerName: "Instructor",
      flex: 1,
    },
    { field: "location", headerName: "Location" },
    {
      field: "duration",
      headerName: "Duration",
      flex: 1,
    },
    {
      field: "enrollmentStatus",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "schedule",
      headerName: "Schedule",
      flex: 2,
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header title="COURSES" subtitle="List of Courses for Enrollment" />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .name-column--cell": {
              cursor: "pointer",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: `2px solid ${colors.grey[200]}`,
              color: colors.grey[100],
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${colors.grey[200]}`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: colors.grey[100],
            },
          }}
        >
          <DataGrid
            rows={courseModel}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogContent>
          {selectedCourse && (
            <div>
              <Typography variant="h6" gutterBottom>
                {selectedCourse.name}
              </Typography>
              <Typography variant="body1">
                Instructor: {selectedCourse.instructor}
              </Typography>
              <Typography variant="body1">
                Description: {selectedCourse.description}
              </Typography>
              <Typography variant="body1">
                Enrollment Status: {selectedCourse.enrollmentStatus}
              </Typography>
              <Typography variant="body1">
                Duration: {selectedCourse.duration}
              </Typography>
              <Typography variant="body1">
                Schedule: {selectedCourse.schedule}
              </Typography>
              <Typography variant="body1">
                Location: {selectedCourse.location}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Prerequisites:
              </Typography>
              <ul>
                {selectedCourse.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
              <Typography variant="h6" gutterBottom>
                Syllabus:
              </Typography>
              <ul>
                {selectedCourse.syllabus.map((week) => (
                  <li key={week.week}>
                    Week {week.week}: {week.topic} - {week.content}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="info">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Courses;
