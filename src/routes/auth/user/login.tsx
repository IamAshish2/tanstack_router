import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/user/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/user/login"!</div>
}
