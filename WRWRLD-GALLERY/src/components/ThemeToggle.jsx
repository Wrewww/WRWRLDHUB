import { MoonIcon, SunIcon } from './icons';

export default function ThemeToggle({ isLightTheme, onToggleTheme }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Переключить тему"
      onClick={onToggleTheme}
    >
      {isLightTheme ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
