import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😊" }]);

  const choiceEmoji = () => {
    const emojiList = ["🤯", "🥵", "🥶", "😱"];
    const index = Math.floor(Math.random() * emojiList.length);
    const randomEmoji = emojiList[index];
    return randomEmoji;
  };

  const addEmoji = () => {
    setEmojis((oldEmojis) => {
      const lastEmoji = oldEmojis[oldEmojis.length - 1];

      const newEmoji = { id: uuid(), emoji: choiceEmoji() };

      if (!lastEmoji || lastEmoji.emoji !== newEmoji.emoji) {
        return [...oldEmojis, newEmoji];
      } else {
        oldEmojis;
      }
    });
  };
  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id);
    });
  };
  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)} // 클릭하면 해당 이모지의 id가 deleteEmoji함수로 전달
          style={{ fontSize: "4rem" }}
          key={e.id}
        >
          {e.emoji}
        </span>
      ))}
      <div>
        <button onClick={addEmoji}>Add Emoji</button>
        <button onClick={deleteEmoji}>delete Emoji</button>
      </div>
    </div>
  );
}
