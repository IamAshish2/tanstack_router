import { useParams } from "@tanstack/react-router";


const ProductDetail = () => {
    const params = useParams({ strict: false });
    return (
        <div> i am currently at ${params.id}. but i am inside another folder and path.</div>

    )
}

export default ProductDetail
