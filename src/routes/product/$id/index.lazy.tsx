import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/product/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log(Route.useParams());
  const {id} = Route.useParams();
  
  return <div>
    <div>Hello "/product/$id/"! folder based</div>
    <div> i am currently at ${id}</div>

  </div>
}
