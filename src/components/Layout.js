import Header from './Header'
import '../styles/Layout.css'

const Layout = ({ children }) => (
    <div className="container">
        <Header />
        {children}
    </div>
)

export default Layout
