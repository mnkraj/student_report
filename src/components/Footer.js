import React from "react";

const Footer = () => {
  return (
    <div style={{ width: "100%" }}>
      <footer class="py-3 my-4 ">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/dashboard" class="nav-link px-2 text-muted">
              Features
            </a>
          </li>

          <li class="nav-item">
            <a
              href="https://nitjsr.ac.in/Institute/About_NITJSR"
              target="--blank"
              class="nav-link px-2 text-muted"
            >
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">© 2024 NIT Jamshedpur</p>
      </footer>
    </div>
  );
};

export default Footer;
