import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

const STORAGE_KEY = 'mini-ecommerce-cart'

const defaultProducts = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 129,
    category: 'Electronics',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Leather Sneakers',
    price: 89,
    category: 'Fashion',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Smart Watch',
    price: 179,
    category: 'Electronics',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Minimal Backpack',
    price: 64,
    category: 'Accessories',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-8b5f8b2b9d42?auto=format&fit=crop&w=800&q=80',
  },
]

function App() {
  const [products, setProducts] = useState(defaultProducts)
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const storedCart = window.localStorage.getItem(STORAGE_KEY)
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    let active = true

    async function loadProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=12')
        const data = await response.json()
        if (!active) return

        const remoteProducts = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          rating: product.rating,
          image: product.thumbnail,
        }))

        setProducts((current) => [...current, ...remoteProducts])
      } catch {
        if (!active) return
        setMessage('Unable to load products from the API. Showing sample products only.')
      } finally {
        if (active) setLoading(false)
      }
    }

    loadProducts()

    return () => {
      active = false
    }
  }, [])

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...current, { ...product, quantity: 1 }]
    })
    setMessage(`${product.title} added to cart.`)
  }

  const removeFromCart = (productId) => {
    setCart((current) => current.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, delta) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const addProduct = (product) => {
    setProducts((current) => [
      {
        ...product,
        id: Date.now(),
        rating: 4.2,
      },
      ...current,
    ])
    setMessage('Product added to the dashboard and product list.')
  }

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return products

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      )
    })
  }, [products, search])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} />
      {message ? <div className="banner">{message}</div> : null}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              loading={loading}
              products={filteredProducts}
              search={search}
              setSearch={setSearch}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              cartTotal={cartTotal}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} cartTotal={cartTotal} setCart={setCart} />}
        />
        <Route path="/dashboard" element={<DashboardPage addProduct={addProduct} />} />
      </Routes>
    </div>
  )
}

function Header({ cartCount }) {
  return (
    <header className="topbar">
      <Link className="brand" to="/">
        <span className="brand-mark">ME</span>
        <span>
          <strong>Mini E-Commerce</strong>
          <small>React Internship Project</small>
        </span>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <Link className="cart-pill" to="/cart">
        Cart {cartCount}
      </Link>
    </header>
  )
}

function HomePage({ loading, products, search, setSearch, addToCart }) {
  return (
    <main className="page">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Product Listing</p>
          <h1>Browse products, add to cart, and simulate checkout.</h1>
          <p>
            This dashboard uses React state, router pages, API data, local storage, and a timer-based
            order flow.
          </p>
        </div>
        <div className="search-box">
          <label htmlFor="search">Search products</label>
          <input
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by title or category"
          />
        </div>
      </section>

      {loading ? <div className="status-card">Loading products...</div> : null}

      <section className="grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-body">
              <p>{product.category}</p>
              <h2>{product.title}</h2>
              <div className="meta-row">
                <span>${product.price}</span>
                <span>Rating {product.rating}</span>
              </div>
              <button type="button" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

function CartPage({ cart, cartTotal, removeFromCart, updateQuantity }) {
  return (
    <main className="page">
      <section className="panel">
        <h1>Your Cart</h1>
        {cart.length === 0 ? <p>Your cart is empty.</p> : null}
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-row" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>${item.price} each</p>
              </div>
              <div className="qty-controls">
                <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                  +
                </button>
              </div>
              <button type="button" className="ghost" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="summary-row">
          <strong>Total</strong>
          <strong>${cartTotal.toFixed(2)}</strong>
        </div>
      </section>
    </main>
  )
}

function CheckoutPage({ cart, cartTotal, setCart }) {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const [status, setStatus] = useState('')
  const [processing, setProcessing] = useState(false)

  const placeOrder = () => {
    if (cart.length === 0) {
      setStatus('Add items to the cart before placing an order.')
      return
    }

    setProcessing(true)
    setStatus('Processing your order...')

    window.setTimeout(() => {
      setCart([])
      setProcessing(false)
      setStatus(`Order placed successfully with ${paymentMethod === 'cash' ? 'Cash on Delivery' : 'Online Payment'}.`)
      window.setTimeout(() => navigate('/'), 500)
    }, 4000)
  }

  return (
    <main className="page">
      <section className="panel">
        <h1>Checkout</h1>
        <p>Total payable: ${cartTotal.toFixed(2)}</p>

        <div className="form-grid">
          <label>
            <input
              type="radio"
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              checked={paymentMethod === 'online'}
              onChange={() => setPaymentMethod('online')}
            />
            Online Payment
          </label>
        </div>

        <button type="button" onClick={placeOrder} disabled={processing}>
          {processing ? 'Placing Order...' : 'Place Order'}
        </button>

        {status ? <div className="status-card">{status}</div> : null}
      </section>
    </main>
  )
}

function DashboardPage({ addProduct }) {
  const [form, setForm] = useState({ title: '', price: '', category: '', image: '' })

  const submitForm = (event) => {
    event.preventDefault()
    if (!form.title || !form.price || !form.category || !form.image) return

    addProduct({
      title: form.title,
      price: Number(form.price),
      category: form.category,
      image: form.image,
    })
    setForm({ title: '', price: '', category: '', image: '' })
  }

  return (
    <main className="page">
      <section className="panel">
        <h1>Dashboard</h1>
        <form className="dashboard-form" onSubmit={submitForm}>
          <input
            value={form.title}
            onChange={(event) => setForm({ ...form, title: event.target.value })}
            placeholder="Product name"
          />
          <input
            value={form.price}
            onChange={(event) => setForm({ ...form, price: event.target.value })}
            placeholder="Price"
            type="number"
          />
          <input
            value={form.category}
            onChange={(event) => setForm({ ...form, category: event.target.value })}
            placeholder="Category"
          />
          <input
            value={form.image}
            onChange={(event) => setForm({ ...form, image: event.target.value })}
            placeholder="Image URL"
          />
          <button type="submit">Add Product</button>
        </form>
      </section>
    </main>
  )
}

export default App
