import ThemeToggle from './ThemeToggle';

export default function Header({ isLightTheme, onToggleTheme }) {
  return (
    <header className="site-header">
      <ThemeToggle isLightTheme={isLightTheme} onToggleTheme={onToggleTheme} />
    </header>
  );
}
