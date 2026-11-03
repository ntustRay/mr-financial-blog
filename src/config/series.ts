interface SeriesDefinition {
  id: string;
  title: string;
  description: string;
  total: number;
  intro?: string;
  notice?: string;
  chapters?: readonly string[];
  previewImage?: { src: string; alt: string };
  resources?: readonly { label: string; href: string }[];
}

// Technical tutorials remain in mr-blog. This site currently has no series.
export const seriesDefinitions: readonly SeriesDefinition[] = [];
export type SeriesId = (typeof seriesDefinitions)[number]['id'];
export const getSeriesDefinition = (id: string) =>
  seriesDefinitions.find((series) => series.id === id);
