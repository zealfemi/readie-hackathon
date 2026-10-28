export default function CVLieBanner() {
  type statType = {
    numbers: string;
    context: string;
  };

  const stats: statType[] = [
    {
      numbers: "1 in 2",
      context: "candidate profiles worldwide could be fake by 2028",
    },
    {
      numbers: "£8k–£12k",
      context: "CIPD-cited cost of a bad hire",
    },
    {
      numbers: "6%",
      context:
        "of candidates admit interview fraud, by impersonation or a stand-in",
    },
    {
      numbers: "4 in 10",
      context: "candidates use AI during applications",
    },
  ];

  return (
    <section className="radial-bg px-4 md:px-7 lg:px-14 py-25">
      <div className="text-center flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl lg:text-[58px] font-semibold">
          <span className="text-primary-200">CVs lie.</span> Interviews miss it.
        </h2>
        <p className="max-w-160">
          AI can write a flawless CV in seconds, and the same tools can put a
          different face on a video call. Interviews test presentation,
          references are biased, and none of it shows what a candidate can
          actually do.
        </p>
      </div>

      <div className="border-border border-t grid md:grid-cols-2 lg:grid-cols-4 mt-15 lg:mt-20">
        {stats.map((stat: statType, index) => (
          <div
            key={index}
            className={`px-4 py-6 lg:px-6 lg:py-8.5 flex flex-col gap-2.5 items-center justify-start text-center border-border border-b md:not-even:border-r lg:border-b-0 not-last:lg:border-r`}>
            <p className="font-light text-[28px] lg:text-[48px] text-primary-200">
              {stat.numbers}
            </p>
            <p className="text-sm">{stat.context}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center">
        Source line: Gartner (first three figures), reported by{" "}
        <span className="underline">HR Dive</span>; CIPD.
      </p>
    </section>
  );
}
