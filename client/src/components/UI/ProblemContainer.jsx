import Graph from "../Graph";
import { DetailsSummary } from "./DetailsSummary";

export const ProblemContainter = () => {
  const customStyles = "text-[#101828] text-18px font-semibold";

  return (
    <section className="flex flex-col md:min-h-[100%]">
      <section className="mt-4 pt-4 mb-4 pb-4 text-center">
        <h2 className="text-[#101828] text-22px font-bold underline dark:text-slate-300">Problem</h2>
      </section>

      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <section className="bg-[#D8E5C3] rounded-xl min-h-full px-3 py-6 flex flex-col gap-6 md:w-1/2 md:py-10 md:justify-stretch md:gap-8 dark:bg-[#3D4D22]">
          <DetailsSummary open className={customStyles} title="Pesticides" description="The widespread use of pesticides can directly kill bees or damage their ability to navigate and reproduce, causing significant declines in bee populations." />
          <DetailsSummary className={customStyles} title="Climate Change" description="Rising temperatures and unpredictable weather patterns disrupt the natural habitats of bees, making it harder for them to find food and reproduce, which endangers their survival." />
          <DetailsSummary className={customStyles} title="Habitat Destruction" description="Urbanization and agricultural expansion reduce natural habitats, depriving bees of the diverse plants they rely on for food and shelter, contributing to their population decline." />
        </section>

        <section className="md:w-1/2">
          <Graph />
        </section>
      </section>
    </section>
  );
};
