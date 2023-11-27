import axios from 'axios'
// https://bolhadev-help.onrender.com
export default axios.create({
  baseURL: 'http://localhost:3001',
  // headers: {
  //   Authorization: ` Bearer ${process.env.NEXT_PUBLIC_GITHUB_KEY} `,
  // },
})
