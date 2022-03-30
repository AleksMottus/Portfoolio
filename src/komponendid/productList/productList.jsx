import React from 'react'
import './productList.css'
import Product from '../product/product'
import {products} from '../../data'



const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className='pl-title'>Tehtud tööd</h1>
            <p className='pl-desc'>
               Siin on minu siiani tehtud tööd. Alumised kolm on algelised tööd mida tegime veebiarendus koolituse alguses. Matka-klubi leht oli veebiarendus koolitus suur töö kus lõime ka backendi ,et näidata matkadele registreerunuid.
               Kõige esimesena on siin mul välja toodud minu esimene reacti abil tehtud demo app mis näitab kulutusi. All paremal on kõige uuem minu tehtud demo app kus saab tellida jooke, mis tellimuse kinnitamisel saadab tellimuse ja tellija andmed firebase database-i. Kui on soov midagi lähemalt uurida saab klickida pildil ,et minna lehele.
            </p>
        </div>
        <div className="pl-list">
          {products.map((item) =>(
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList