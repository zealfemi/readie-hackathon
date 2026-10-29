export default function CardDetailedListHeader({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <>
      <h4 className="text-primary-200 text-[28px] lg:text-[46px] font-semibold">
        {heading}
      </h4>
      <p className="border-border border-b pb-5">{description}</p>
    </>
  );
}
