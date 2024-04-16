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
    <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-gray-200 px-2">
      {properties.activeIngredient.name}
    </div>
  );
}
