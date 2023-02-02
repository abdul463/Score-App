import '../css/Header.css';
function Header() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">Abdul Almas DevOps</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/users">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/scoreboard">Score board</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/challenges">Challenges</a>
        </li>
      </ul>
      <div className="Navbar-2">
        <a class="nav-link" href="/register">Register</a>
        <a class="nav-link" href="/login">Login</a>
        </div>
    </div>
  </div>
</nav>
    
        </div>
    )
}
export default Header;