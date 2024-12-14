import { createLazyFileRoute } from '@tanstack/react-router'
import ProductDetail from '../../../ui/pages/ProductDetail'

export const Route = createLazyFileRoute('/product/$id/')({
  component: ProductDetail,
})

/*
function RouteComponent() {
  console.log(Route.useParams());
  const {id} = Route.useParams();
  
  return <div>
    <div> i am currently at ${id}</div>

  </div>
}
*/