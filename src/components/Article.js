function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadTime = () => {
    const symbol = minutes < 30 ? "☕️" : "🍱";
    const divisor = minutes < 30 ? 5 : 10;
    const emojiCount = Math.ceil(minutes / divisor);
    return `${symbol.repeat(emojiCount)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{renderReadTime()}</p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
