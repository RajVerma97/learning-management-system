'use client'
import { BarChart, Layout, List, Search } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { SidebarItem } from './sidebar-item'

const guestRoutes = [
  {
    label: 'dashboard',
    icon: Layout,
    href: '/',
  },
  {
    label: 'explore',
    icon: Search,
    href: '/search',
  },
]

const teacherRoutes = [
  {
    label: 'Courses',
    icon: List,
    href: '/teacher/analytics',
  },
  {
    label: 'Courses',
    icon: BarChart,
    href: '/teacher/courses',
  },
]

export default function SidebarRoutes() {
  const pathName = usePathname()
  const isTeacherPage = pathName.startsWith('/teacher')
  const activeRoutes = isTeacherPage ? teacherRoutes : guestRoutes
  return (
    <div className="flex w-full flex-col">
      {activeRoutes.map((route) => {
        return <SidebarItem icon={route.icon} key={route.href} label={route.label} href={route.href} />
      })}
    </div>
  )
}
