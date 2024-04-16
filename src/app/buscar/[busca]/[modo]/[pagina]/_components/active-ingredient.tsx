import { ActiveIngredient as ActiveIngredientType } from "@/app/buscar/_lib/schemas";

/** Properties for the {@link ActiveIngredient} component. */
export interface ActiveIngredientProperties {
  /** The active ingredient to display. */
  activeIngredient: ActiveIngredientType;
}

/** Displays an active ingredient. */
export default function ActiveIngredient(
  properties: ActiveIngredientProperties,
) {
  return (
    <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full px-2 text-teal-500 outline outline-1 outline-teal-500">
      {properties.activeIngredient.name}
    </div>
  );
}
