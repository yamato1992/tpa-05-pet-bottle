import {
  removeChildren,
  appendChildren,
  createDiv,
  createImg,
  createH3,
  createButton,
  createP,
} from '../../dom-utils.js';

import BrowseMembers from './BrowseMembers.js';

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
    
    const containerEl = document.querySelector('#container')

    const memeberProfileEl = createDiv('', {
      class: 'member-profile',
    });
    const btnEl = createButton('次へ', {
      class: 'btn-next-member',
    });
    
    appendChildren(containerEl, memeberProfileEl, btnEl);
    
    const memberImageBoxEl = createDiv('', {
      class: 'member-image-box',
    });
    const memberImageEl = createImg('', {
      src: thumbnailUrl,
      alt: `${name}のイメージ`,
    });
    const nameHeadingEl = createH3('名前', {});
    const memberNameEl = createP(name, {
      class: 'member-name',
    });
    const textHeadingEl = createH3('一言', {});
    const memberTextEl = createP(quote, {
      class: 'member-text', 
    });
    
    appendChildren(document.querySelector('#container .member-profile'), memberImageBoxEl, nameHeadingEl, memberNameEl, textHeadingEl, memberTextEl);
      
    appendChildren(document.querySelector('#container .member-profile .member-image-box'), memberImageEl);
      
    document.querySelector('#container .btn-next-member')
        .addEventListener('click', handleBrowseNextMember);
  }
}

export default BrowseMembersView;
