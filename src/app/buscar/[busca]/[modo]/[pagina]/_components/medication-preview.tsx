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
    <div className="relative flex flex-col justify-between gap-x-16 gap-y-2 rounded-lg border-[1px] border-teal-500 bg-white p-4 sm:flex-row">
      <div className="absolute inset-0 rounded-lg [background:radial-gradient(ellipse,_transparent,theme(colors.teal.500/5%))]"></div>
      <div className="max-w-full">
        <div className="break-words text-lg font-bold lowercase first-letter:uppercase">
          {medication.name}
        </div>
        <div className="max-w-full overflow-hidden text-ellipsis opacity-75">
          {medication.company}
        </div>
      </div>
      <div className="flex max-w-full flex-col items-center gap-1 sm:items-end">
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
