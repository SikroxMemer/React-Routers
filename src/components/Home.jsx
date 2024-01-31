import {products} from "./data";
import {Link} from 'react-router-dom'

function Product ({title , description , stock , index}) {
    return <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{stock}</p>
        <button><Link to={`/SingleProduct/${index}`}>Show</Link></button>
    </div>
}
  
function Products ({P}) {
    return <section>
      {
        
        P.map((item , index) => {
          return <section>
              <Product title={item.title} description={item.description} stock={item.stock} index={item.id}/>
            </section>
        })
      }
    </section>
}

export default function Home() {
    return <section>
        <Products P={products}/>
    </section>
}