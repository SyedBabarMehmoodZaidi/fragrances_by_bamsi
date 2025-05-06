import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Fragrances by Bamsi</h1>
        <input type="text" placeholder="Search..." className="px-4 py-2 rounded-md text-black" />
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl" />
          <span>My Account</span>
        </div>
      </div>
      <nav className="mt-4 flex justify-center gap-6 border-t border-yellow-400 pt-2">
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}