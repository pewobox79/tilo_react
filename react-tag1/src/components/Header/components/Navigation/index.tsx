import { navData } from '../../../../utils/navData'
import ListItem from './ListItem';
const Navigation = () => {

    const NavItems = navData.map((item) => {
        return <ListItem
            title={item.title}
            href={item.href}
            id={item.id}
            key={item.id}
        />
    });

    return <nav>

        <ul>
            {NavItems}
        </ul>

    </nav>
}

export default Navigation
