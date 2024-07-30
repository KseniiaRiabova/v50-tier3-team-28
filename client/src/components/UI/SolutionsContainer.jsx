import { DetailsSummary } from "./DetailsSummary";

export const SolutionsContainer = () => {
  return (
    <section className="flex flex-col">
      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <section className="bg-[#D8E5C3] h-64 md:w-1/2 dark:bg-[#3D4D22]">
          <DetailsSummary title="Plant Bee-Friendly Flowers" description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food." />
          <DetailsSummary title="Avoid Peticides" description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food." />
          <DetailsSummary title="Create Habitats" description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food." />
        </section>

        <section className="bg-[#D8E5C3] h-64 md:w-1/2 dark:bg-[#3D4D22]">
          <DetailsSummary title="Provide Water" description="Leave a shallow water source with landing spots, like pebbles or twigs, so bees can hydrate without drowning." />
          <DetailsSummary title="Support Local Beekeepers" description="Leave a shallow water source with landing spots, like pebbles or twigs, so bees can hydrate without drowning." />
          <DetailsSummary title="Create a Bee Bath" description="Leave a shallow water source with landing spots, like pebbles or twigs, so bees can hydrate without drowning." />
        </section>

        {/* TODO - when we add an image, we can add (md:h-auto) */}
        <section className="h-64 md:w-1/2">
          <p className="text-[#F4743B]">Third image container with top right corner curved design</p>
        </section>
      </section>
    </section>
  );
};