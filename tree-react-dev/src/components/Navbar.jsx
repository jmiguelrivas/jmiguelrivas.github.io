import { Link } from 'react-router-dom'

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/edit">Add User</Link>
        </li>
      </ul>
    </nav>
  )
}
