import { Medication } from "@/app/buscar/_lib/schemas";
import ActiveIngredient from "./active-ingredient";

/** Properties for the {@link MedicationPreview} component. */
export interface MedicationPreviewProperties {
  /** The medication to display. */
  medication: Medication;
}

/**
 * Displays a medication preview.
 * @param properties - Properties for the component.
 */
export function MedicationPreview(properties: MedicationPreviewProperties) {
  const { medication } = properties;

  return (
    <div className="flex flex-col justify-between gap-x-16 gap-y-2 sm:flex-row">
      <div className="max-w-full">
        <div className="text-lg font-bold">{medication.name}</div>
        <div className="w-sm max-w-full overflow-hidden text-ellipsis ">
          {medication.company}
        </div>
      </div>
      <div className="flex max-w-full flex-col items-center sm:items-end">
        <div>Princípios ativos</div>
        <ul className="flex max-w-full flex-row flex-wrap justify-end gap-2">
          {medication.active_principles.map((activePrinciple) => (
            <li key={activePrinciple.id} className="contents">
              <ActiveIngredient
                activeIngredient={activePrinciple}
              ></ActiveIngredient>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MedicationPreview;
