import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        setLoading(true)
        setError('')

        const response = await fetch('https://dummyjson.com/products', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()
        setProducts(data.products ?? [])
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError instanceof Error ? fetchError.message : 'Failed to fetch products')
        }
      } finally {
        setLoading(false)
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [])

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Fetch demo</p>
        <h1>Products from DummyJSON</h1>
        <p className="subtext">
          This component fetches data from https://dummyjson.com/products and renders the
          returned product list.
        </p>
      </section>

      {loading && <p className="status">Loading products...</p>}

      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <section className="grid" aria-label="Product list">
          {products.map((product) => (
            <article className="card" key={product.id}>
              <img
                className="image"
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
              />
              <div className="card-body">
                <h2>{product.title}</h2>
                <p className="description">{product.description}</p>
                <div className="meta">
                  <span>${product.price}</span>
                  <span>{product.rating} rating</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default App
