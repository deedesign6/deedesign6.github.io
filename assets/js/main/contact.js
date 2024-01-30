class MyContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="contact-content">

        <h2 class="title">联系我们</h2>
        <div class="row">
          <div class="col-md-6">
            <p class="description">在海外在线中医平台，我们致力于为您提供最专业的中医咨询和服务。无论您有任何疑问、需要专业建议，或想了解更多关于中医的信息，我们的团队随时欢迎您的垂询。请通过以下联系方式与我们取得联系<br><br>
            </p>
            <form role="form" id="contact-form" method="post">
              <div class="form-group bmd-form-group">
                <label for="name" class="bmd-label-floating">名字</label>
                <input type="text" class="form-control" id="name">
              </div>
              <div class="form-group bmd-form-group">
                <label for="exampleInputEmails" class="bmd-label-floating">邮箱</label>
                <input type="email" class="form-control" id="exampleInputEmails">
                <span class="bmd-help">We'll never share your email with anyone else.</span>
              </div>
              <div class="form-group bmd-form-group">
                <label for="phone" class="bmd-label-floating">电话</label>
                <input type="text" class="form-control" id="phone">
              </div>
              <div class="form-group label-floating bmd-form-group">
                <label class="form-control-label bmd-label-floating" for="message">您的留言</label>
                <textarea class="form-control" rows="6" id="message"></textarea>
              </div>
              <div class="submit text-center">
                <input type="submit" class="btn btn-primary btn-raised btn-round" value="联系我们">
              </div>
            </form>
          </div>
          <div class="col-md-4 ml-auto">
            
            <div class="info info-horizontal">
              <div class="icon icon-primary">
                <i class="material-icons">phone</i>
              </div>
              <div class="description">
                <h4 class="info-title">电话联系</h4>
                <p>海外助手<br>
                  +40 762 321 762<br></p>
              </div>
            </div>
            <div class="info info-horizontal">
              <div class="icon icon-primary">
                <i class="material-icons">business_center</i>
              </div>
              <div class="description">
                <h4 class="info-title">公司信息</h4>
                <p> HaiWai.<br>
                  待定信息<br>
                  待定信息<br>待定信息</p>
              </div>
            </div>
          </div>
        </div>

    </div>        `;
    }
}

customElements.define('my-contact', MyContact);
