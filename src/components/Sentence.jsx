const Sentence = ({ sentence, currentWord, currentWordIndex, correctWord }) => {
  const getClassName = (word, index) => {
    if (word === currentWord && index === currentWordIndex) {
      return 'text-primary font-semibold underline underline-offset-4';
    } else if (correctWord[index] !== undefined) {
      return correctWord[index] ? 'text-green-600' : 'text-red-500';
    } else {
      return 'text-foreground';
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-6 text-center text-3xl leading-relaxed">
      {sentence.split(' ').map((word, index) => (
        <span
          key={index}
          className={`inline-block mx-1 transition-colors duration-150 ${getClassName(
            word,
            index
          )}`}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default Sentence;
