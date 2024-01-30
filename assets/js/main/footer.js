    // document.addEventListener('contextmenu', function(e) {
    //     e.preventDefault();
    // }, false);

    class MyHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
<footer class="footer footer-default">
  <div class="container">
    <nav class="float-left">
      <ul>
        <li>
          <a href="haiwai">
            Hai Wai
          </a>
        </li>
        <li>
          <a href="https://hai-wai.com/presentation">
            About Us
          </a>
        </li>
        <li>
          <a href="haiwai/license">
            Licenses
          </a>
        </li>
      </ul>
    </nav>
    <div class="copyright float-right">
      ©
      <script>
        document.write(new Date().getFullYear())
      </script>202420242024
      <a href="haiwai" target="_blank">Hai Wai</a>
    </div>
  </div>
</footer>
`;
}
}
    customElements.define('my-header', MyHeader);
