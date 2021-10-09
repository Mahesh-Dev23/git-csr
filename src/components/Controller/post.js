import axios from "axios"

const post = async (section) => {
    return await axios.post('http://localhost:5000/responce', section)
}

export default post