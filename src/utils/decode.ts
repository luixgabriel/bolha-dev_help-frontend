import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
import { IUser } from '../types/user'

export function getUser(): IUser {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: IUser = jwtDecode(token)
  console.log(user)

  return user
}
