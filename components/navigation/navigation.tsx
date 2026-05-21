import { routes } from '@/app/routes';
import './navigation.css';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="wrap">
        <ul className="navigation__items">
          {
            routes.map(({ label, path }) => (
              <li className="navigation__item" key={label.toLowerCase().replaceAll(' ', '-')}>
                <Link className="navigation__link" href={path}>{label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
};

export { Navigation }