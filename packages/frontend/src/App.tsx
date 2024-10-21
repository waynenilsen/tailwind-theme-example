export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base">
      <div className="bg-base shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-4">This card demonstrates our new semantic color scheme.</p>
        <div className="space-y-2">
          <button className="w-full py-2 px-4 bg-secondary text-base rounded hover:bg-secondary-light transition-colors">
            Secondary Button
          </button>
          <button className="w-full py-2 px-4 bg-accent text-base rounded hover:bg-accent-light transition-colors">
            Accent Button
          </button>
        </div>
        <div className="mt-4 space-y-2">
          <div className="p-2 bg-info rounded hover:bg-info-light transition-colors ">
            Info message
          </div>
          <div className="p-2 bg-success rounded hover:bg-success-light transition-colors">
            Success message
          </div>
          <div className="p-2 bg-warning rounded hover:bg-warning-light transition-colors">
            Warning message
          </div>
          <div className="p-2 bg-error rounded hover:bg-error-light transition-colors">
            Error message
          </div>
        </div>
      </div>
    </div>
  );
}
