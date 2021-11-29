export const validateAddCharacter = (array, props) => {
  return array.find((e) => e.id === props.id);
};
