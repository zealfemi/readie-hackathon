"use client";

export default function Error({
  error,
  reset,
}: {
  error: { message: string };
  reset: () => void;
}) {
  return (
    <main className="z-0 px-5 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 items-center justify-center text-center min-h-full dashed-border px-4 py-8 lg:py-14 w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-primary-200">
          Something went wrong!
        </h1>
        <p className="">{error.message}</p>

        <button
          className="px-8 py-2.5 w-35 btn bg-primary-400 text-primary-200 rounded-md flex items-center justify-center gap-2 font-medium hover:bg-primary-300 transition-colors cursor-pointer"
          onClick={() => reset()}>
          Try again
        </button>
      </div>
    </main>
  );
}
