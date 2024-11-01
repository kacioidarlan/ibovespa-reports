const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container max-w-4xl mx-auto py-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse" />
            <div className="flex gap-4">
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse" />
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Loading
