import Link from 'next/link'

import getCategories from '@/actions/get-categories'
import MainNav from '@/components/main-nav'
import NavBarActions from '@/components/navbar-actions'
import Container from '@/components/ui/container'

export default async function NavBar() {
  const categories = await getCategories()
  return (
    <div className="border-b">
      <Container>
        <header className="relative flex items-center justify-between md:px-4">
          <Link href="/" className="ml-4 flex gap-x-2 text-xl font-bold lg:ml-0">
            STORE LOGO
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </header>
      </Container>
    </div>
  )
}
