    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);

    class MyHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
<header>
<nav class="navbar  bg-white   fixed-top  navbar-expand-lg " id="sectionsNav">
  <div class="container">
    <div class="navbar-translate">
      <a class="navbar-brand" href="./index.html">
        <img class="img" style="width: 100px" src="assets/img/logo1.png">
      </a>
      <!--      <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">-->
      <!--        <span class="sr-only">Toggle navigation</span>-->
      <!--        <span class="navbar-toggler-icon"></span>-->
      <!--        <span class="navbar-toggler-icon"></span>-->
      <!--        <span class="navbar-toggler-icon"></span>-->
      <!--      </button>-->
    </div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="dropdown nav-item">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
            <i class="material-icons">apps</i> 关于我们
          </a>
          <div class="dropdown-menu dropdown-with-icons">
            <a href="guang.html" class="dropdown-item">
              <i class="material-icons">line_style</i> 广安门医院
            </a>
            <a href="/introduction.html" class="dropdown-item">
              <i class="material-icons">content_paste</i>联系我们
            </a>
          </div>
        </li>
        <li class="dropdown nav-item">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
            <i class="material-icons">view_day</i> 成功案例
          </a>
          <div class="dropdown-menu dropdown-with-icons">
            <a href="./sections.html#headers" class="dropdown-item">
              <i class="material-icons">dns</i> 待定
            </a>

          </div>
        </li>
        <li class="dropdown nav-item">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
            <i class="material-icons">content_paste</i> 服务
          </a>
          <div class="dropdown-menu dropdown-with-icons">
            <a href="price.html" class="dropdown-item">
              <i class="material-icons">monetization_on</i> 价格
            </a>
            <a href="qa.html" class="dropdown-item">
              <i class="material-icons">art_track</i> 常见问题
            </a>

          </div>
        </li>
        <li class="button-container nav-item iframe-extern">
          <a href="" target="_blank" class="btn  btn-primary   btn-round btn-block">
            <i class="material-icons">account_circle</i> 注册/登陆
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>`;
}
}
    customElements.define('my-header', MyHeader);
