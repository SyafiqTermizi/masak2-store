import { schema } from "normalizr";

const media = new schema.Entity("media");
const ingredient = new schema.Entity("ingredient");
const step = new schema.Entity("step");
const group = new schema.Entity("group", {
  ingredients: [ingredient],
});
export const recipe = new schema.Entity("recipe", {
  groups: [group],
  steps: [step],
  medias: [media],
});

export const recipes = [recipe];
