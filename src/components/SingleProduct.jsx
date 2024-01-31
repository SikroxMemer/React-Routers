import { useParams} from 'react-router-dom'
import { products } from './data'

export default function SingleProduct () {
    const {index} = useParams();

    const data = products.find(((object) => object.id == index))

    return <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.stock}</p>
    </div>
}