import ProductList from "@/components/products/ProductList"

const productList = [
    {
        slug: 'Televisor',
        images: 'http://localhost:8084/images/tv_led.jpeg',
        title: 'Televisor Led',
        price: '99900',
        quantity: '1',
        color: 'Negro'
    },
    {
        slug: 'play',
        images: 'http://localhost:8084/images/play5.webp',
        title: 'Play 5',
        price: '59999',
        quantity: '2',
        color: 'Blanco'
    },
    {
        slug: 'nintendo',
        images: 'http://localhost:8084/images/switch.jpeg',
        title: 'Nintendo Switch',
        price: '350000',
        quantity: '5',
        color: 'Rojo'
    },
    {
        slug: 'Televisor',
        images: 'http://localhost:8084/images/tv_led.jpeg',
        title: 'Televisor Led',
        price: '99900',
        quantity: '1',
        color: 'Negro'
    },
    {
        slug: 'play',
        images: 'http://localhost:8084/images/play5.webp',
        title: 'Play 5',
        price: '59999',
        quantity: '2',
        color: 'Blanco'
    },
    {
        slug: 'nintendo',
        images: 'http://localhost:8084/images/switch.jpeg',
        title: 'Nintendo Switch',
        price: '350000',
        quantity: '5',
        color: 'Rojo'
    },
    {
        slug: 'Televisor',
        images: 'http://localhost:8084/images/tv_led.jpeg',
        title: 'Televisor Led',
        price: '99900',
        quantity: '1',
        color: 'Negro'
    },
    {
        slug: 'play',
        images: 'http://localhost:8084/images/play5.webp',
        title: 'Play 5',
        price: '59999',
        quantity: '2',
        color: 'Blanco'
    },
    {
        slug: 'nintendo',
        images: 'http://localhost:8084/images/switch.jpeg',
        title: 'Nintendo Switch',
        price: '350000',
        quantity: '5',
        color: 'Rojo'
    }
]
const Search = () => {
  return (
      <ProductList products={productList}/>
  )
}

export default Search