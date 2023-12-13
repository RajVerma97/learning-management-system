'use client'

import { UserButton } from '@clerk/nextjs'
import { Link, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function NavbarRoutes() {
  const pathName = usePathname()

  const isTeacherPage = pathName.startsWith('/teacher')
  const isPlayerPage = pathName.startsWith('/chapter')

  return (
    <div className="ml-auto flex items-center gap-x-2">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button>
            <LogOut className="mr-2 h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />

      <NavbarRoutes />
    </div>
  )
}
