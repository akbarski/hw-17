import { Navigate, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Materials from "./components/main-content/Materials";
import Rating from "./components/main-content/Rating";
import Students from "./components/main-content/Students";
import Navbar from "./components/navbar/Navbar";
import Announcements from "./page/announcement-page/Announcements";
import Courses from "./page/course-page/Courses";
import MaterialDetail from "./page/course-page/material-detail/MaterialDetail";
import Notifications from "./page/notification-page/Notifications";
import Schedule from "./page/schedule-page/Schedule";
import StudentsDetail from "./page/course-page/student-detail/StudentsDetail";
import Submitted from "./page/course-page/material-detail/Submitted";
import Waiting from "./page/course-page/material-detail/Waiting";
import Late from "./page/course-page/material-detail/Late";

function App() {
  return (
    <div>
      <Navbar />
      <Content>
        <Routes>
          <Route path="/courses/" element={<Courses />}>
            <Route index path="materials" element={<Materials />} />
            <Route
              path="materials/:materialId/detail"
              element={<MaterialDetail />}
            >
              <Route path="submitted" element={<Submitted />} />
              <Route path="waiting" element={<Waiting />} />
              <Route path="late" element={<Late />} />
            </Route>
            <Route path="students" element={<Students />} />
            <Route
              path="students/:studentId/detail"
              element={<StudentsDetail />}
            />
            <Route path="rating" element={<Rating />} />
          </Route>
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<Navigate to="/courses/materials" />} />
        </Routes>
      </Content>
      <GlobalStyle />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  box-sizing: border-box;
  background-color: #d5d5d5;
}
`;

const Content = styled.div`
  margin-left: 250px;
`;
