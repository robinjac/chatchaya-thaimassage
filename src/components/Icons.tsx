export function Star({ className }: { className: string }) {
  return (
    <div className={"relative " + className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .587l3.668 7.568L24 9.748l-6 5.849 1.416 8.255L12 18.771l-7.416 4.081L6 15.597 0 9.748l8.332-1.593L12 .587z" />
      </svg>
    </div>
  );
}
