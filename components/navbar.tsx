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
        <div className="relative flex h-20 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 text-xl font-bold lg:ml-0">
            STORE LOGO
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </div>
  )
}
