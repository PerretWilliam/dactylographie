import icon from '/icon.svg';

/**
 * Header component displaying the application logo and title
 *
 * @returns {JSX.Element} The header component
 */
const Header = () => {
  return (
    <div className="mb-4 flex items-center gap-3">
      <img src={icon} alt="TypeFast logo" className="h-10 w-10" />

      <div>
        <h1 className="text-xl font-semibold text-foreground">TypeFast</h1>
        <p className="text-sm text-muted">Test de dactylographie</p>
      </div>
    </div>
  );
};

export default Header;
