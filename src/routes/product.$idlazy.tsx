import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product/$idlazy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/product"! dynamic route</div>
}
