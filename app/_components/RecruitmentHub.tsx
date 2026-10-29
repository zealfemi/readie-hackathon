import {
  recruitmentHubData,
  recruitmentHubDataType,
} from "../_data/recruitmentHub";
import CardImageWithText from "./CardImageWithText";
import CardSimpleList from "./CardSimpleList";

export default function RecruitmentHub() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {recruitmentHubData.map((data: recruitmentHubDataType, index) => (
        <div
          key={index}
          className="border-border first:lg:border-r flex flex-col">
          <div className="border-border border-t flex flex-col flex-1">
            <div className="bg-primary-500 px-4 py-5 lg:px-5">
              <CardImageWithText
                cardImage={data.image}
                alt={data.heading}
                description={data.description}
                textLeft={data.subtitle}
                textRight={data.card}
              />
            </div>

            <div className="bg-primary-600 border-border border-t py-7 px-4 lg:px-14 lg:py-10 flex flex-col flex-1 justify-between gap-3">
              <CardSimpleList
                heading={data.heading}
                description={data.content}
                list={data.features}
              />

              <p className="text-xs pt-3 border-border border-t">
                {data.footer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
