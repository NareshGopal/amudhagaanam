class Node {
  constructor(ch) {
    this.char = ch;
    this.children = {};
    this.isArtist = false;
    this.isSong = false;
    this.isAlbum = false;
  }

  hasChild(char) {
    return this.children[char] ? true : false;
  }
  addChild(char) {
    this.children[char] = new Node(char);
  }
  getChild(char) {
    return this.children[char];
  }

  getAllChildren() {
    let result = [];
    Object.keys(this.children).forEach((val) =>
      result.push(this.children[val])
    );
    return result;
  }
}

export default Node;
