import { Link } from "@nextui-org/react";
function Navbar({ users }) {

return(
    <div className="Navbar">
      {users.map(station => (
      <Link href={ station.slug }>{ station.names }</Link>
    ))}
    </div>
)
}
export default Navbar;