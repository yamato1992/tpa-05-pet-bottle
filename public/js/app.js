import { fetchMembers } from './api-client.js';
import BrowseMembers from './components/browse-members/BrowseMembers.js';

const initPage = function() {
  fetchMembers()
    .then(memberList => new BrowseMembers().init(memberList));
};

initPage();
