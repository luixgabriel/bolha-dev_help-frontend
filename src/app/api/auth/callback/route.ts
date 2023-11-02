import { NextRequest, NextResponse } from 'next/server'
import axios from '../../../../services/axios'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  console.log(code)
  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await axios.post('/auth/github', {
    code,
  })

  console.log(registerResponse)

  const { token } = registerResponse.data

  const redirectURL = redirectTo ?? new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`,
    },
  })
}
