import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <Link href="/" className="font-bold">Evsane</Link>
      <nav>
        <Link href="/evler" className="mr-4">Evler</Link>
        <Link href="/blog" className="mr-4">Blog</Link>
        <Link href="/iletisim">İletişim</Link>
      </nav>
    </div>
  </header>
)

export default Header
