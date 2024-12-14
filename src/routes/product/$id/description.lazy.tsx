import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/product/$id/description')({
  component: RouteComponent,
})

// product/2323/description/?color=red&size=large

function RouteComponent() {
  const searchParams = Route.useSearch();
  return <div>Hello "/product/$id/description"!</div>
}
