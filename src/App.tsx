import './styles/App.scss';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import { AuthProvider } from './Auth/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import CaseDetails from './Pages/CaseDetails';

function App() {
  return (
    <AuthProvider>
    <Box className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Box className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute> */}
            <Route path="/Dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/case-details/:caseId" element={<CaseDetails  />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          </Box>
          <Footer />
        </Router>
      </ThemeProvider>
    </Box>
    </AuthProvider>
  );
}

export default App;
