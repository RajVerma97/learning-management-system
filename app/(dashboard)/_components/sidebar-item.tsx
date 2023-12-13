'use client'

import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SidebarItemProps {
  label: string
  icon: LucideIcon
  href: string
}
export const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const router = useRouter()
  const pathName = usePathname()

  const handleOnClick = () => {
    router.push(href)
  }
  const isActive = pathName === '/' || pathName === href || pathName.startsWith('/')

  return (
    <div>
      <button onClick={handleOnClick} className={cn('text-md text-sky-500', isActive && 'text-sky-500')}>
        <div>{label}</div>
      </button>
    </div>
  )
}
