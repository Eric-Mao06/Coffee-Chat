interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SearchBar({ query, setQuery, onSubmit }: SearchBarProps) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for alumni by role, company, or interests..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
