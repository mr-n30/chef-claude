import chefClaudeLogo from "../assets/images/chef-claude-logo.png"

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#"><img src={chefClaudeLogo} alt="Chef Claude Logo" className="chef-claude-logo" /></a>
        <a href="#" className="chef-claude-brand-link"><span className="chef-claude-brand-text">Chef Claude</span></a>
      </nav>
    </header>
  )
}
