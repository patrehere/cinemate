
export const Button = ({children}) => {
  return (
    <button className="w-64 bg-slate-700 py-2 px-3 mr-2 rounded text-white cursor-pointer dark:bg-slate-300 dark:text-slate-800">
      {children}
    </button>
  );
}
