//API FOR OUR SPECIALIST
import axios from 'axios';
const DataNavLink = axios.create({
  baseURL: "http://localhost:6474/navLink",
});

export const getDataNavLink: React.FC = () =>{
  return DataNavLink.get("/")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};