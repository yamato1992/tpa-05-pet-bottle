import {
  removeChildren,
} from '../../dom-utils.js';

class BrowseMembersView {
  constructor() {
    this.rootEl = document.querySelector('#container');
  }

  clearDom() {
    removeChildren(this.rootEl);
  }

  render(props) {
    const {
      currentMemberIndex,
      handleBrowseNextMember,
      membersList,
    } = props;

    const {
      name,
      thumbnailUrl,
      quote,
    } = membersList[currentMemberIndex];

    this.clearDom();

    /*
      TODO: 動的にDOM要素を作成して、
      "#container"というidを持つDIV要素の子要素として追加してください...

        <div class="member-profile">
          <div class="member-image-box">
            <img src="" alt="(会員のイメージ)">
          </div>
          <h3>名前</h3>
          <p class="member-name">
            <!-- 会員の名前、たとえば「じじー」-->
          </p>
          <h3>一言</h3>
          <p class="member-text">
            <!-- 会員の自己紹介 -->
          </p>
        </div>
        <button class="btn-next-member">次へ</button>
    */
  }
}

export default BrowseMembersView;
