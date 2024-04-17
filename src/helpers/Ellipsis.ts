
export const ellipsis_format = (name: string): any => {
  let add_ellipsis = name;

  add_ellipsis = add_ellipsis.substring(0, 20);
  if (name.length > 25) {
    add_ellipsis += "...";
  }
  return add_ellipsis;
}