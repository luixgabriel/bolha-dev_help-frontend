import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3001',
  // headers: {
  //   Authorization: ` Bearer ${process.env.NEXT_PUBLIC_GITHUB_KEY} `,
  // },
})
