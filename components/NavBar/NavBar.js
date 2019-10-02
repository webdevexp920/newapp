
import NavItem from '../NavItem/NavItem'

const NavBar = () => (

  <ul>
    {
      this.props.links.map(link => {
        return (
          <NavItem
            className={link.className}
            iconClassName={link.iconClassName}
            href={link.href}
            label={link.label}
          />
        )
      })
    }
  </ul>

)

export default NavBar
