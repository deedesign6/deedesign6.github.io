class MyPrice extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    <div class="pricing-4 pt-0" id="pricing-4">
      <h2 class="text-center title mb-4">服务价格</h2>
      <p class="text-center">单次诊疗一般为30分钟以内，会根据患者的需要做适当调整</p>
      <div class="container">
        <div class="row">
          <!-- 副主任医师 -->
          <div class=" col-lg-2 col-md-4">
            <div class="card card-pricing card-raised bg-success">
              <div class="card-body">
                <h5 class="card-category">副主任医师</h5>
                <h1 class="card-title"><small>$</small>50</h1>
                <ul>
                  <li><i class="material-icons text-success">check</i>临床经验丰富</li>
                  <li><i class="material-icons text-success">check</i>理论知识扎实</li>
                  <li><i class="material-icons text-success">check</i>专业技术传承</li>
                  <li><i class="material-icons text-success">check</i>专业技能高超</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 主任医师 -->
          <div class=" col-lg-2 col-md-4">
            <div class="card card-pricing ">
              <div class="card-body">
                <h5 class="card-category">主任医师</h5>
                <h1 class="card-title"><small>$</small>90</h1>
                <ul>
                  <li><i class="material-icons text-success">check</i>医学领域权威</li>
                  <li><i class="material-icons text-success">check</i>临床决策专家</li>
                  <li><i class="material-icons text-success">check</i>学术研究领袖</li>
                  <li><i class="material-icons text-success">check</i>高效治疗方案</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 知名专家 -->
          <div class="col-lg-2 col-md-4">
            <div class="card card-pricing card-raised bg-success">
              <div class="card-body">
                <h5 class="card-category">知名专家</h5>
                <h1 class="card-title"><small>$</small>120</h1>
                <ul>
                  <li><i class="material-icons text-success">check</i>行业内知名度高</li>
                  <li><i class="material-icons text-success">check</i>杰出科研成果</li>
                  <li><i class="material-icons text-success">check</i>高水平诊疗能力</li>
                  <li><i class="material-icons text-success">check</i>多学科综合诊疗</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 首都名医 -->
          <div class="col-lg-2 col-md-6">
            <div class="card card-pricing">
              <div class="card-body">
                <h5 class="card-category">首都名医</h5>
                <h1 class="card-title"><small>$</small>180</h1>
                <ul>
                  <li><i class="material-icons text-success">check</i>首都高端医疗</li>
                  <li><i class="material-icons text-success">check</i>杰出临床技术</li>
                  <li><i class="material-icons text-success">check</i>精准个性化医疗</li>
                  <li><i class="material-icons text-success">check</i>专业权威认证</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 院士及国医大师 -->
          <div class="col-lg-2 col-md-6">
            <div class="card card-pricing card-raised bg-success">
              <div class="card-body">
                <h5 class="card-category">院士及国医大师</h5>
                <h1 class="card-title"><small>$</small>220</h1>
                <ul>
                  <li><i class="material-icons text-success">check</i>顶尖医学专家</li>
                  <li><i class="material-icons text-success">check</i>高层次学术地位</li>
                  <li><i class="material-icons text-success">check</i>卓越疗效保证</li>
                  <li><i class="material-icons text-success">check</i>杰出医学贡献</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Pricing Section 结束 -->
        </div>
      </div>
    </div>`;
    }
}

customElements.define('my-price', MyPrice);