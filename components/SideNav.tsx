import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Get started',
    links: [
      { href: '/docs/get-started', children: 'Opening an account' },
      { href: '/docs/get-started/teams', children: 'Managing Teams' },
      { href: '/docs/get-started/users', children: 'Adding Users' }
    ]
  },
  {
    title: 'Object Types',
    links: [
      { href: '/docs/object-types', children: 'Overview' },
      { href: '/docs/object-types/fields-relationships', children: 'Fields & Relationships' }
    ]
  },
  {
    title: 'Layouts',
    links: [
      { href: '/docs/layouts', children: 'Overview' }
    ]
  },
  {
    title: 'Advanced concepts',
    links: [
      { href: '/docs/frontmatter', children: 'Frontmatter' },
      { href: '/docs/partials', children: 'Partials' }
    ]
  }
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li :global(a) {
            text-decoration: none;
          }
          li :global(a:hover),
          li.active :global(a) {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
