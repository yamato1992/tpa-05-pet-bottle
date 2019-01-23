import BrowseMembersView from './BrowseMembersView.js';

class BrowseMembers {
  constructor() {
    this.initState();
    this.callbacks = {
      handleBrowseNextMember: this.handleBrowseNextMember.bind(this),
    };
    this.view = new BrowseMembersView();
  }

  initState() {
    this.state = {
      membersList: [],
      currentMemberIndex: 0,
    };
  }

  patchState(patch) {
    Object.assign(this.state, patch);
    this.view.render(this.mergeProps());
  }

  mergeProps() {
    return Object.assign({}, this.state, this.callbacks);
  }

  init(memberList) {
    this.initMemberList(memberList);
  }

  initMemberList(membersList) {
    this.patchState({
      membersList,
    });
  }

  incrementCurrentMember() {
    let currentMemberIndex = this.state.currentMemberIndex + 1;
    this.state.currentMemberIndex += 1;
    if (currentMemberIndex === this.state.membersList.length) {
      currentMemberIndex = 0;
    }
    this.patchState({
      currentMemberIndex,
    });
  }

  handleBrowseNextMember() {
    this.incrementCurrentMember();
  }
}

export default BrowseMembers;
