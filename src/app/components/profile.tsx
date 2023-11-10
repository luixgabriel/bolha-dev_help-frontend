import Image from 'next/image'
import defaultImg from '../../assets/imgs/null.png'

const Profile = ({ imageUrl }: { imageUrl: string | null }) => {
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={imageUrl ? (imageUrl as string) : defaultImg}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
    </div>
  )
}

export default Profile
