export default function Message({ displayMessage }) {
  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Messages</h1>
      {displayMessage && (
        <div className="card p-20">
          <h2 className="mb-10">Do you see me ?</h2>
        </div>
      )}
    </div>
  );
}
