import React from 'react'

function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand logoname" href="/">
          Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center w-75" id="navbarNav">
          <ul class="navbar-nav gap">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                HOME <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                ABOUT
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                CONTACT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">
                FOOD
              </a>
            </li>
          </ul>
        </div>
        <div id="navbarNav" class="navbar-collapse justify-content-center">  
              <a class="nav-link active" href="/login">
              <button class="button">LOG IN</button>
              </a>
        </div>
      </nav>
    </>
  );
}

export default Nav