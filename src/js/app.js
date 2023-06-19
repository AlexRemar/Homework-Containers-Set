export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newMember) {
    if (this.members.has(newMember)) {
      throw new Error(`Персонаж ${newMember.name} уже в команде`);
    } else {
      this.members.add(newMember);
    }
  }

  addAll(...newMembers) {
    newMembers.forEach((newMember) => this.members.add(newMember));
  }

  toArray() {
    return Array.from(this.members);
  }
}
