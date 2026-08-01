import { navigation } from "./data";
import { Brand } from "./shared";

function NavLinks() {
  return <>{navigation.map(({ label, href }) => <a href={href} key={href}>{label}</a>)}</>;
}

export function Header() {
  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Talkino home"><Brand priority /></a>
        <div className="nav-links"><NavLinks /></div>
        <div className="nav-actions"><a className="sign-in" href="#">Sign in</a><a className="button small" href="#start">Get Talkino <span>↗</span></a></div>
        <details className="mobile-menu"><summary aria-label="Open menu">Menu</summary><div><NavLinks /><a href="#start">Get started</a></div></details>
      </nav>
    </header>
  );
}
