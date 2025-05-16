import './Header.css';

/**
 * Header Component
 *
 * Displays the app logo and a welcome message.
 * It is shown at the top of the page.
 */

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="Logo" className="logo" />
      <h1 className="text">Welcome to the workouts list</h1>
    </header>
  );
}

export default Header;
