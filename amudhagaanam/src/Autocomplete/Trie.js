import Node from "./Node";
import { v4 as uuidv4 } from "uuid";

class Trie {
  root = new Node("");

  insert(word, type) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if (!current.hasChild(char)) {
        current.addChild(char);
      }
      current = current.getChild(char);
    }

    switch (type) {
      case "song":
        current.isSong = true;
        break;
      case "artist":
        current.isArtist = true;
        break;
      case "album":
        current.isAlbum = true;
        break;
      default:
        break;
    }
  }

  findLastNode(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let child = current.getChild(word.charAt(i));
      if (child === undefined) return null;
      current = child;
    }
    return current;
  }

  autoComplete(word) {
    const words = [];
    if (word.length === 0) return words;
    let lastNode = this.findLastNode(word);
    if (lastNode == null) return words;
    this.autoCompleteRec(lastNode, word, words);
    return words;
  }

  autoCompleteRec(root, word, words) {
    if (root.isAlbum || root.isArtist || root.isSong) {
      root.isAlbum
        ? words.push({ name: word, type: "album", id: uuidv4() })
        : root.isArtist
        ? words.push({ name: word, type: "artist", id: uuidv4() })
        : words.push({ name: word, type: "title", id: uuidv4() });
    }

    root.getAllChildren().forEach((child) => {
      this.autoCompleteRec(child, word + child.char, words);
    });
  }
}

const trie = new Trie();

export default trie;
