import axios from 'axios'
// https://bolhadev-help.onrender.com
export default axios.create({
  baseURL: 'https://bolhadev-help.onrender.com',
  // headers: {
  //   Authorization: ` Bearer ${process.env.NEXT_PUBLIC_GITHUB_KEY} `,
  // },
})
