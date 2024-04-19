export default function searchItems(items, searchTerm) {
  const lowerCaseSearchTerm = searchTerm.toUpperCase();
  return items.filter((item) =>
    item.name.toUpperCase().includes(lowerCaseSearchTerm) ||
    item.company.toUpperCase().includes(lowerCaseSearchTerm)
  );
}