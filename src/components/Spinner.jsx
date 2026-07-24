const Spinner = () => {
  return (
    <div role="status">
      <svg aria-hidden="true"
           className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
           viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9[...]"
          fill="currentColor"/>
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1[...]"
          fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
export default Spinner
