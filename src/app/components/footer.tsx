import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-black text-lg">bolha dev_help</h1>
            <p className="text-sm">© 2023 - Desenvolvido por Luis Gabriel.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/luixgabriel"
              className="hover:text-gray-300"
              target="blank"
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/luis-gabriel-a447081b2/"
              className="hover:text-gray-300"
              target="blank"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
