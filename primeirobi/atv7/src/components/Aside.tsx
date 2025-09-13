export default function Aside() {
  return (
    <aside className="aside">
      <h3 className="aside__title">Other activities</h3>
      <nav className="nav nav--aside">
        <ul className="nav__list--aside">
          <li>
            <a className="nav__link" href="atv1.html">
              Activity one
            </a>
          </li>
          <li>
            <a className="nav__link" href="atv2.html">
              Activity two
            </a>
          </li>
          <li>
            <a className="nav__link" href="atv3.html">
              Activity three
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
