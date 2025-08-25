// Set withCredentials: true on all axios requests.
// This will send the current_user_id cookie along with every request
import axios from 'axios';
axios.defaults.withCredentials = true;
export default axios;
