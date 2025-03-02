export default function gameIcon({ type }: { type: number }) {
  const numOfSquares = type * type - 1;
  return (
    <>
      <div className={`choice-squares-container --${type}`}>
        {[...Array(numOfSquares)].map((x, i) => (
          <i className="choice-square" key={i} />
        ))}
      </div>
      <h5 className="choice-title">{numOfSquares}-puzzle</h5>
    </>
  );
}
