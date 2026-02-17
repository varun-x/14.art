export default function Home() {
  return (
    <div>
      {Array.from({ length: 50 }).map((_, idx) => (
        <div key={idx} className="bg-neutral-100  h-200 w-100 mx-auto m-2 rounded-sm">{idx}</div>
      ))}

    </div>
  );
}
