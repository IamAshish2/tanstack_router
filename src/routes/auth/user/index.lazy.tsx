import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/user/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/user/"!</div>
}
