import Image from "next/image";

type imageWithTextType = {
  cardImage: string;
  alt: string;
  description: string;
  textLeft: string;
  textRight: string;
};

export default function CardImageWithText({
  cardImage,
  alt,
  description,
  textLeft,
  textRight,
}: imageWithTextType) {
  return (
    <>
      <div className="flex items-center justify-center h-full w-full relative min-h-70 md:h-120 lg:h-90 mb-10">
        <Image src={cardImage} alt={alt} fill className="object-contain" />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center mb-2 font-jetbrains text-[11px]">
        <p>{textLeft}</p>
        <p className="text-primary-200">{textRight}</p>
      </div>

      <p className="text-xs w-full">{description}</p>
    </>
  );
}
