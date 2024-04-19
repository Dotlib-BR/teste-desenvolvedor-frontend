export default function extractActivePrinciplesNames(data) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  return data.join(', ');
}