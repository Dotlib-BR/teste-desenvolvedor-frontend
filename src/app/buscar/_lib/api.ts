import { z } from "zod";
import { Medication } from "../_lib/schemas";

/**
 * Fetches medications by name.
 *
 * @param name - Name, does not need to be exact.
 * @param page - Page to fetch, as there is a limit of items per page.
 * @returns Promise that resolves to an array of Medications.
 */
export function fetchMedications(name: string, page: number) {
  return fetch(
    `http://localhost:3000/data?name_like=${encodeURIComponent(name)}&_sort=published_at&_order=desc&_page=${page}&_limit=10`,
  )
    .then((response) => response.json())
    .then((json) => z.array(Medication).parse(json));
}

/**
 * Fetches medications by company.
 *
 * @param company - Company name, does not need to be exact.
 * @param page - Page to fetch, as there is a limit of items per page.
 * @returns Promise that resolves to an array of Medications.
 */
export function fetchMedicationsByCompany(company: string, page: number) {
  return fetch(
    `http://localhost:3000/data?company_like=${encodeURIComponent(company)}&_sort=published_at&_order=desc&_page=${page}&_limit=10`,
  )
    .then((response) => response.json())
    .then((json) => z.array(Medication).parse(json));
}
