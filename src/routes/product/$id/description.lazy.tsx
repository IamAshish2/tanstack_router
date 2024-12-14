import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/product/$id/description')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/product/$id/description"!</div>
}
