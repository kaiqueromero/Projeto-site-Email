import { FiSearch } from "react-icons/fi";

const SearchForm = () => (
  <form
    className="min-w-0 md:w-full flex-grow flex"
    onSubmit={(ev) => ev.preventDefault()}
  >
    <input
      className="
        min-w-0 w-full p-2 rounded-l-lg border-2 border-transparent
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        focus:outline-none focus:border-primary-400 transition-colors"
      type="text"
      placeholder="Pesquisar..."
    />
    <button
      className="
        min-w-0 py-2 px-4 rounded-r-lg border-2 border-transparent
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        focus:outline-none focus:border-primary-400 focus:text-primary-400
        hover:border-primary-400 hover:text-primary-400 transition-colors"
    >
      <FiSearch />
    </button>
  </form>
);

export default SearchForm;
