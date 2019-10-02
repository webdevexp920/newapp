
import Link from 'next/link'

const Nav = (props) => (
  <li>
    <Link href={props.href}>
      <a>
        <i className={props.iconClassName} />{props.label}
      </a>
    </Link>
  </li>
)
export default Nav;