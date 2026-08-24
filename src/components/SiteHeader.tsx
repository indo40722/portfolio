import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../content/portfolio';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleHashChange() {
      setIsMenuOpen(false);
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header id="site-header">
      <a id="site-brand" href="#top" aria-label="トップへ戻る">
        <span>
          <strong>Akihiro</strong>
          <small>Web Developer Student</small>
        </span>
      </a>

      <button
        id="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="site-navigation" aria-label="主要ナビゲーション">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
